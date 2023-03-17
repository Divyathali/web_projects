function AutoRefresh( t ){
	setTimeout("location.reload(true);", t);
	}

function myFunction(name,country) {	
  var node1 = document.createElement("h2");
  var textnode1 = document.createTextNode(name);
  node1.appendChild(textnode1);
  document.getElementById("myList").appendChild(node1);
  
  var node = document.createElement("p");
  var textnode = document.createTextNode(country);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);  
}

function myFunction1(par,info) {
  var node = document.createElement("p");
  var textnode = document.createTextNode(par+':'+'\n'+info);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

var city;
var url;
var key='463e5eb07716e6f15f3a5b04311cb065';
function fun(){
	//var city = document.getElementById("id1").value;
	//console.log(city)
	//var url="http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=463e5eb07716e6f15f3a5b04311cb065";
	var city = document.getElementById("id1").value;
	if(city==""){
		alert("Enter the City/Place name");
		//document.getElementById("alert1").innerHTML="Enter the City/Place name";
	}
	var url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=463e5eb07716e6f15f3a5b04311cb065";
	//var arr=[];
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function() 
	{
		var status = xhr.status;
		if (status === 200) 
		{
			var res=xhr.response;
			try
			{
				myFunction(res.name,res.sys.country);
				//timezone converstion specify important
				myFunction1('Longitude',res.coord.lon);
				myFunction1('Latitude',res.coord.lat);
				for(var i=0;i<res.weather.length;i++){
					myFunction1('Weather condition',res.weather[i].main);
					myFunction1('Description',res.weather[i].description);
				}
				myFunction1('Temperature',res.main.temp);
				myFunction1('Temperature min',res.main.temp_min);
				myFunction1('Temperature max',res.main.temp_max);
				myFunction1('Pressure',res.main.pressure);
				myFunction1('Humidity',res.main.humidity);
				myFunction1('Wind speed kmph',res.wind.speed);
				myFunction1('Wind direction',res.wind.deg);	
                AutoRefresh(20000);	//if you dont need delete it.			
			}
			catch(error)
			{
				console.log(error.message);
			}
		} 
		else 
		{
			console.log(xhr.response);
		}
	};
	//console.log(arr)
    xhr.send();	
}

function info(){
	//var city = document.getElementById("id1").value;
	//console.log(city)
	//var url="http://api.openweathermap.org/data/2.5/weather?lat=28.6667&lon=77.2167&appid=463e5eb07716e6f15f3a5b04311cb065";
	var latit = document.getElementById("lati").value;
	var latitude=parseFloat(latit);
	var longit=document.getElementById("longi").value;
	var longitude=parseFloat(longit);
	
	var url="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+key;
	//var arr=[];
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function() 
	{
		var status = xhr.status;
		if (status === 200) 
		{
			var res=xhr.response;
			console.log(res);
			try
			{
				console.log(res);
				myFunction(res.name,res.sys.country);
				//timezone converstion specify important
				myFunction1('Longitude',res.coord.lon);
				myFunction1('Latitude',res.coord.lat);
				for(var i=0;i<res.weather.length;i++){
					myFunction1('Weather condition',res.weather[i].main);
					myFunction1('Description',res.weather[i].description);
				}
				myFunction1('Temperature',res.main.temp);
				myFunction1('Temperature min',res.main.temp_min);
				myFunction1('Temperature max',res.main.temp_max);
				myFunction1('Pressure',res.main.pressure);
				myFunction1('Humidity',res.main.humidity);
				myFunction1('Wind speed kmph',res.wind.speed);
				myFunction1('Wind direction',res.wind.deg);	
                AutoRefresh(20000);	//if you dont need delete it.			
			}
			catch(error)
			{
				console.log(error.message);
			}
		} 
		else 
		{
			console.log(xhr.response);
		}
	};
	//console.log(arr)
    xhr.send();	
}