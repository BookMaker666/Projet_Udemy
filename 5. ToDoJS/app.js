
const liste = document.querySelector('.liste_action');
const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', function(event){

    event.preventDefault();
    
    const texteInput = document.querySelector('input').value;
    const bloc_liste = document.createElement('li');
    const checkBox = document.createElement('input');
    const buttonSup = document.createElement('button');
    const text = document.createElement('span');
    const img = document.createElement('img');

    checkBox.setAttribute('type','checkbox');
    bloc_liste.appendChild(checkBox);
    checkBox.addEventListener('click', () => {
        text.classList.toggle('texte-barre')
    })
    
    text.innerText = texteInput;
    bloc_liste.appendChild(text);
    
    img.setAttribute('src','ressources/fermer.svg');
    buttonSup.appendChild(img);
    bloc_liste.appendChild(buttonSup);
    buttonSup.addEventListener('click', () => {
        bloc_liste.remove();
        })

    liste.appendChild(bloc_liste);
    console.log(liste);

   
})
