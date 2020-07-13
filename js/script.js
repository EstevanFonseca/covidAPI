let url = 'https://api.covid19api.com/dayone/country/brazil';

window.onload = function(){
        this.loadData();
}

function loadData(){
    
    getJSON(url, function(status, covid = getData()){

        for(i=(covid.length)-1;i>=0;i--){

            let html = "<article>";
            let date = covid[i].Date;
            let confirmed = covid[i].Confirmed;
            let deaths = covid[i].Deaths;
            let recovered = covid[i].Recovered;
            let active = covid[i].Active;

            html += "<p id='test' style='text-align: right; font-size:10pt;'>" + date + "</p>" + 
            "<hr>" +
            "<p style='padding-top: 20px;'>Confirmed: " + confirmed + "</p>" + 
            "<p>Deaths: " + deaths + "</p>" + 
            "<p>Recovered: " + recovered + "</p>" +
            "<p>Active: " + active + "</p>"
            "</article>"

            document.getElementById("cases").innerHTML += html;
        }
        
    });
}

function getJSON(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){

        var status = xhr.status;

        if(status == 200){
            callback(status, xhr.response);
        } else {
            location.reload(true);
        }     
    }
    xhr.send();
};


