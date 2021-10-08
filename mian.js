
//Chiedi il nome all'utente
const nome = prompt("Qual'è il tuo nome?");

console.log(nome)


//Chiedi il cognome all'utente
const cogniome = prompt("Qual'è il tuo cognome?")

console.log(cogniome)


//Chidi il colore preferito all'utente
const colore = prompt("Qual'è il tuo colore preferito?")

console.log(colore)


//Stampiamo la combinazione
document.getElementById("pw").innerHTML = `${nome}${cogniome}${colore}21`