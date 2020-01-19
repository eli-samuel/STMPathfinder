const graph = {
  M: {A: 7},
  A: {B: 3, H: 9, C: 6, M: 7},
  B: {A: 3},
  C: {A: 6, D: 12, E: 2, I: 3, J: 3},
  D: {C: 12},
  E: {C: 2},
  F: {G: 7, H: 4, I: 3, J: 3},
  G: {F: 7},
  H: {A: 9, F: 4, K: 6},
  I: {C: 3, F: 3},
  J: {C: 3, F: 3},
  K: {H: 6}
};

let start = 'C'; // This is the name of the starting location
let finish = 'G'; // This is the name of the end location

graph.start = graph[start];
delete graph[start];

graph.finish = graph[finish];
delete graph[finish];

for (var property in graph) {
    if (Object.prototype.hasOwnProperty.call(graph, property)) {
        // do stuff
        if (graph[property].hasOwnProperty(start)) {
            delete graph[property][start];
        }
        if (graph[property].hasOwnProperty(finish)) {
            graph[property].finish = graph[property][finish];
            delete graph[property][finish];
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
const dijkstra = (graph) => {
  console.log('Graph: ')
  console.log(graph)

  // track lowest cost to reach each node
  const trackedCosts = Object.assign({finish: Infinity}, graph.start);
  console.log('Initial `costs`: ')
  console.log(trackedCosts)

  // track paths
  const trackedParents = {finish: null};
  for (let child in graph.start) {
    trackedParents[child] = 'start';
  }
  console.log('Initial `parents`: ')
  console.log(trackedParents)

  // track nodes that have already been visited
  const visitedNodes = [];

  // Set initial node. Pick lowest cost node.
  let node = findLowestCostNode(trackedCosts, visitedNodes);
  console.log('Initial `node`: ', node)

  console.log('while loop starts: ')
  while (node) {
    console.log(`***** 'currentNode': ${node} *****`)
    let costToReachNode = trackedCosts[node];
    let childrenOfNode = graph[node];

    for (let child in childrenOfNode) {
      let costFromNodetoChild = childrenOfNode[child]
      let costToChild = costToReachNode + costFromNodetoChild;

      if (!trackedCosts[child] || trackedCosts[child] > costToChild) {
        trackedCosts[child] = costToChild;
        trackedParents[child] = node;
      }

      console.log('`trackedCosts`', trackedCosts)
      console.log('`trackedParents`', trackedParents)
      console.log('----------------')
    }

    visitedNodes.push(node);

    node = findLowestCostNode(trackedCosts, visitedNodes);
  }
  console.log('while loop ends: ')

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

console.log('dijkstra', dijkstra(graph));

console.log(graph);
