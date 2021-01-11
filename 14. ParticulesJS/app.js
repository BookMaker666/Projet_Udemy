const canvas = document.getElementById('canvas1');
//Utilisation de l'environnement 2D de la page web
const ctx = canvas.getContext('2d');
/*Hauteur = hauteur de la page, largeur = largeur de la page*/
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particuleTab;

//Création de l'objet particule
class Particule{
    /*Récupère les paramètres donnés dans l'objet et rempli l'objet*/
    constructor(x, y, directionX, directionY, taille, couleur){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.taille = taille;
        this.couleur = couleur;
    }
    dessine(){
        //Démarrage du "Dessin" sur le canvas
        ctx.beginPath();
        // création d'un cercle
        ctx.arc(this.x, this.y, this.taille, 0, Math.PI * 2, false);
        // remplissage de la couleur
        ctx.fillStyle = this.couleur;
        ctx.fill();
    }
    MAJ(){
        /*si l'élément touche un bord de l'écran, on le fait repartir dans le sens inverse*/ 
        if(this.x + this.taille > canvas.width || this.x - this.taille < 0) {
            this.directionX = -this.directionX;
        }
        if(this.y + this.taille > canvas.height || this.y - this.taille < 0){
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.dessine();
    }

}
// const obj1 = new Particule(300,300,1,1,100,"black");
// console.log(obj1)
// obj1.dessine();

/*Création d'un tableau contenant les objets "Particules" générer aléatoirement*/
function init(){
    particuleTab = [];
    for(let i = 0; i < 100; i++){
        let taille = (Math.random() + 0.01) * 20;
        let x = Math.random() * (window.innerWidth - taille * 2)
        let y = Math.random() * (window.innerHeight - taille * 2)
        let directionX = (Math.random() * 0.4) - 0.2;
        // -0.2 / 0.2
        let directionY = (Math.random() * 0.4) - 0.2;
        let couleur = "white";

        particuleTab.push(new Particule(x,y,directionX,directionY,taille, couleur));
    }
}

function animation(){
    // Execute la fontion passée en paramètre 60fois par secondes 
    requestAnimationFrame(animation);
    // Reset l'écran
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    //Mise à jour des particules 
    for(let i = 0; i < particuleTab.length; i++){
        particuleTab[i].MAJ();
    }
}   

init();
animation();
console.log(particuleTab)


function resize(){
    init();
    animation();
}

let doit;
window.addEventListener('resize', () => {
    clearTimeout(doit);
    doit = setTimeout(resize, 100);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
})