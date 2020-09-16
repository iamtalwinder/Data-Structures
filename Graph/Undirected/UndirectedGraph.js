const Graph = require("../Graph");

class UndirectedGraph extends Graph {
  addEdge(vertex1, vertex2, weight) {
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2]) {
      delete this.edges[vertex1][vertex2];
    }

    if (this.edges[vertex2] && this.edges[vertex2][vertex1]) {
      delete this.edges[vertex2][vertex1];
    }
  }
}

const graph = new UndirectedGraph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2, 1);
graph.addEdge(2, 3, 1);
graph.addEdge(3, 4, 1);
graph.addEdge(3, 1, 5);
graph.removeVertex(2);
console.log(graph.edges);
