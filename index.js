console.log('Happy developing ✨')

function calculerScore(lance){

    const compteur = lance.reduce((accumulateur, valeur) => {
        accumulateur[valeur] = (accumulateur[valeur] || 0) + 1;
        return accumulateur;
    }, {});

    const valeurOccurence=Object.values(compteur)
    const valeur=Object.keys(compteur)
        .map(Number)
        .sort((a, b) => a - b);

    if (valeurOccurence.includes(5)){
        return 50;
    }
    if (valeurOccurence.length===5){
        let grandeSuite=true;
        for (let i = 0; i < valeurOccurence.length-1; i++) {
            if (valeur[i] === valeur[i + 1] - 1){
                grandeSuite=true;
            }
            else{
                grandeSuite=false;
            }
        }
        if (grandeSuite){
            return 40;
        }
    }
    if (valeurOccurence.includes(4)){
        return 35;
    }
    if (valeurOccurence.includes(3)&&valeurOccurence.includes(2)){
        return 30;
    }
    if (valeurOccurence.includes(3)){
        return 28;
    }
    let total=0;

    for (let i = 0; i < valeurOccurence.length; i++) {
        total+=valeur[i]*valeurOccurence[i]
    }
    return total;




}
module.exports = calculerScore;