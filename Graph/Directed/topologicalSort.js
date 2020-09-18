const DirectedGraph = require("./DirectedGraph");

class Graph extends DirectedGraph {
  topologicalSort() {
    let visited = {},
      stack = [];

    for (let vertex in this.edges) {
      if (!visited[vertex]) {
        this._topologicalSort(vertex, visited, stack);
      }
    }

    return stack;
  }

  _topologicalSort(vertex, visited, stack) {
    visited[vertex] = true;
    for (let adjacentVertex in this.edges[vertex]) {
      if (!visited[adjacentVertex]) {
        this._topologicalSort(adjacentVertex, visited, stack);
      }
    }
    stack.push(vertex);
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
console.log(graph.topologicalSort().reverse());
