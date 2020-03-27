const base_url="https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";
fetch (`${base_url}`)
    . then (response => {
    return response.json();
    })
    . then (json => {
        //console.log(json);
        document.getElementById("last_refresh").innerHTML="<b> Last Refreshed At: </b>"+json.data.lastRefreshed
        document.getElementById("total").innerHTML="<b> Total Cases: </b>"+json.data.total.confirmed;
        document.getElementById("active").innerHTML="<b> Active Cases: </b>"+json.data.total.active;
        document.getElementById("discharged").innerHTML="<b> Discharged: </b>"+json.data.total.recovered;
        document.getElementById("dead").innerHTML="<b> Deaths: </b>"+json.data.total.deaths;
    })

const state_url="https://api.covid19india.org/state_district_wise.json";
fetch (`${state_url}`)
    . then (response => {
    return response.json();
    })
    . then (json => {
    //console.log(json);
        document.getElementById("goa_totalcases").innerHTML="<b> Total Cases: </b>"+json.Goa.districtData['North Goa'].confirmed;
  // Changes made in API
        //document.getElementById("goa_active").innerHTML="<b> Active Cases: </b>"+json.Goa.districtData['North Goa'].active;
        //document.getElementById("goa_recovered").innerHTML="<b> Discharged: </b>"+json.Goa.districtData['North Goa'].recovered;
        //document.getElementById("goa_deaths").innerHTML="<b> Deaths: </b>"+json.Goa.districtData['North Goa'].deaths;
    })
