//STATISTICS TAB HTML PSEUDO
// in statistics tab once clicked will be taken to statistics html (Completed)
// Create var for each country we want in the statistics table
var countries = ['united-states', 'italy', 'spain', 'germany', 'china']
// On load start this function
function initStatPage() {
    //Create var for each different ajax call URL. Making the call separately ensures that the computer does'nt get overloaded with a bunch of ajax calls.
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
        console.log(response[response.length - 1]);
    });

    ajax2.then(function (response) {
        console.log(response[response.length - 1]);
    });

    ajax3.then(function (response) {
        console.log(response[response.length - 1]);
    });

    ajax4.then(function (response) {
        console.log(response[response.length - 1]);
    });

    ajax5.then(function (response) {
        console.log(response[response.length - 1]);
    });
}

initStatPage();

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
