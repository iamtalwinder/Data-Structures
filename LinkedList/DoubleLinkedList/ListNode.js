class ListNode {
	constructor(data, prev, next) {
		this.prev = prev || null;
		this.data = data;
		this.next = next || null;
	}
}

module.exports = ListNode;
