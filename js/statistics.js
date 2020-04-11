//STATISTICS TAB HTML PSEUDO

// in statistics tab once clicked will be taken to statistics html (Completed)
// On load,
    // Create var for array of countries: 
        // var countries = [
        //     {
        //         name: 'united-states',
        //         status: [
        //             'confirmed',
        //             'active',
        //             'deaths',
        //             'recovered'
        //         ]
        //     },
        //     {
        //         name: 'italy',
        //         status: [
        //             'confirmed',
        //             'active',
        //             'deaths',
        //             'recovered'
        //         ]
        //     },
        //     {
        //         name: 'spain',
        //         status: [
        //             'confirmed',
        //             'active',
        //             'deaths',
        //             'recovered'
        //         ]
        //     },
        //     {
        //         name: 'germany',
        //         status: [
        //             'confirmed',
        //             'active',
        //             'deaths',
        //             'recovered'
        //         ]
        //     },
        //     {
        //         name: 'china',
        //         status: [
        //             'confirmed',
        //             'active',
        //             'deaths',
        //             'recovered'
        //         ]
        //     }
        // ]
        // for ( var i = 0; i < countries.length; i++)
    //create var array for status: var status = ['confirmed', 'active', 'deaths', 'recovered']
        // for (var i = 0; i < status.length; i++)
    // grab world info by country total API endpoint
        //API URL:var settings = {
        //   "url": "https://api.covid19api.com/total/country/" + countries[i] + "/status/" + status[i] ,
        //   "method": "GET",
        //   "timeout": 0,
        // };

        // $.ajax(settings).done(function (response) {
        //   console.log(response);
        // });

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
