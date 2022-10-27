"use stricy"
// definisco lista della spesa
const shopList =["Pane", "Latte", "Acqua", "Pasta", "Carne"]

const containerList = document.getElementById("list");
//Creo un elemento "li" per ogni elemento dell'array
let i = 0;

while(i < shopList.length){
    const listitem = document.createElement("li");
    listitem.innerHTML = shopList[i];
    //inserisco l'elemento "li" nella lista in HTML
    containerList.append(listitem);
    i++;
}