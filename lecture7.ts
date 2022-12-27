
class LinkedListNode<T> {
    val: T;
    next: LinkedListNode<T> | null; 
    constructor(val: T, next: LinkedListNode<T> | null) {
        this.val = val;
        this.next = next;
    }

    addNode(val: T) {
        this.next = new LinkedListNode<T>(val, this.next) 
    }
}

class SortedLinkedList<T> {
    head: T | null = null;
    addNode() {
        
    }
}
