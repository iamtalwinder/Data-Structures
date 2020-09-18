const Graph = require("../Graph");

class DirectedGraph extends Graph {
  addEdge(vertex1, vertex2, weight) {
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
  }

  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2]) {
      delete this.edges[vertex1][vertex2];
    }
  }
}

module.exports = DirectedGraph;
