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
    <td>3.000.000</td>
    <td>5%</td>
</tr>
<tr>
    <td>Profe Edith</td>
    <td>1.000.000</td>
    <td>10%</td>
</tr>
<tr>
    <td>Cristobalina e Hija</td>
    <td>4.000.000</td>
    <td>10%</td>
</tr>
<tr>
    <td>Profe Vilma</td>
    <td>500.000</td>    <td>9%</td></tr><tr>
    <td>Isabel Vecina</td>
    <td>188.000</td>
    <td>10%</td>
</tr>

</table>
</div><br>
<button onclick= "calcularTotalplata()">Total plata prestada</button><br><br>
<button onclick= "calcularInteres()">Total intereses</button><br><br>`

}function calcularTotalplata(){    let suma =[3000000,1000000,4000000,500000,188000]
    let total = 0;

    for(let i =0; i < suma.length; i++){
      total += suma[i];
      
    }
    alert("La suma total de la plata prestada es: " + total);
}function calcularInteres(){    let suma =[3000000*5/100,1000000*5/100,4000000*5/100,500000*4.5/100,188000*5/100]
    let total = 0;

    for(let i =0; i < suma.length; i++){
      total += suma[i];
      
    }
    alert("Total Interes : " + total);
}




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("root").innerHTML = prestamo();
});
