// APIKey : e19d105c22c1f38a43162f6011a1ceac
// ID Ciudad: Quillacollo:  3906791
// URL: api.openweathermap.org/data/2.5/weather?id=3906791&units=metric&appid=e19d105c22c1f38a43162f6011a1ceac




const requestURL="https://api.openweathermap.org/data/2.5/weather?id=3906791&units=metric&appid=e19d105c22c1f38a43162f6011a1ceac";
const request = new XMLHttpRequest();
request.open('GET',requestURL);

request.responseType='json';
request.send();

//Obtener datos json
request.onload=function()
{
    const Clima_json=request.response;
    console.log(Clima_json);

    //document.getElementById('temperatura').innerHTML=Clima_json['main'].temp;
    mostrarClima(Clima_json);
}

function mostrarClima(Clima_json)
{
    //Temperatura Quillacollo
    //header 
    var header1 = document.querySelector('header');
    var Tituloh1 = document.createElement('h1');
    

     Tituloh1.textContent=Clima_json.name;
     header1.appendChild(Tituloh1);
     


//section
var section1 = document.querySelector('section');
var Temperatura = document.createElement('h2');
var tema = document.createElement('p');
var min = document.createElement('p');
var max = document.createElement('p');
var humedad=document.createElement('p');

 Temperatura.textContent='Temperatura';
tema.textContent='Temperatura Actual:'+ Clima_json.main.temp + '°C';
min.textContent='Temperatura Minima:'+ Clima_json.main.temp_min + '°C';
max.textContent='Temperatura Maxima:'+ Clima_json.main.temp_max + '°C';
humedad.textContent='La Humedad es:'+Clima_json.main.humidity+'%';

section1.appendChild(Temperatura);
section1.appendChild(tema);
section1.appendChild(min);
section1.appendChild(max);
section1.appendChild(humedad);

//article

var article=document.querySelector('article');
var CondenadaH3=document.createElement('h3');
var latitud=document.createElement('p');
var lungitud=document.createElement('p');

CondenadaH3.textContent='Coordenadas';
latitud.textContent='La Latitud es:'+Clima_json.coord.lat;
lungitud.textContent='La Longitud es:'+Clima_json.coord.lon;

article.appendChild(CondenadaH3);
article.appendChild(latitud);
article.appendChild(lungitud);


//Div
    var div=document.querySelector('div');
    var Viento=document.createElement('h4');
    var Velocidad=document.createElement('p');
    var Direccion=document.createElement('p');

    Viento.textContent='Viento';
    Velocidad.textContent='La velocidad del viento es:'+Clima_json.wind.speed;
    Direccion.textContent='La direccion del viento es:'+Clima_json.wind.deg;
    

    div.appendChild(Viento);
    div.appendChild(Velocidad);
    div.appendChild(Direccion);
    

}