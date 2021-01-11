const button = document.querySelector("button");
const resultat = document.querySelector("#h4Res");
const bloc = document.querySelectorAll('.blocQuizz');

const tabBloc = Array.from(bloc);



button.addEventListener('click',function ()
{
    /*alert('vous avez appuyé sur le bouton');*/
    const reponse = document.querySelectorAll("input");
    const tabInput = Array.from(reponse);
    let compteurReponse = 0;

    for(let i = 0; i < tabInput.length; i++)
    {
        if(tabInput[i].checked)
        {
           if(tabInput[i].name == 'empereur')
           {
               if(tabInput[i].id == 'clovis')
               {
                   tabBloc[0].style.backgroundColor = 'green';
                   compteurReponse++;
               }
               else
               {
                   tabBloc[0].style.backgroundColor = 'red';
                   tabBloc[0].classList.add('apply-shake');
               }
           }
           else if(tabInput[i].name == 'independance')
           {
               if(tabInput[i].id == 'juillet')
               {
                   tabBloc[1].style.backgroundColor = 'green';
                   compteurReponse++;
               }
               else
               {
                   tabBloc[1].style.backgroundColor = 'red';
                   tabBloc[1].classList.add('apply-shake');
               }
           }
           else if(tabInput[i].name == 'romain')
           {
               if(tabInput[i].id == '15ApJC')
               {
                   tabBloc[2].style.backgroundColor = 'green';
                   compteurReponse++;
               }
               else
               {
                   tabBloc[2].style.backgroundColor = 'red';
                   tabBloc[2].classList.add('apply-shake');
               }
           }
           else if(tabInput[i].name == 'slovenie')
           {
               if(tabInput[i].id == 'Ljubijana')
               {
                   tabBloc[3].style.backgroundColor = 'green';
                   compteurReponse++;
               }
               else
               {
                   tabBloc[3].style.backgroundColor = 'red';
                   tabBloc[3].classList.add('apply-shake');
               }
           }
           else if(tabInput[i].name == 'irlande')
           {
               if(tabInput[i].id == '1365M')
               {
                   tabBloc[4].style.backgroundColor = 'green';
                   compteurReponse++;
               }
               else
               {
                   tabBloc[4].style.backgroundColor = 'red';
                   tabBloc[4].classList.add('apply-shake');
               }
           }
        }
        else
        {
            if(compteurReponse == 5)
            {
                resultat.innerHTML = `Bravo, vous avez ${compteurReponse} bonnes réponses, vous avez réussi`;
            }
            else if(compteurReponse < 5 && compteurReponse >= 3)
            {
                resultat.innerHTML = `Vous avez ${compteurReponse} bonnes réponses, c'est moyen`;
            }
            else
            {
                resultat.innerHTML = `Vous avez ${compteurReponse} bonnes réponses, vous n'êtes pas très fort`;
            }
         
        }
    }
})