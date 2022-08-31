(function () {
 
  let fruit = 'Apple';

  let bag = {
    [fruit]: 'red',
    pear: 'green'
  };

  let bag2 = {
    [fruit.toUpperCase()]: 'RED',
    pear: 'GREEN'
  };


  //create function to load data from web API
  function loadData(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    }).then(data => JSON.parse(data));
  }
  //load data from web API
  loadData('https://jsonplaceholder.typicode.com/photos')
    .then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log('Finally');
    });

  console.log(bag); // red
  console.log(bag2); // RED
})();
