const texteCookie = document.querySelector('.texte-cookies');
const listeCookie = document.querySelector('.liste-cookies');

/*création d'un objet Date qui programmera la date de l'input date automatiquement une semaine après la date du jour actuel*/
const today = new Date();

/* 7 = 7 jours, 24 = nb heures, 60 = 60 minutes, 60 = 60 secondes, 1000 = 1000 millisecondes*/
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
// console.log(nextWeek);
let day = ('0' + nextWeek).slice(9,11);
let month = ('0' + (nextWeek.getMonth() + 1)).slice(-2);
let year = today.getFullYear();
document.querySelector('input[type=date]').value = `${year}-${month}-${day}`;

function creerCookie(){
    const nom = document.querySelector('.nom').value;
    const valeur = document.querySelector('.valeur').value;
    let cookieName;

    allCookies = document.cookie;

    cookieName = allCookies.split('; ').find(row => row.startsWith(nom));

    if(listeCookie.firstChild)
    {
        while(listeCookie.firstChild)
        {
            listeCookie.removeChild(listeCookie.firstChild);
        }
    }

    if(cookieName)
    {
        texteCookie.innerHTML = `Vous avez déjà crée le cookie ${nom}`;
    }
    else
    {
        texteCookie.innerHTML = `Vous avez crée le cookie ${nom}`;
        document.cookie = `${nom}=${valeur}`;
    }
}

function afficherCookie()
{
    let tabCookie;
    let nom;
    let i;

    if(listeCookie.firstChild)
    {
        while(listeCookie.firstChild)
        {
            listeCookie.removeChild(listeCookie.firstChild);
        }
    }

    if(document.cookie)
    {

    
    allCookies = document.cookie;
    tabCookie = allCookies.split('; ');
    texteCookie.innerText = 'Vous avez actuellement ' + tabCookie.length + ' cookies';

    for(i = 0; i < tabCookie.length; i++)
    {
        const liste = document.createElement('li');
        nom = tabCookie[i].split('=');
        liste.innerText = `Nom = ${nom[0]}, Valeur = ${nom[1]}`;
        listeCookie.appendChild(liste);

        liste.addEventListener('click', () => {

            document.cookie = `${nom[0]}=; expires=${new Date(0)}`
            liste.innerText = `Cookie ${nom[0]} supprimé`;
            setTimeout(() => {
                liste.remove();
            }, 1000);

        })
    }
    }
    else
    {
        texteCookie.innerText = 'Vous avez actuellement 0 cookies';
    }
}
