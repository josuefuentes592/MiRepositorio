/*(function()
{
    alert('Hola');

}());*/
 // ejercio 1
function Producto()
{
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 =parseFloat(document.getElementById('num2').value);
    var numero3 =parseFloat(document.getElementById('num3').value);
    
    var resultado = numero1*numero2*numero3;

    document.getElementById('res').value = resultado
    //return resultado;
}

// Ejercicio 2

function Temperatura()
{

    var numero1 = parseFloat(document.getElementById('Temper').value);
    if (numero1<15 ) {
         resultado = "Frio";
    } 
    else if (numero1>15 || numero1<25) {
        resultado = "Templado";
    } 
     if (numero1>=26) {
        resultado = "Calor";
    } 
    document.getElementById('result').value = resultado
}


// Ejercicio 3

function factorial (){
	var factorial = 1;
 
        for (var i=1; i <= document.getElementById ('nume1').value; i++){
            factorial *= i;
        }
 
        document.getElementById ('resp').value = factorial;
    }



    // Ejercicio 4

function Fecha ()
{

	var f = new Date();
     var diaSemana = f.getDay();
     var dia = f.getDate();
     var mes = f.getMonth();
     var year =f.getFullYear();

     var pDiaSemana = document.getElementById('mostrarfecha');
            var pDia = document.getElementById('mostrarfecha');
            var pMes = document.getElementById('mostrarfecha');
            var pYear = document.getElementById('mostrarfecha');
   
            var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
            pDiaSemana = semana[diaSemana];
            pDia = dia;  
            var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Juio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            pMes = meses[mes];
            pYear = year; 
            var res= pDiaSemana+" "+pDia+" de "+pMes+" "+" del "+ pYear;
   
     document.getElementById('mostrarfecha').value= res;

}