let anio = Number(prompt('Digite el año'))

if ((anio % 4 === 0 && anio % 100 != 0) || anio % 400 === 0){

     alert('Año Bisiesto')

}

else {

     alert('Año no Bisiesto')

}