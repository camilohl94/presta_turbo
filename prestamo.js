function prestamo() {
    return ` <div class="div1" >
    <h1>Prestamos turbo</h1>
</div>
<div class="fondo"> 
<table id ="tablaPrestamo" border="3" cellpadding="4" cellspacing="10">
 
<tr>
    <th>Nombre</th>
    <th>Valor prestamo</th>
    <th>% del prestamo</th>
</tr>
<tr>
    <td>Maricela Orozco</td>
    <td>4.000.000</td>
    <td>5%</td>
</tr>
<tr>
    <td>Profe vilma</td>
    <td>2.000.000</td>
    <td>9%</td>
</tr>
<tr>
    <td>Profe franklin</td>
    <td>500.000</td>
    <td>10%</td>
</tr>
<tr>
    <td>Isabel Vecina</td>
    <td>188.000</td>
    <td>10%</td>
</tr>
<tr>
    <td>Cristobalina Ceren din</td>
    <td>2500.000</td>
    <td>10%</td>
</tr>

</table>
</div><br>
<button onclick= "calcularTotalplata()">Total plata prestada</button><br><br>
<button onclick= "calcularInteres()">Total intereses</button><br><br>`

}function calcularTotalplata(){    let suma =[4000000,2000000,500000,188000,2500000]
    let total = 0;

    for(let i =0; i < suma.length; i++){
      total += suma[i];
      
    }
    alert("La suma total de la plata prestada es: " + total);
}function calcularInteres(){    let suma =[4000000*5/100,2000000*4.5/100,500000*5/100,188000*5/100,2500000*5/100]
    let total = 0;

    for(let i =0; i < suma.length; i++){
      total += suma[i];
      
    }
    alert("Total Interes : " + total);
}




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("root").innerHTML = prestamo();
});
