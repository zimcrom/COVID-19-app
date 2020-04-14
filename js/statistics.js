//STATISTICS TAB HTML PSEUDO
// in statistics tab once clicked will be taken to statistics html (Completed)
// On load,
var countries = ['united-states', 'italy', 'spain', 'germany', 'china']
var countryStatus = ['confirmed', 'active', 'deaths', 'recovered']

for (var i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

for (var j = 0; j < countryStatus.length; j++) {
    console.log(countryStatus[j]);
}

function initStatPage() {
    // Create var for array of objects in countries:

    //Create a var that will go into countries array and get the countries names

    // Create a var that will go into countries array and get the status
    // Create for loop that will grab every name of the countries and append it
    // for (var i = 0; i < countryName.length; i++) {

    // }
    var ajax1 = $.ajax({
        url: 'https://api.covid19api.com/total/country/' + countries[0],
        method: 'GET'
    });

    var ajax2 = $.ajax({
        url: 'https://api.covid19api.com/total/country/' + countries[1],
        method: 'GET'
    });

    var ajax3 = $.ajax({
        url: 'https://api.covid19api.com/total/country/' + countries[2],
        method: 'GET'
    });

    var ajax4 = $.ajax({
        url: 'https://api.covid19api.com/total/country/' + countries[3],
        method: 'GET'
    });

    var ajax5 = $.ajax({
        url: 'https://api.covid19api.com/total/country/' + countries[4],
        method: 'GET'
    });

    ajax1.then(function (response) {
        console.log(response);
    });

    ajax2.then(function (response) {
        console.log(response);
    });
}

initStatPage();
// var url = "https://api.covid19api.com/total/country/" + countryName;

    // // grab world info by country total API endpoint
    //     var settings2 = {
    //       "url": "https://api.covid19api.com/total/country/" + countryName[i] + "/status/" + status[i] ,
    //       "method": "GET",
    //       "timeout": 0,
    //     };

    //     $.ajax(settings2).done(function (response) {
    //       console.log(response);
    //     });

        //$('<tr1>).append('<td>').text(response)
    // print to 'World Statistics' Table
// On click "choose your location button"
// modal pop up with zip code input form"
    // After zip code input after click modal pop up goes away and zip code is passed in a var for google places api
    // google places api will access location and return county depending on input
    // create var for county value and appends to weather disease tracker api
    // print covid info in hidden card in 'Choose your location' section
    // append attr show card

    // var county = $(county).val()

    // applicationCache.gooele.https + county + apikey


    // var tableRow = $('<tbody>').append('<tr>');
        // var tableData = $(tableRow).append('<td>').text(countryName[i]);
