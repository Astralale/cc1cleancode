const calculerScore = require(".");
describe('lancementDes', () => {
    /*
        test('Verifie que je recupere bien le nombre d\'occurence de chaque chiffre et la liste de clé', () => {
            const lance = [1, 2, 3, 3, 5];
            const resultat = calculerScore(lance);

            expect(resultat.valeur).toEqual(['1', '2', '3', '5']);
            expect(resultat.valeurOccurence).toEqual([1, 1, 2, 1]);
        });
    */
    test('Verifie que je recupere un brelan', () => {
        const lance = [1, 2, 3, 3, 3];
        expect(calculerScore(lance)).toEqual(28);
    });

    test('Verifie que je recupere un carré', () => {
        const lance = [1, 3, 3, 3, 3];
        expect(calculerScore(lance)).toEqual(35);
    });

    test('Verifie que je recupere un full', () => {
        const lance = [1,1, 3, 3, 3];
        expect(calculerScore(lance)).toEqual(30);
    });

    test('Verifie que je recupere une grande suite avec une liste dans l\'ordre', () => {
        const lance = [1,2, 3, 4, 5];
        expect(calculerScore(lance)).toEqual(40);
    });

    test('Verifie que je recupere une grande suite avec une liste dans le desordre', () => {
        const lance = [1,4, 5, 2, 3];
        expect(calculerScore(lance)).toEqual(40);
    });

    test('Verifie que je recupere un YAMS', () => {
        const lance = [3,3, 3, 3, 3];
        expect(calculerScore(lance)).toEqual(50);
    });

    test('Verifie que je recupere une chance', () => {
        const lance = [1,3, 3, 6, 6];
        expect(calculerScore(lance)).toEqual(19);
    });
});