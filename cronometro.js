function getTime() 
{
	//Fecha actual
	now = new Date();
	//Fecha objetivo
	targetDate = new Date("May 31 2014 23:59:59");
	//inicializacion de variables del tiempo a mostrar
	var days = 0;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	
	//se saca la diferencia entre la fecha objetivo y la fecha actual
	var difference = (targetDate - now)/1000
	
	//se calcula cada dato independientemente
	days = Math.floor(difference/86400)
	difference = difference-(86400*days)
	
	hours = Math.floor(difference/3600)
	difference = difference-(3600*hours)
	
	minutes = Math.floor(difference/60)
    difference = difference-(60*minutes)
	
	seconds = Math.floor(difference)
	
	//Se pone el nombre segun sea plural o singular
	sec = (seconds == 1) ? " segundo" : " segundos";
	min = (minutes == 1) ? " minuto, " : " minutos, ";
	hr = (hours == 1) ? " hora, " : " horas, ";
	day = (days == 1)  ? " d&iacute;a, " : " d&iacute;as, "
	//Muestra el contador en el documento HTML
	document.getElementById("counter").innerHTML = "Faltan: " + days  + day + hours + hr + minutes + min + seconds + sec + " <br />para el 2015!!!";
	//manda llamar la funcion getTime cada segundo
	newtime = window.setTimeout("getTime();", 1000);	
}