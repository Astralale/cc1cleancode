console.log('Happy developing ✨')

function calculerScore(lance){

    const compteur = lance.reduce((accumulateur, valeur) => {
        accumulateur[valeur] = (accumulateur[valeur] || 0) + 1;
        return accumulateur;
    }, {});

    const valeurOccurence=Object.values(compteur);
    const valeur=Object.keys(compteur);
    return {valeur, valeurOccurence};

}
module.exports = calculerScore;