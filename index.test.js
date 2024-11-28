const calculerScore = require(".");
describe('lancementDes', () => {

    test('Verifie que je recupere bien le nombre d\'occurence de chaque chiffre et la liste de clé', () => {
        const lance = [1, 2, 3, 3, 5];
        const resultat = calculerScore(lance);

        expect(resultat.valeur).toEqual(['1', '2', '3', '5']);
        expect(resultat.valeurOccurence).toEqual([1, 1, 2, 1]);
    });

});