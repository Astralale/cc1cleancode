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
        const lancersDes = [1, 2, 3, 3, 3];
        expect(calculerScore(lancersDes)).toEqual(28);
    });

    test('Verifie que je recupere un carré', () => {
        const lancersDes = [1, 3, 3, 3, 3];
        expect(calculerScore(lancersDes)).toEqual(35);
    });

    test('Verifie que je recupere un full', () => {
        const lancersDes = [1,1, 3, 3, 3];
        expect(calculerScore(lancersDes)).toEqual(30);
    });

    test('Verifie que je recupere une grande suite avec une liste dans l\'ordre', () => {
        const lancersDes = [1,2, 3, 4, 5];
        expect(calculerScore(lancersDes)).toEqual(40);
    });

    test('Verifie que je recupere une grande suite avec une liste dans le desordre', () => {
        const lancersDes = [1,4, 5, 2, 3];
        expect(calculerScore(lancersDes)).toEqual(40);
    });

    test('Verifie que je recupere un YAMS', () => {
        const lancersDes = [3,3, 3, 3, 3];
        expect(calculerScore(lancersDes)).toEqual(50);
    });

    test('Verifie que je recupere une chance', () => {
        const lancersDes = [1,3, 3, 6, 6];
        expect(calculerScore(lancersDes)).toEqual(19);
    });
});