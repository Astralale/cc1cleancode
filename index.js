console.log('Happy developing ✨')

function calculerScore(lancersDes){

    const compteur = lancersDes.reduce((accumulateur, valeur) => {
        accumulateur[valeur] = (accumulateur[valeur] || 0) + 1;
        return accumulateur;
    }, {});

    const occurrencesDesValeurs=Object.values(compteur)
    const valeursTriees=Object.keys(compteur)
        .map(Number)
        .sort((a, b) => a - b);

    if (occurrencesDesValeurs.includes(5)){
        return 50;
    }
    if (occurrencesDesValeurs.length===5){
        let grandeSuite=true;
        for (let i = 0; i < occurrencesDesValeurs.length-1; i++) {
            if (valeursTriees[i] === valeursTriees[i + 1] - 1){
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
    if (occurrencesDesValeurs.includes(4)){
        return 35;
    }
    if (occurrencesDesValeurs.includes(3)&&occurrencesDesValeurs.includes(2)){
        return 30;
    }
    if (occurrencesDesValeurs.includes(3)){
        return 28;
    }
    let totalDesValeurs=0;

    for (let i = 0; i < occurrencesDesValeurs.length; i++) {
        totalDesValeurs+=valeursTriees[i]*occurrencesDesValeurs[i]
    }
    return totalDesValeurs;




}
module.exports = calculerScore;