const cycles = document.querySelector("#cycle");
const buttonCommencer = document.querySelector("#commencer");
const buttonPause = document.querySelector("#pause");
const buttonReset = document.querySelector("#reset");
const travail = document.querySelector("#affichage_travail");
const repos = document.querySelector("#affichage_repos");

let checkInterval = false;
let tempsInitial = 1800; //temps en secondes, 1800s / 60 = 30 min
let tempsDeRepos = 300;  // 300 / 60 = 5min
let pause = false;
let nbDeCycles = 0;

cycles.innerText = `Nombres de Cycles: ${nbDeCycles}`;

travail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

repos.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

buttonCommencer.addEventListener('click', () => {

    if(checkInterval === false)
    {
        checkInterval = true;
    
        tempsInitial--;

        travail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

        let timer = setInterval(() => {

            if(pause === false && tempsInitial > 0){
                tempsInitial--;
                travail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

            }
            else if(pause === false &&  tempsDeRepos === 0 && tempsInitial === 0)
            {
                tempsInitial = 1800;
                tempsDeRepos = 300;
                travail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                repos.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
                nbDeCycles++;
                cycles.innerText = `Nombres de Cycles: ${nbDeCycles}`;
            }
            else if(pause === false && tempsInitial === 0 )
            {
                tempsDeRepos--;
                repos.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }
            
        }, 1000)
        
        buttonReset.addEventListener('click', () => {
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsDeRepos = 300;
            travail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            repos.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        })
    }
    else
    {
        return;
    }

    
})

buttonPause.addEventListener('click', () => {
    pause = !pause;
})

