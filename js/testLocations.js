<<<<<<< HEAD
$(document).ready(function () {
    $('select').formSelect();
});
$('#states').on('change', function () {
    console.log($(this).val());
})
var state = $('select').val();
console.log(state);
=======
$('.dropdown-trigger').dropdown();
>>>>>>> master

var states = ['new-jersey', 'new-york']
var ajax1 = $.ajax({
    url: 'https://covid-19-testing.github.io/locations/' + states[0] + '/complete.json',
    method: 'GET'
});
var ajax2 = $.ajax({
    url: 'https://covid-19-testing.github.io/locations/' + states[1] + '/complete.json',
    method: 'GET'
});
ajax1.then(function (response) {
    console.log(response)
});
ajax2.then(function (response) {
    console.log(response)
});


//No functions on initial page
//get Covid Testing API response
//Presented with a drop down placeholder 'CHoose a state"
// On click arrow button drop down with show all available states
    //On click for state,  run .empty() function in card field container, grabs the value of the state and puts it into the API URL call along with api key to get response and closes drop down
    //then 
        //example : var settings = {
                //   "url": "https://covid-19-testing.github.io/locations/" + State Value + "/complete.json",
                //   "method": "GET",
                //   "timeout": 0,
                // };

                // $.ajax(settings).done(function (response) {
                //   console.log(response);
                // });
        //Then create a function that will append attribute of show to hidden card
        //Create a for loop that will run through response.length i++
        //create a var for response.length = results[i]
        //in function we will append results[i].name to card title attribute 
        //Then Append results[i].description and results[i].physicalAddress.splice(0,2) and results[i].phones.number to card body

