console.log('Happy developing ✨')

function calculerScore(lance){

    const compteur = lance.reduce((accumulateur, valeur) => {
        accumulateur[valeur] = (accumulateur[valeur] || 0) + 1;
        return accumulateur;
    }, {});

    const valeurOccurence=Object.values(compteur);
    const valeur=Object.keys(compteur);

    if (valeurOccurence.includes(4)){
        return 35;
    }
    if (valeurOccurence.includes(3)&&valeurOccurence.includes(2)){
        return 30;
    }
    if (valeurOccurence.includes(3)){
        return 28;
    }





}
module.exports = calculerScore;