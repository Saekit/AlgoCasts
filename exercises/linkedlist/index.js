// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertAt(data, index){
    //1st scenario: is linkedlist empty, if it is
    //insert a new node and point the head to the first node
    //once done exit function
    if (!this.head){
      this.head = new Node(data)
      return
    }

    //2nd scenario: what if linkedlist is not empty and the
    //given is zero. Create new node, the this.head as next
    // value of the new node, and point the new node
    // as the new head, exits the function

    if (index === 0){
      this.head = new Node(data, this.head)
      return
    }

    //3rd scenario: the index would be in the middle of linkedlist
    //get previous node of the given index, assign the next value of
    //previous to new node, and assign the next node of the new 

    const prevNode = this.getAt(index -1)
    prevNode.next = new Node(data, this.getAt(index))
    // let node = this.head;

  }

  size(){
    let counter = 0;
    let node = this.head
    while(node){
      node = node.next
      counter++
    }
    return counter;
  }

  insertLast(data){
    this.insertAt(data, this.size())
  }

  getAt(index){
    let node = this.head;

    let counter = 0;
    while (node) { //true unless node points to null (at the end)
      if (counter === index){
        return node;
      }
      counter++;
      node = node.next
    }
    return null;
  }


}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };
