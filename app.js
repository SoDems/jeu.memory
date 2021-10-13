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
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
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
            txt +="<button class='btn btn-primary' >Afficher</button>";
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
    switch(valeur){
        case 1 :
        break;
        case 2 :
        break;
        case 3 :
        break;
        case 4 :
        break;
        case 5 :
        break;
        case 6 :
        break;
        case 7 :
        break;
        case 8 :
        break;
        default : console.log("non pris en compte")
    }
}