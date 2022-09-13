(function () {
 
  let fruit = 'Apple';

  let bag = {
    [fruit]: 'red',
    pear: 'green'
  };

  console.log(bag); // red

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
