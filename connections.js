const city = {
    snowdon: {villaMaria: 1}, // regex to read
    villaMaria: {vendome: 1, snowdon: 1},
    vendome: {placeSaintHenri: 1, villaMaria: 1},
    placeSaintHenri: {lionelGroulx: 1, vendome: 1},
    lionelGroulx: {georgesVanier: 1, atwater: 1, placeSaintHenri: 1},
    georgesVanier: {lucienLallier: 1, lionelGroulx: 1},
    lucienLallier: {bonaventure: 1, georgesVanier: 1},
    bonaventure: {squareVictoria: 1, lucienLallier: 1},
    squareVictoria: {placeDarmes: 1, bonaventure: 1},
    placeDarmes: {champDeMars:1, squareVictoria: 1},
    champDeMars: {berriUqam: 1, placeDarmes: 1},
    berriUqam: {sherbrooke: 1, saintLaurent: 1, champDeMars: 1},
    sherbrooke: {montRoyal: 1, berriUqam: 1},
    montRoyal: {laurier: 1, sherbrooke: 1},
    laurier: {rosemont: 1, montRoyal: 1},
    rosemont: {beaubien: 1, laurier: 1},
    beaubien: {jeanTalon: 1, rosemont: 1},
    jeanTalon: {beaubien: 1, deCastelnau: 1},
    atwater: {guyConcordia: 1, lionelGroulx: 1},
    guyConcordia: {peel: 1, atwater: 1},
    peel: {mcGill: 1, guyConcordia: 1},
    mcGill: {placeDesArts: 1, peel: 1},
    placeDesArts: {saintLaurent: 1, mcGill: 1},
    saintLaurent: {berriUqam:1, placeDesArts: 1},
    coteDesNeiges: {universiteDeMontreal: 1, snowdon: 1},
    universiteDeMontreal: {edouardMonpetit: 1, coteDesNeiges: 1},
    edouardMonpetit: {outremont: 1, universiteDeMontreal: 1},
    outremont: {acadie: 1, edouardMonpetit: 1},
    acadie: {parc: 1, outremont: 1},
    parc: {deCastelnau: 1, acadie: 1},
    deCastelnau: {jeanTalon: 1, parc: 1}
};