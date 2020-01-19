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

let lionel = new Station(
    6,
    "Lionel Groulx",
    ["orange", "green"],
    true,
    true,
    [[8, 3, "Open"],
    [7, 3, "Closed"],
    [6, 1, "Open"],
    [4, 3, "Closed"],
    [3, 2, "Open"],
    [2, 2, "Closed"]]
);

let peel = new Station(
    1,
    "Peel",
    ["blue"],
    true,
    false,
    [
    [9, 3, "Only"], // carnum,doornum, exitname
    ]
);

let snowdon = new Station(
    1,
    "Snowdon",
    ["orange"],
    true,
    true,
    [
    [1, 1, "Only"], // carnum,doornum, exitname
    ]
);

let stations = [];

for (let i=0; i<10; i++) {
    stations.push(new Station(0, i));
}


let endStation = new Station(), startStation = new Station(), midStation = new Station();
let exitStreet = "nowhere";

let startCarDoor = [], endCarDoor = [];

// NEED SOMETHING TO CALCULATE THE FASTEST ROUTE (WHERE TO CHANGE LINES)

startStation = peel;
midStation = lionel;
endStation = snowdon;
exitStreet = "Only"; // FOR TESTING PURPOSES

if (endStation.color.includes(startStation.color[0])) {
    for (let i=0; i<endStation.numExits; i++) {
        if (endStation.exitStats[count][2] === exitStreet) startCarDoor = [endStation.exitStats[i][0], endStation.exitStats[i][1]];
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
                    console.log("1");
                    endL = true;
                    break;
                }
                console.log("2 " + count);
                lower = count;
                break;
            }
            else if (midStation.exitStats[count][1] > endCarDoor[1] && count == midStation.numExits-1) {
                console.log("3");
                endR = true;
                break;
            }
        }
        lower = count+1;
        count++;
    }

    if (count == 0 && midStation.exitStats[0][0] <= endCarDoor[0] && midStation.exitStats[0][2] === "Open") endL = true;

    if ((lower == midStation.numExits && midStation.exitStats[lower-1][0] >= endCarDoor[0])) {
        lower--;
        endR = true;
    }

    if (lower == 0 && midStation.exitStats[lower-1][0] >= endCarDoor[0]) {
        lower--;
        endR = true;
    }

    let upper = lower-1;

    if (midStation.exitStats[upper][2] === "Open" && !endL && !endR) {
        startCarDoor = [endCarDoor[0], endCarDoor[1]];
        console.log("1");
    }
    else if (endL || endR) {
        console.log("2");
        if (endL) startCarDoor = [midStation.exitStats[0][0], midStation.exitStats[0][1]];
        if (endR) startCarDoor = [midStation.exitStats[midStation.numExits-1][0], midStation.exitStats[midStation.numExits-1][1]];
    }
    else {
        console.log("3");
        let diffLeft = Math.abs((3*(midStation.exitStats[upper][0]-endCarDoor[0])) + (midStation.exitStats[upper][1]-endCarDoor[1]));
        let diffRight = Math.abs((3*(midStation.exitStats[lower][0]-endCarDoor[0])) + (midStation.exitStats[lower][1]-endCarDoor[1]));
        console.log(upper + " " + lower);
        console.log(diffLeft + " " + diffRight);

        if (diffLeft <= diffRight) startCarDoor = [midStation.exitStats[upper][0], midStation.exitStats[upper][1]];
        else startCarDoor = [midStation.exitStats[lower][0], midStation.exitStats[lower][1]];
    }
}

console.log(startCarDoor);
