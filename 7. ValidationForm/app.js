const user = document.querySelector('#user');
const mail = document.querySelector('#mail');
const mdp = document.querySelector('#mdp');
const confirmMdp = document.querySelector('#confirm_mdp');
const img = document.querySelectorAll("img");
const imgTab = Array.from(img);

user.addEventListener('input', function(value){
    const valueUser = document.querySelector('.form_user');
    
    if(user.value.length < 3 && user.value.length >= 0)
    {
        img[0].setAttribute('src','ressources/error.svg');
        img[0].style.top = '43%';
        valueUser.innerText = "Veuillez entrer un nom entre 3 et 24 caractères";  
    }
    else
    {
        img[0].setAttribute('src','ressources/check.svg');
        img[0].style.top = '55%';
        valueUser.innerText = "";
    }
    
})

 mail.addEventListener('input', function(e){
    const valueMail = document.querySelector('.form_mail');
    const regexMail = /\S+@\S+\.\S+/;
    if(e.target.value.search(regexMail) === 0)
    {
        img[1].setAttribute('src','ressources/check.svg');
        img[1].style.top = '55%';
        valueMail.innerText = "";
    }
    else if(e.target.value.search(regexMail) === -1)
    {
        img[1].setAttribute('src','ressources/error.svg');
        img[1].style.top = '43%';
        valueMail.innerText = "Veuillez entrer une mail valide";  
    }
 })


// Validation du MDP

let valeurInp;

const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

mdp.addEventListener('input', function(e){
    const valueMDP = document.querySelector('.form_mdp');
    valeurInp = e.target.value;
    if(valeurInp.search(specialCar) !== -1)
    {
        objValidation.symbole = 1;
    }
    if(valeurInp.search(alphabet) !== -1)
    {
        objValidation.lettre = 1;
    }
    if(valeurInp.search(chiffres) !== -1)
    {
        objValidation.chiffre = 1;
    }
    console.log(objValidation);

    if(e.inputType = 'deleteContentBackward')
    {
        if(valeurInp.search(specialCar) === -1)
        {
            objValidation.symbole = 0;
         }
        if(valeurInp.search(alphabet) === -1)
        {
            objValidation.lettre = 0;
        }
        if(valeurInp.search(chiffres) === -1)
        {
            objValidation.chiffre = 0;
         }
    }
    console.log(objValidation);

    let testAll = 0;
    for(const property in objValidation)
    {
        if(objValidation[property] > 0)
        {
            testAll++;
        }
    }
    if(testAll < 3)
    {
        img[2].setAttribute('src','ressources/error.svg');
        img[2].style.top = '43%';
        valueMDP.innerText = "Veuillez entrer un mot de passe valide";  
    }
    else
    {
        img[2].setAttribute('src','ressources/check.svg');
        img[2].style.top = '55%';
        valueMDP.innerText = "";
    }
})

confirmMdp.addEventListener('input', (e) => {
    const valueConfirmMDP = document.querySelector('.form_confirm_mdp');

    if(e.target.value.length === 0){
        img[3].setAttribute('src','ressources/error.svg');
        img[3].style.top = '43%';
        valueConfirmMDP.innerText = "Mot de passe différent";  
    }
    else if(e.target.value === valeurInp){
        img[3].setAttribute('src','ressources/check.svg');
        img[3].style.top = '55%';
        valueConfirmMDP.innerText = "";
    } else {
        img[3].setAttribute('src','ressources/error.svg');
        img[3].style.top = '43%';
        valueConfirmMDP.innerText = "Mot de passe différent";  
    }

})
