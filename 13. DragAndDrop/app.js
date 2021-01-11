
let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxs = document.querySelectorAll('.case');
const destroy = document.querySelector('.destroy');
const allCases = [];
const choix = [];
let photoEnCours;

for(i = 0; i < boxs.length; i++){
    allCases.push(boxs[i]);
}
allCases.push(destroy);

let indexPhoto = 1;

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
photoEnCours =  `url(https://loremflickr.com/320/240?random=${indexPhoto})`;

/*fonction permettant de recharger l'image du haut 
si on l'a retiré et déposer dans une des 3 cases du bas */
function nvBase(){

    const newBase = document.createElement('div');
    newBase.setAttribute('class', 'base');
    newBase.setAttribute('draggable', 'true');
    indexPhoto++;
    newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
    photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    premiereCase.appendChild(newBase);
    base = newBase;

}

/*forof = for pour un tableau, forin = for pour un objet*/
for(const vide of allCases) {

    // evenement si on survole l'image
    vide.addEventListener('dragover', dragOver);
    // evenement si en entre dans la zone de Drop
    vide.addEventListener('dragenter', dragEnter);
    // evenement qui lâche l'image
    vide.addEventListener('drop', dragDrop);

}



// On enlève l'action par défaut 
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}


function dragDrop(){

    if(this.id === "premiere-case"){
        return;
    }
    console.log(this.id === "destroy");
    // destroy
    if(this.id === "destroy") {
        base.remove();
        nvBase();
        return;
    }

    // Verouillage

    this.removeEventListener('drop', dragDrop);
    this.removeEventListener('dragenter', dragEnter);
    this.removeEventListener('dragover', dragOver);

    this.appendChild(base);
    this.childNodes[0].setAttribute('draggable', false);
    nvBase();

    choix.push(photoEnCours);
    if(choix.length === 3){
        setTimeout(() => {
            alert('Sélection terminée !')
        }, 200)
    }

}