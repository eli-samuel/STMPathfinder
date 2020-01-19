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

let start = 'C';
let finish = 'G';

graph.start = graph[start];
delete graph[start];



graph.finish = graph[finish];
delete graph[finish];

for (var prop in graph) {
    if (Object.prototype.hasOwnProperty.call(graph, prop)) {
        // do stuff
        if (graph[prop].hasOwnProperty(start)) {
            delete graph[prop][start];
        }
        if (graph[prop].hasOwnProperty(finish)) {
            graph[prop].finish = graph[prop][finish];
            delete graph[prop][finish];
        }
    }
}

console.log(graph)
