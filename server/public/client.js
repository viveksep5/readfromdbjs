		 
// DOM elements we want to reference  
  var buttonEl = document.getElementById('btn'); 
  var inputEl = document.getElementById('input-sa'); 

//  var inputValue = inputEl.value; 
//  alert(inputValue);
// checkValue function that runs the comparison 
  function checkValue() { 
      fetch('http://localhost:3000/api/tasks', {"method": "GET"}) 
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
//      var inputValue = inputEl && inputEl.value; 
//      alert(inputValue);
//      $.ajax({
//      type: 'GET',
//      url: '/api/tasks',
//    }).then((response) => {
//    }).then((response) => {
//      render(response);
//    });
  };

  buttonEl.addEventListener("click",checkValue);