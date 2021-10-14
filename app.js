/* Jeu de mémoire 
Programmer le jeu où il faut trouver toutes les paires d'une grille
- Etape 1 : Programmation de la partie HTML et affichage de la grille 
-Etape 2 : Création du jeu avec une grille prédéfinie
-Etape 3 : Génération d'une grille aléatoire

Etape 1 = programmer la grille
                - en utilisant Bootstrap pour créer les boutons
                - en générant la grille en Javascript et l'intégrant dans une balise "div" contenant l'identifiant résultat
                 */

const divResultat = document.querySelector("#resultat"); /*recuperation lde la balise*/
/*divResultat.innerHTML = "coucou"; /*on peut mettre du contenu directement en mettant dans inner.html*/

var tabJeu = [   /*la variable tabJeu va nous permettre ensuite de savoir si on a trouvé des pairs ou pas*/
    [0,0,0,0],      /*tableau de jeu de notre page web*/
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

// var tabResultat = [  /*faire un tableau ac des chiffres de manière aléatoire*/
//     [1,4,3,4],
//     [1,2,3,2],
//     [7,8,6,5],
//     [8,7,5,6],
// ];
var tabResultat = genereTableuAleatoire();

var oldSelection =[];//ancien click
var nbAffiche = 0; /*pour savoir où on en est ds notre affichage et savoir si on est sur le premier click ou deuxième*/
var ready = true;

afficherTableau();
console.log(tabJeu.length);
function afficherTableau(){  /* a pour objectif d'afficher le tableau*/
var txt = "";
 /*pour pacourir notre tableau il faut les lire ligne par ligne on utilise la boucle for*/

    for(var i = 0; i< tabJeu.length; i++){ /* tabJeu.length contient 4 elements*//*tableau multidimensionnel*/
        txt += "<div>";/* on integrer dans notre premier tour de boucle uene div pour generer nos 4 lignes en html*/
     
        for(var j =0; j < tabJeu[i].length ; j++){ /*a l'interieur de la boucle on refait une boucle car dans les 4 éléments il y a 4 éléments*//*tabJeu[i].length = parcours la ligne jusqu'a la fin de la ligne*/
            if(tabJeu[i][j] === 0){ /* si la valeur de tabJeu est égal à 0 alors le btn sera affiche*/ 
            txt +="<button class='btn btn-primary' onClick='verif(\""+i+"-"+j+"\")'>L'art</button>"; /*on a mis une fonction click au bouton et on lui rajoute un paramètre (1-2) par exemple, le 1 etant la ligne et la deuxième la colonne. pour rappel le i (i = 0; i< tabJeu.length; i++) est la ligne et le j j =0; j < tabJeu[i].length ; j++ la colonne */ /*concatener ("+i+" - +"j"+)= mettre bout à bout au moins deux cahine de caractères*/
            /*le backslash permet de désactiver les guillements pour en faire un chaine de caractères*/
            }
            else{
                txt += "<img src='"+getImage(tabJeu[i][j])+"'>"; /*sinon ce sera une img*/ 
            }
        }
        txt += "</div>";
    }   
divResultat.innerHTML = txt;
}

function getImage(valeur){ /*on va faire un switch case. on fait une fonction getImage qui va recupere une valeur et à partir de cette valeur on va retourner l images correspndantes*/
    var imgTxt = "art/"; /*variable qui contient le chemin*/
    switch(valeur){
        case 1 : imgTxt += "bleu.png";
        break;
        case 2 : imgTxt += "femme au lapin.png";
        break;
        case 3 : imgTxt += "fresque.png";
        break;
        case 4 : imgTxt += "frida.png";
        break;
        case 5 : imgTxt += "papillon.png";
        break;
        case 6 : imgTxt += "peinture abstraite.png";
        break;
        case 7 : imgTxt += "rouge et noir.png";
        break;
        case 8 : imgTxt += "statue.png";
        break;
        default : console.log("non pris en compte")
        }
    return imgTxt; /*car notre fonction doit retourner un element*//*il faut definir ce que l'on doit retourne = chemin de l'image correspondant à la valeur*/
}
/*La fonction getImage permet de retourner l'image et la fonction afficherTableau qui réalise l'affichage sur la page web*/

/*Etape 2 =
    - rpogrammer la fonction permettant d'afficher une image en cliquant sur l'un des boutons "afficher"
    - faire en sorte de vérifier si les deux images cliquées correspondent :
        -si c'est le cas on laisse les images affichées,
        -sinon on les retourne à nouveau por laisser apparaitre les boutons
    - pour cette étape on va créer un tableau prédéfini*/

    /*ATTENTION = dans las tableaux, la première case a une valeur de 0*/

console.log(afficherTableau);
function verif(bouton){ /*qui va recuperer l'element cliqué*/
    if(ready){
        nbAffiche++;  //on va acrementer des lors qu 'on clique sur 1 btn
        var ligne = bouton.substr(0,1); /*on va découper le bouton pour rcuperre la ligne et la colonne*/
        var colonne = bouton.substr(2,1);
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne]; /*qd on clique sur le tableau tabJeu je dois récuperer les valeurs de tabResultat*/
        afficherTableau();   /*réafficher notre grille*/
    
        if(nbAffiche>1) { //on lance la verification 
            ready = false;
            setTimeout(() => {
                if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){ //on verifie si la valeur sur laquelle on a cliqué correspond à la valeur du precedent click
                    tabJeu[ligne][colonne] = 0; //si ca correspond pas alors on va reinitialiser les deux valeurs et on 
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0;  //réaffiche notre tableau
                }
                afficherTableau();
                ready = true; // tu peux cliquer sur un autre btn
                nbAffiche = 0;// qd on a finit la verification on réinitialise  nbAffiche à 0 ce qui permet de relancer une vague de click et de vérification
                oldSelection = [ligne,colonne];
            },500)//une seconde
            
        } else {
            oldSelection = [ligne,colonne];//ancien click
        }
    }      
}
//etape 3 creer une fonctin qui va "mélanger" la grille en créant un tableau resultat aléatoire au lancement de la page 
// l'objectif étant de creer une fonction qui va générer un tableau "mélangé".
function genereTableuAleatoire(){ // a l 'inteireur on va renvoyer un tableau
    var tab =[]; // on déclare un tableau vierge 
    var nbImageposition = [0,0,0,0,0,0,0,0]; //nbre d'mage qu on aura ds notre tableau puisqu il faut qu elle soit en double
    for(var i = 0 ; i < 4 ; i ++){
        var ligne = [];
        //pour generer les colonne
        for(var j = 0 ; j < 4 ; j++){
            var fin = false;
            while(!fin){// je vais continuer tant que fin est = à false
                var randomImage = Math.floor(Math.random() * 8); //pour generer un chiffre aleatoire entre 1et 8
                if(nbImageposition /* 0 à 7 */[randomImage] < 2){ // pour éviter d'avoir plus de 2 images
                    ligne.push(randomImage+1); // on vient de generer un tableau contenant 16 cases
                    nbImageposition /* 0 à 7 */[randomImage]++; //pour acrementer la valeur
                    fin = true; // ce qui permet de sortir de la boucle while et d'avoir trouver un des chiffres qui n'est pas present 2 fois dans nbImage position

                }
            }   
        }
        tab.push(ligne); //ce qui permet de rajouter une ligne au tableau qui contient que des 0
    }
    return tab
}

