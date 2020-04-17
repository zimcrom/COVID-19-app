//STATISTICS TAB HTML PSEUDO
// in statistics tab once clicked will be taken to statistics html (Completed)
// Create var for each country we want in the statistics table
var countries = ['united-states', 'italy', 'spain', 'germany', 'china']
var date = new Date();
// On load start this function
function initStatPage() {
    //Create var for each different ajax call URL. Making the call separately ensures that the computer doesn't get overloaded with a bunch of ajax calls.
    //IMPORTANT!!! USING THIS URL OF https://api.covid19api.com/total/country/ AND COUNTRY IS SO VAGUE THAT ITS RESPONSE GIVES US ALL THE STATUS NUMBERS UNFORTUNATELY FOR EACH COUNTRY IT GIVES 80+ RESPONSES BECAUSE ITS BROKEN DOWN BY TIME FOR EXAMPLE:
    // WHEN WE CALL FOR THE USA URL ITS GONNA GIVE US ALL THE STATUS CASES ON JANUARY 1-31 AND FEBRUARY 1-28 AND SO ON AND SO FORTH AND THATS TOO MANY RESPONSES FOR THE COMPUTER TO HANDLE BECAUSE WE NEED TO DO IT FOR EACH COUNTRY
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
    // To fix the problem we kept getting of having too many responses what i did in the console.log was instead of saying give me all the responses, I told the computer to get the response but only give me the last index which will always be the current date data for each country.
    ajax1.then(function (response) {
        //give that response a variable so we can access that later and easier
        var usaLast = response[response.length - 1];
        //console log last index from the response
        console.log(usaLast);
        // create var that will create a table row
        var tableRow = $('<tr>');
        // give table row a class
        tableRow.addClass('usa-data');
        // create var that will put a <td> with the text of Country Name
        var tableDataCountry = $('<td>').text(usaLast.Country);
        // create var that will put a <td> with the text of Date formatted to moment js
        var tableDataDate = $('<td>').text(moment(usaLast.Date).format("dddd, MMMM Do YYYY"));
        // create var that will put a <td> with the text of confirmed cases
        var tableDataConfirmed = $('<td>').text(usaLast.Confirmed);
        // create var that will put a <td> with the text of deaths
        var tableDataDeaths = $('<td>').text(usaLast.Deaths);
        // create var that will put a <td> with the text of recovered
        var tableDataRecovered = $('<td>').text(usaLast.Recovered);
        // inside of id table-body append the var tableRow
        $('#table-body').append(tableRow);
        // inside of tableRow create all variables
        tableRow.append(tableDataCountry, tableDataDate, tableDataConfirmed, tableDataDeaths, tableDataRecovered);
    });

    ajax2.then(function (response) {
        var italyLast = response[response.length - 1];
        console.log(italyLast);
        var tableRow = $('<tr>');
        tableRow.addClass('italy-data');
        var tableDataCountry = $('<td>').text(italyLast.Country);
        var tableDataDate = $('<td>').text(moment(italyLast.Date).format("dddd, MMMM Do YYYY"));
        var tableDataConfirmed = $('<td>').text(italyLast.Confirmed);
        var tableDataDeaths = $('<td>').text(italyLast.Deaths);
        var tableDataRecovered = $('<td>').text(italyLast.Recovered);
        $('#table-body').append(tableRow);
        tableRow.append(tableDataCountry, tableDataDate, tableDataConfirmed, tableDataDeaths, tableDataRecovered);
    });

    ajax3.then(function (response) {
        var spainLast = response[response.length - 1];
        console.log(spainLast);
        var tableRow = $('<tr>');
        tableRow.addClass('spain-data');
        var tableDataCountry = $('<td>').text(spainLast.Country);
        var tableDataDate = $('<td>').text(moment(spainLast.Date).format("dddd, MMMM Do YYYY"));
        var tableDataConfirmed = $('<td>').text(spainLast.Confirmed);
        var tableDataDeaths = $('<td>').text(spainLast.Deaths);
        var tableDataRecovered = $('<td>').text(spainLast.Recovered);
        $('#table-body').append(tableRow);
        tableRow.append(tableDataCountry, tableDataDate, tableDataConfirmed, tableDataDeaths, tableDataRecovered);
    });

    ajax4.then(function (response) {
        var germanyLast = response[response.length - 1];
        console.log(germanyLast);
        var tableRow = $('<tr>');
        tableRow.addClass('germany-data');
        var tableDataCountry = $('<td>').text(germanyLast.Country);
        var tableDataDate = $('<td>').text(moment(germanyLast.Date).format("dddd, MMMM Do YYYY"));
        var tableDataConfirmed = $('<td>').text(germanyLast.Confirmed);
        var tableDataDeaths = $('<td>').text(germanyLast.Deaths);
        var tableDataRecovered = $('<td>').text(germanyLast.Recovered);
        $('#table-body').append(tableRow);
        tableRow.append(tableDataCountry, tableDataDate, tableDataConfirmed, tableDataDeaths, tableDataRecovered);
    });

    ajax5.then(function (response) {
        var chinaLast = response[response.length - 1];
        console.log(chinaLast);
        var tableRow = $('<tr>');
        tableRow.addClass('china-data');
        var tableDataCountry = $('<td>').text(chinaLast.Country);
        var tableDataDate = $('<td>').text(moment(chinaLast.Date).format("dddd, MMMM Do YYYY"));
        var tableDataConfirmed = $('<td>').text(chinaLast.Confirmed);
        var tableDataDeaths = $('<td>').text(chinaLast.Deaths);
        var tableDataRecovered = $('<td>').text(chinaLast.Recovered);
        $('#table-body').append(tableRow);
        tableRow.append(tableDataCountry, tableDataDate, tableDataConfirmed, tableDataDeaths, tableDataRecovered);
    });
}

initStatPage();

// On click "choose your location button"
$(document).ready(function () {
    $('.modal').modal();
});

$('#search-term').keypress(function (event) {
<<<<<<< HEAD
    // if ('#search-term' == null) {
    //     console.log('Please check spelling or type in correct state');
    // }
    if (event.keyCode === 13) {
        event.preventDefault();
        // if ($('#search-term').val('')) {

        //     console.log('no search value');
        // }
=======

    if (event.keyCode === 13) {
        event.preventDefault();
>>>>>>> master
        $('#submit-button').click();
    }
});

$('#submit-button').on('click', function () {
<<<<<<< HEAD
    $('#current-search').empty();
=======
>>>>>>> master
    $('.state-header').addClass('hide');
    $('.state-card').addClass('hide');
    $('#modalTwo').removeClass('hide');
    $('#modalTwo').addClass('show');
    var state = $('#search-term').val();
    $('#search-term').val('');

    var queryUrl = "https://corona.lmao.ninja/states/" + state;

    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        getStateInfo(response)
    });

});

function getStateInfo(response) {
<<<<<<< HEAD
=======
    $('#current-search').empty();
>>>>>>> master
    var card = $('<div>').addClass('card');
    var cardBody = $('<div>').addClass('card-body');
    var state = $('<h2>').addClass('card-title').text(response.state);
    var stateDate = $('<h4>').addClass('card-title').text(date.toLocaleDateString('en-US'));
<<<<<<< HEAD
    var cases = $('<p>').addClass('card-text current-cases').text('Current Cases : ' + response.cases);
    var casesToday = $('<p>').addClass('card-text cases-today').text('Cases Today : ' + response.todayCases);
    var deaths = $('<p>').addClass('card-text current-deaths').text('Current Deaths : ' + response.deaths);
    var deathsToday = $('<p>').addClass('card-text deaths-today').text('Deaths Today : ' + response.todayDeaths);
    var tested = $('<p>').addClass('card-text current-tested').text('Amount of people tested : ' + response.tests);
=======
    var cases = $('<p>').addClass('card-text current-cases').text('Current Cases :' + response.cases);
    var casesToday = $('<p>').addClass('card-text cases-today').text('Cases Today :' + response.todayCases);
    var deaths = $('<p>').addClass('card-text current-deaths').text('Current Deaths :' + response.deaths);
    var deathsToday = $('<p>').addClass('card-text deaths-today').text('Deaths Today :' + response.todayDeaths);
    var tested = $('<p>').addClass('card-text current-tested').text('Amount of people tested :' + response.tests);
>>>>>>> master
    state.append(stateDate);
    cardBody.append(state, cases, casesToday, deaths, deathsToday, tested);
    card.append(cardBody);
    $('#current-search').append(card);
}
// modal pop up with zip code input form"
    // After zip code input after click modal pop up goes away and zip code is passed in a var for google places api
    // google places api will access location and return county depending on input
    // create var for county value and appends to weather disease tracker api
    // print covid info in hidden card in 'Choose your location' section
    // append attr show card

    // var county = $(county).val()

    // applicationCache.gooele.https + county + apikey


