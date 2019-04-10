// Løsningsforslag - Oppgave 1 - Eksmane IT2 H18
// CC BY SA - Tom Jarle Christiansen - 2019

// Globale variabler
bildenr = 0;
let bildeliste = ["intro1.jpg","intro2.jpg","intro3.jpg","intro4.jpg"];
let infotekst = [
    "<br><b>Åpningstider:</b><br>Tirsdag – søndag 11.00-16.00",
    "<br><b>Billetter:</b><br>Voksen: 120 kr<br>Student/honnør: 100 kr<br>Barn (0-15 år): Gratis",
    "<br><b>Informasjon:</b><br>Besøksadresse: Lade allé 60, 7041 Trondheim 73 87 02 80 post@ringve.no<br>Postadresse: Postboks 6289 Torgarden, 7489 Trondheim"
];

// Leser inn elementer fra index.html
let bilde = document.querySelector('#karusellbilde');
let venstre = document.querySelector('#bilde_v');
let hoyre = document.querySelector('#bilde_h');
let utInfo = document.querySelector('#infoElement');

// Lyttere
venstre.addEventListener('click', byttBilde);
hoyre.addEventListener('click', byttBilde);

// Funksjoner
function byttBilde() {
    let retning = this.dataset.retning; // Leser inn data fra elementet som trigger lytteren
    if(retning == "venstre"){
        if(bildenr > 0) {
            bildenr--;
        }
        else {
            bildenr = bildeliste.length - 1;
        }
    }
    else {
        if(bildenr < bildeliste.length - 1){
            bildenr++;
        }
        else {
            bildenr = 0;
        }
    }
    bilde.src = `./bilder/${bildeliste[bildenr]}`;
}

function skrivInfo(tekstNr) {
    console.log(infotekst[tekstNr]);
    utInfo.innerHTML = infotekst[tekstNr];
}