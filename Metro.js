class Station {

    constructor(numExits, name, color, direction, isConnection, exitStats) {
        this.numExits = numExits;
        this.name = name;
        this.color = color;
        this.direction = direction;
        this.isConnection = isConnection;
        this.exitStats = exitStats;
    }
}

function algorithm (start, finish) {
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
      // track lowest cost to reach each node
      const trackedCosts = Object.assign({finish: Infinity}, city.start);

      // track paths
      const trackedParents = {finish: null};
      for (let child in city.start) {
        trackedParents[child] = 'start';
      }

      // track nodes that have already been visited
      const visitedNodes = [];

      // Set initial node. Pick lowest cost node.
      let node = findLowestCostNode(trackedCosts, visitedNodes);

      while (node) {
        let costToReachNode = trackedCosts[node];
        let childrenOfNode = city[node];

        for (let child in childrenOfNode) {
          let costFromNodetoChild = childrenOfNode[child]
          let costToChild = costToReachNode + costFromNodetoChild;

          if (!trackedCosts[child] || trackedCosts[child] > costToChild) {
            trackedCosts[child] = costToChild;
            trackedParents[child] = node;
          }
        }

        visitedNodes.push(node);

        node = findLowestCostNode(trackedCosts, visitedNodes);
      }

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


    console.log(arr);

    return arr;
}

function calculation (startStation, endStation, midStation, exitStreet) {
    let startCarDoor = [], endCarDoor = [];

    if (endStation.color.includes(startStation.color[0])) {
        for (let i=0; i<endStation.numExits; i++) {
            if (endStation.exitStats[i][2] === exitStreet) return [endStation.exitStats[i][0], endStation.exitStats[i][1]];
        }
    }

    if (!(endStation.color.includes(startStation.color[0]))) {

        for (let i=0; i<endStation.numExits; i++) {
            if (endStation.exitStats[i][2] === exitStreet) {
                endCarDoor = [endStation.exitStats[i][0], endStation.exitStats[i][1]];
                console.log(endCarDoor);
            }
        }

        let count = 0, lower = count+1;
        let endL = endR = false;

        while (count<midStation.numExits && midStation.exitStats[count][0] >= endCarDoor[0]) {
            if (midStation.exitStats[count][0] == endCarDoor[0]) {
                if (midStation.exitStats[count][1] <= endCarDoor[1]) {
                    if (count == 0) {
                        endL = true;
                        break;
                    }
                    lower = count;
                    break;
                }
                else if (midStation.exitStats[count][1] > endCarDoor[1] && count == midStation.numExits-1) {
                    endR = true;
                    break;
                }
            }
            lower = count+1;
            count++;
        }

        if (count == 0 && midStation.exitStats[0][0] <= endCarDoor[0] && midStation.exitStats[0][2] === "Open") {
            endL = true;
        }

        if (lower == midStation.numExits && midStation.exitStats[lower-1][0] >= endCarDoor[0] && !endL) {
            lower--;
            endR = true;
        }
        else if (lower == 0 && midStation.exitStats[lower-1][0] >= endCarDoor[0]) { // problem here
            lower--;
            endR = true;
        }

        let upper = lower-1;

        if (upper == -1) upper = 0;

        if (midStation.exitStats[upper][2] === "Open" && !endL && !endR) {
            startCarDoor = [endCarDoor[0], endCarDoor[1]];
        }
        else if (endL || endR) {
            if (endL) startCarDoor = [midStation.exitStats[0][0], midStation.exitStats[0][1]];
            if (endR) startCarDoor = [midStation.exitStats[midStation.numExits-1][0], midStation.exitStats[midStation.numExits-1][1]];
        }
        else if (midStation.exitStats.length == 1) {
            startCarDoor = [midStation.exitStats[midStation.numExits-1][0], midStation.exitStats[midStation.numExits-1][1]]
        }
        else {
            let diffLeft = Math.abs((3*(midStation.exitStats[upper][0]-endCarDoor[0])) + (midStation.exitStats[upper][1]-endCarDoor[1]));
            let diffRight = Math.abs((3*(midStation.exitStats[lower][0]-endCarDoor[0])) + (midStation.exitStats[lower][1]-endCarDoor[1]));

            if (diffLeft <= diffRight) startCarDoor = [midStation.exitStats[upper][0], midStation.exitStats[upper][1]];
            else startCarDoor = [midStation.exitStats[lower][0], midStation.exitStats[lower][1]];
        }
    }

    return startCarDoor
}

let stations = [
    new Station(1,"snowdon",["orange", "blue"],true,true,
    [[8, 3, "Open"],[7, 3, "Closed"],[6, 1, "Open"],[4, 3, "Closed"],[3, 2, "Open"],[2, 2, "Closed"]]),
    new Station(1,"villaMaria",["orange"],true,false,
    [[1, 1, "Monkland"]]),
    new Station(1,"vendome",["orange"],true,false,
    [[3, 1, "Vendome"]]),
    new Station(1,"placeSaintHenri",["orange"],true,false,
    [[4, 3, "Only"]]),
    new Station(6,"lionelGroulx",["orange", "green"],true,true,
    [[8, 3, "Open"],[7, 3, "Closed"],[6, 1, "Open"],[4, 3, "Closed"],[3, 2, "Open"],[2, 2, "Closed"]]),
    new Station(1,"georgesVanier",["orange"],true,false,
    [[2, 3, "Only"]]),
    new Station(1,"lucienLallier",["orange"],true,false,
    [[8, 1, "Only"]]),
    new Station(1,"bonaventure",["orange"],true,false,
    [[9, 2, "Only"]]),
    new Station(1,"squareVictoria",["orange"],true,false,
    [[1, 3, "Only"]]),
    new Station(1,"placeDarmes",["orange"],true,false,
    [[5, 1, "Only"]]),
    new Station(1,"champDeMars",["orange"],true,false,
    [[6, 3, "Only"]]),
    new Station(1,"berriUqam",["orange", "green"],true,true,
    [[8, 3, "Open"],[7, 3, "Closed"],[6, 1, "Open"],[4, 3, "Closed"],[3, 2, "Open"],[2, 2, "Closed"]]),
    new Station(1,"sherbrooke",["orange"],true,false,
    [[1, 2, "Only"]]),
    new Station(1,"montRoyal",["orange"],true,false,
    [[4, 3, "Only"]]),
    new Station(1,"laurier",["orange"],true,false,
    [[3, 3, "Only"]]),
    new Station(1,"rosemont",["orange"],true,false,
    [[6, 2, "Only"]]),
    new Station(1,"beaubien",["orange"],true,false,
    [[6, 2, "Only"]]),
    new Station(1,"jeanTalon",["orange", "blue"],true,true,
    [[8, 3, "Open"],[7, 3, "Closed"],[6, 1, "Open"],[4, 3, "Closed"],[3, 2, "Open"],[2, 2, "Closed"]]),
    new Station(1,"atwater",["green"],true,false,
    [[2, 2, "Dawson"], [8, 2, "Atwater"]]),
    new Station(1,"guyConcordia",["green"],true,false,
    [[1, 1, "Concordia University"], [9, 3, "St. Mathieu"]]),
    new Station(1,"peel",["green"],true,false,
    [[4, 1, "Only"]]),
    new Station(1,"mcGill",["green"],true,false,
    [[2, 3, "Only"]]),
    new Station(1,"placeDesArts",["green"],true,false,
    [[7, 3, "Only"]]),
    new Station(1,"saintLaurent",["green"],true,false,
    [[6, 2, "Only"]]), new Station(1,"coteDesNeiges",["blue"],true,false,
    [[8, 3, "Only"]]), new Station(1,"universiteDeMontreal",["blue"],true,false,
    [[8, 2, "Only"]]), new Station(1,"edouardMonpetit",["blue"],true,false,
    [[5, 3, "Only"]]), new Station(1,"outremont",["blue"],true,false,
    [[7, 2, "Only"]]), new Station(1,"acadie",["blue"],true,false,
    [[8, 1, "Only"]]), new Station(1,"parc",["blue"],true,false,
    [[1, 1, "Only"]]), new Station(1,"deCastelnau",["blue"],true,false,
    [[1, 1, "Only"]])
 ];

let endStation = new Station(), startStation = new Station(), midStation = new Station(), newEndStation = new Station();

startStation = stations[stations.length-6]; // user in
endStation = stations[6]; // user in
exitStreet = "Only"; // user in

let middle = algorithm(startStation.name, endStation.name);

for (let i=0; i<stations.length; i++) {
    let j=0;

    for (j=0; j<stations.length; j++) {
        if (stations[j].name === middle[1]) {
            break;
        }
    }

    if (middle.length>1 && stations[i].name === middle[0]
        && startStation.color[0] != stations[i].color[0]
        && endStation.color[0] != stations[j].color[0]) {

        midStation = stations[i];
        newEndStation = stations[j]
        console.log(calculation(startStation, newEndStation, midStation, exitStreet)); // [x, y]

        startStation = stations[i];
        midStation = stations[j];
        console.log(calculation(startStation, endStation, midStation, exitStreet)); // [x, y]

        // do some math here
    }
    else if ((middle.length == 1 && stations[i].name === middle[0])
        || (startStation.color[0] === stations[i].color[0]
        || endStation.color[0] === stations[j].color[0])) {
        midStation = stations[i];

        console.log(calculation(startStation, endStation, midStation, exitStreet)); // [x, y]
        break;
    }
    else if (middle.length == 0) {
        console.log(calculation(startStation, endStation, midStation, exitStreet));
        break;
    }
}
