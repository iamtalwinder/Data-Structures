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

module.exports = UndirectedGraph;
