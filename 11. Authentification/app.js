const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');

const formConnection = document.querySelector('.form-connection');


btnInscription.addEventListener('click', () => {

    if(formConnection.classList.contains('apparition')){
        formConnection.classList.remove('apparition');
    }

    formInscription.classList.toggle('apparition');

})

btnConnection.addEventListener('click', () => {

    if(formInscription.classList.contains('apparition')){
        formInscription.classList.remove('apparition');
    }

    formConnection.classList.toggle('apparition');

})


formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpInscription.value;

    // Fonction Permettant de créer un utilisateur avec son mail et un mdp, cela retourne une promesse
    auth.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur).then(cred => {
        // Affiche les données de l'utilisateur ayant crée son compte
        console.log(cred);
        formInscription.reset();
        formInscription.classList.toggle('apparition');
    })
})


// Deco

deco.addEventListener('click', (e) => {
    e.preventDefault();
    // Méthode permettant de se déconnecter
    auth.signOut().then(() => {
        console.log("Déconnecté");
    })
})


// Connexion

formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    auth.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur).then(cred => {
        console.log("CONNEXION !", cred.user);
        formConnection.reset();
        formConnection.classList.toggle('apparition');
    })
})


// Gérer le contenu
const h1 = document.querySelector('h1');
const info = document.querySelector('.info');

// Méthode permettant de savoir si l'on est connecté au pas
auth.onAuthStateChanged(utilisateur => {
    if(utilisateur){
        info.innerText = "Voici le contenu privé !"
        h1.innerText = "Vous voilà de retour ! :)"
    } else {
        console.log("Utilisateur s'est déconnecté");
        info.innerText = "Contenu public.";
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous";
    }
})