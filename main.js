





let conteiner= document.getElementById("usuario")
conteiner.innerHTML="<p>Registro</p>"


function renderestaciones(estacionesArray){
    let card1 = document.getElementById("estaciones_conteiner")
    estacionesArray.find(estacion=> estacion.unidad) 
    let li=document.createElement("div")
    card1.innerHTML=`<button class="button" id="carga"></button>`

                    
}






let card2 = document.getElementById("dos")
card2.innerHTML="<card>UFC</card>"



let card3 = document.getElementById("tres")
card3.innerHTML="<card>UFE</card>"
