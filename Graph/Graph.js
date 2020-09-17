class Graph {
  constructor() {
    this.edges = {};
  }

  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  removeVertex(vertex) {
    for (let adjacentVertex in this.edges[vertex]) {
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
  }

  traverseBFS(vertex, callback) {
    let queue = [],
      visited = {};
    queue.push(vertex);
    while (queue.length) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        callback(vertex);
        for (let adjacentVertex in this.edges[vertex]) {
          queue.push(adjacentVertex);
        }
      }
    }
  }

  traverseDFS(vertex, callback) {
    let visited = {};
    this._traverseDFS(vertex, visited, callback);
  }

  _traverseDFS(vertex, visited, callback) {
    visited[vertex] = true;
    callback(vertex);
    for (let adjacentVertex in this.edges[vertex]) {
      if (!visited[adjacentVertex]) {
        this._traverseDFS(adjacentVertex, visited, callback);
      }
    }
  }
}

module.exports = Graph;
