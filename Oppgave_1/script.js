
bildenr = 0;
let bildeliste = ["intro1.jpg","intro2.jpg","intro3.jpg","intro4.jpg"];

// Leser inn elementer
let bilde = document.querySelector("#karusellbilde");
let venstre = document.querySelector('#bilde_v');
let hoyre = document.querySelector('#bilde_h');

// Lyttere
venstre.addEventListener('click', byttBilde);
hoyre.addEventListener('click', byttBilde);


// Funksjoner
function byttBilde() {
    let retning = this.dataset.retning;
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