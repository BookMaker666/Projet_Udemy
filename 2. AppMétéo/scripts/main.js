const clefApi ='830ecbdb7582643995b6513685689a6b';
let resultatAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');

/*Vérifie si notre navigateur à l'option géolocalisation, si oui, on prends la longitude et
la latitude que l'on passe dans une méthode afin de pouvoir obtenir les conditions climatiques
Si non, on demande à l'utilisateur d'activer la géolocalisation*/
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

        console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long, lat);
    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peur pas fonctionner, veuillez l'activer`)
    })
}
/*fonction servant à récupérer les condtions climatiques*/
function AppelAPI(long, lat)
{
    /*méthode permettant de faire une requête http afin d'obtenir les données de l'API,
    retournant une "promesse"*/
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${clefApi}`)
    .then((reponse) =>{
        /*la "promesse" nous retourne une "réponse", mais cette "réponse" ne peut pas être lue,
        on la formate donc en 'json' afin de pouvoir traiter les données dans une autre "promesse"*/
        return reponse.json();
    })
    .then((data) => {
        /*promesse qui a récupéré les données json sur lesquels nous pouvons travailler*/
        resultatAPI = data;
        console.log(resultatAPI);

        temps.innerText = resultatAPI.current.weather[0].description;
        temperature.innerText = `${Math.trunc(resultatAPI.current.temp)}°`;
        localisation.innerText = resultatAPI.timezone;

        /* récupération de l'heure actuelle*/
        let heureActuelle = new Date().getHours();
        
        /*boucle permettant d'afficher des heures par tranches de 3h*/
        for(let i = 0; i < heure.length; i++)
        {
            let heureIncr = heureActuelle + i * 3;
            if(heureIncr > 24){
                heure[i].innerText = `${heureIncr -24} h`;
            } else if(heureIncr === 24) {
                heure[i].innerText = '00 h';
            } else {
                heure[i].innerText = `${heureIncr} h`;
            }
        }

        // boucle affichant la temp toutes les 3h
        for(let j = 0; j < tempPourH.length; j++)
        {
            tempPourH[j].innerText =`${Math.trunc(resultatAPI.hourly[j *3].temp)}°`;
        }

    })
}