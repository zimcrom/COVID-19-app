$(document).ready(function () {
    $('select').formSelect();
});
//Create an open array that our values can be pushed into later.
var states = [];
//Call on states ID inside of select element and every time theres a change console.log the value
$('#states').on('change', function () {
    console.log($(this).val());
// Go into the states array and push the value into it for every change
    states.push($(this).val());
    $('#testing-location').empty()
//console.log this to see the new array every time for states
    console.log(states);

    var ajax1 = $.ajax({
        url: 'https://covid-19-testing.github.io/locations/' + states[states.length - 1] + '/complete.json',
        method: 'GET'
    });
    ajax1.then(function (response) {
        console.log(response)
        for (i = 0; i < response.length; i++) {
            var address = response[i].physical_address[0].address_1;
            var city = response[i].physical_address[0].city;
            var province = response[i].physical_address[0].state_province;
            var postal = response[i].physical_address[0].postal_code;
            var card = $('<div>').addClass('card');
            var cardBody = $('<div>').addClass('card-body');
            var testName = $('<h3>').addClass('card-name').text(response[i].name);
            var description = $('<p>').addClass('card-title test-description').text('Description : ');
            var testDescription = $('<p>').addClass('card-text test-description').text(response[i].description);
            var testAddressTag = $('<p>').addClass('card-title test-address-tag').text('Address : ')
            var testAddress = $('<p>').addClass('card-text test-address').text(address);
            var testCity = $('<p>').addClass('card-text test-city').text(city);
            var testProvince = $('<p>').addClass('card-text test-province').text(province);
            var testPostal = $('<p>').addClass('card-text test-postal').text(postal);
            var phone = $('<p>').addClass('card-title test-phone').text('Phone Number : ');
            var testPhone = $('<p>').addClass('card-text test-phone').text(response[i].phones[0].number);
            cardBody.append(testName,description, testDescription, testAddressTag, testAddress, testCity, testProvince, testPostal, phone, testPhone);
            card.append(cardBody);
            $('#testing-location').append(card);
        };
    });
})



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