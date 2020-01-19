function algorithm (depart, arrive) {
    const city = {
        snowdon: {villaMaria: 1, coteDesNeiges: 1}, // regex to read
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


    let start = depart; // This is the name of the starting location
    let finish = arrive; // This is the name of the end location

    city.start = city[start];
    delete city[start];

    city.finish = city[finish];
    delete city[finish];

    for (var property in city) {
        if (Object.prototype.hasOwnProperty.call(city, property)) {
            if (city[property].hasOwnProperty(start)) {
                delete city[property][start];
            }
            if (city[property].hasOwnProperty(finish)) {
                city[property].finish = city[property][finish];
                delete city[property][finish];
            }
        }
    }


    const findLowestCostNode = (costs, visited) => {
      const knownNodes = Object.keys(costs)

      const lowestCostNode = knownNodes.reduce((lowest, node) => {
          if (lowest === null && !visited.includes(node)) {
            lowest = node;
          }
          if (costs[node] < costs[lowest] && !visited.includes(node)) {
            lowest = node;
          }
          return lowest;
      }, null);

      return lowestCostNode
    };

    // function that returns the minimum cost and path to reach Finish
    const dijkstra = (city) => {
      // console.log('Graph: ')
      // console.log(city)

      // track lowest cost to reach each node
      const trackedCosts = Object.assign({finish: Infinity}, city.start);
      // console.log('Initial `costs`: ')
      // console.log(trackedCosts)

      // track paths
      const trackedParents = {finish: null};
      for (let child in city.start) {
        trackedParents[child] = 'start';
      }
      // console.log('Initial `parents`: ')
      // console.log(trackedParents)

      // track nodes that have already been visited
      const visitedNodes = [];

      // Set initial node. Pick lowest cost node.
      let node = findLowestCostNode(trackedCosts, visitedNodes);
      // console.log('Initial `node`: ', node)

      // console.log('while loop starts: ')
      while (node) {
        // console.log(`***** 'currentNode': ${node} *****`)
        let costToReachNode = trackedCosts[node];
        let childrenOfNode = city[node];

        for (let child in childrenOfNode) {
          let costFromNodetoChild = childrenOfNode[child]
          let costToChild = costToReachNode + costFromNodetoChild;

          if (!trackedCosts[child] || trackedCosts[child] > costToChild) {
            trackedCosts[child] = costToChild;
            trackedParents[child] = node;
          }

          // console.log('`trackedCosts`', trackedCosts)
          // console.log('`trackedParents`', trackedParents)
          // console.log('----------------')
        }

        visitedNodes.push(node);

        node = findLowestCostNode(trackedCosts, visitedNodes);
      }
      // console.log('while loop ends: ')

      let optimalPath = ['finish'];
      let parent = trackedParents.finish;
      while (parent) {
        optimalPath.push(parent);
        parent = trackedParents[parent];
      }
      optimalPath.reverse();

      const results = {
        distance: trackedCosts.finish,
        path: optimalPath
      };

      return results;
    };

    console.log('dijkstra', dijkstra(city));

    let arr = [];

    for (let r=0; r<dijkstra(city).path.length; r++) {
        if (dijkstra(city).path[r] === "snowdon") arr.push("snowdon");
        if (dijkstra(city).path[r] ==="lionelGroulx") arr.push("lionelGroulx");
        if (dijkstra(city).path[r] ==="jeanTalon") arr.push("jeanTalon");
        if (dijkstra(city).path[r] ==="berriUqam") arr.push("berriUqam");
    }

    return arr;
}


console.log(algorithm("atwater", "deCastelnau"));
