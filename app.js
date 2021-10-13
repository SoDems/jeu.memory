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

var tabResultat = [  /*faire un tableau ac des chiifres de manière aléatoire*/
    [1,4,3,4],
    [1,2,3,2],
    [7,8,6,5],
    [8,7,5,6],
];

afficherTableau();
console.log(tabJeu.length);
function afficherTableau(){  /* a pour objectif d'afficher le tableau*/
var txt = "";
 /*pour pacourir notre tableau il faut les lire ligne par ligne on utilise la boucle for*/

    for(var i = 0; i< tabJeu.length; i++){ /* tabJeu.length contient 4 elements*//*tableau multidimensionnel*/
        txt += "<div>";/* on integrer dans notre premier tour de boucle uene div pour generer nos 4 lignes en html*/
     
        for(var j =0; j < tabJeu[i].length ; j++){ /*a l'interieur de la boucle on refait une boucle car dans les 4 éléments il y a 4 éléments*//*tabJeu[i].length = parcours la ligne jusqu'a la fin de la ligne*/
            if(tabJeu[i][j] === 0){ /* si la valeur de tabJeu est égal à 0 alors le btn sera affiche*/ 
            txt +="<button class='btn btn-primary' onclick='verif(\""+i+"-"+j+"\")'>Afficher</button>"; /*on a mis une fonction click au bouton et on lui rajoute un paramètre (1-2) par exemple, le 1 etant la ligne et la deuxième la colonne. pour rappel le i (i = 0; i< tabJeu.length; i++) est la ligne et le j j =0; j < tabJeu[i].length ; j++ la colonne */ /*concatener ("+i+" - +"j"+)= mettre bout à bout au moins deux cahine de caractères*/
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
    var imgTxt = "image/"; /*variable qui contient le chemin*/
    switch(valeur){
        case 1 : imgTxt += "elephant.png";
        break;
        case 2 : imgTxt += "giraffe.png";
        break;
        case 3 : imgTxt += "hippo.png";
        break;
        case 4 : imgTxt += "monkey.png";
        break;
        case 5 : imgTxt += "panda.png";
        break;
        case 6 : imgTxt += "parrot.png";
        break;
        case 7 : imgTxt += "penguin.png";
        break;
        case 8 : imgTxt += "pig.png";
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


function verif(bouton){ /*qui va recuperer l'element cliqué*/
    var ligne = bouton.substr(0,1); /*on va découper le bouton pour rcuperre la ligne et la colonne*/
    var colonne = bouton.substr(2,1);
    tabJeu[ligne][colonne] = tabResultat[ligne][colonne]; /*qd on clique sur le tableau tabJeu je dois récuperer les valeurs de tabResultat*/
    afficherTableau();   /*réafficher notre grille*/
}

/*REPRISE DE LA VIDEO 3 à 8 min 18 s*/