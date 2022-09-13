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
  //Create function to download  data from API and save it to local storage
  function downloadData() {
    //fetch data from fake api
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        //save data to local storage
        localStorage.setItem('data', JSON.stringify(json));
      });
  


    //Save data to local storage
  } 

  function calculateDaysBetweenDates(begin,end) {
    //Calculate days between dates
    let beginDate = new Date(begin);
    let endDate = new Date(end);
    let days = Math.round((endDate - beginDate) / (1000 * 60 * 60 * 24));
    return days;
    
  }

  //Create function to get data from local storage
  function getData() {
    //Get data from local storage
    
  }

  // get data from local storage
  let data = getData();



})();
