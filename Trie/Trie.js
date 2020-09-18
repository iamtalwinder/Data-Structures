const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let ch of word) {
      let node = current.children[ch];
      if (!node) {
        node = new TrieNode();
        current.children[ch] = node;
      }
      current = node;
    }
    current.endOfWord = true;
  }

  search(word) {
    let current = this.root;

    for (let ch of word) {
      let node = current.children[ch];
      if (!node) {
        return false;
      }
      current = node;
    }
    return current.endOfWord;
  }

  delete(word) {
    this._delete(this.root, word, 0);
  }

  _delete(current, word, index) {
    if (index === word.length) {
      if (!current.endOfWord) {
        return false;
      }
      current.endOfWord = false;
      return Object.keys(current.children).length === 0;
    }

    let ch = word.charAt(index),
      node = current.children[ch];

    if (!node) {
      return false;
    }

    let shouldDeleteCurrentNode = this._delete(node, word, index + 1);

    if (shouldDeleteCurrentNode) {
      delete current.children[ch];
      return Object.keys(current.children).length === 0;
    }

    return false;
  }
}

let trie = new Trie();
trie.insert("sam");
console.log(trie.search("sam"));
trie.delete("sam");
console.log(trie.search("sam"));
console.log(trie.search("sammy"));
console.log(trie.root);

module.exports = Trie;
