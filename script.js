const base_url = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";

fetch(`${base_url}`)
    .then(response => {
        return response.json();
    })
    .then(json => {
        document.getElementById("total").innerHTML = +json.data.total.confirmed;
        document.getElementById("active").innerHTML = +json.data.total.active;
        document.getElementById("recovered").innerHTML = "<b></b>" + json.data.total.recovered;
        document.getElementById("deceased").innerHTML = "<b></b>" + json.data.total.deaths;
    })

const state_url="https://covid-goa.herokuapp.com/goa-cases";
fetch (`${state_url}`)
    . then (response => {
    return response.json();
    })
    . then (json => {
        document.getElementById("goa_confirmed").innerHTML=+json.data['0'].confirmed;
        document.getElementById("goa_suspects").innerHTML=+json.data['0'].suspects;
        document.getElementById("goa_deceased").innerHTML=+ json.data['0'].deceased;
        document.getElementById("goa_recovered").innerHTML=+ json.data['0'].active;

    })
