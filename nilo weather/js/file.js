let parent = document.querySelector(".parent");
const btn = document.querySelector(".btn")
const inputcity = document.getElementById("city");
const dad =  document.querySelector(".list")

btn.addEventListener("click", function () {


    let inputvalue = inputcity.value;

    if (inputvalue == "") {
        alert("Please Enter Location")
    } else {
        show(inputvalue)
        
    }

    function show(city) {

        fetch(` http://api.weatherapi.com/v1/current.json?key=4135f981464a4057b40134250220612&q=${city}&aqi=no`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                parent.innerHTML = `            <h2>${city}</h2>
                                                <h1>${data.current.temp_c}°</h1>
                                                <p>${data.location.localtime}</p>`
                                                
                        dad.innerHTML = 
                                                `
    
                                                    <h4 id='icon-flex'>${city} faren is:${data.current.temp_f}°<i id='i' style='font-size:24px' class='fas'>&#xf6c4;</i></h4>
                                                    <h4 id= 'hs4'>${city} epich:${data.location.localtime_epoch}</h4>
                                                    <h4 id= 'hs4'>${data.location.tz_id}</h4>
                                                    <h4 id= 'hs4'>country:${data.location.country}</h4>
                                                    <h4 id= 'hs4'>${city} Lat is:${data.location.lat}</h4>
    
                                                    
                                           
                                    `
                                
    
    
    
            })
            inputcity.value=null;
            
            
    
    
    }




})
console.log(window)





