
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a new node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove the last node from the list and return its value
  remove() {
    if (!this.head) return null;
    if (this.length === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    const value = current.value;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return value;
  }

  // Access an element at a specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  // Convert the list to a string representation
  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
    return result.trim();
  }
}

