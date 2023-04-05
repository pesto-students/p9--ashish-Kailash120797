// Javascript program to rotate a linked list

var head;

// Linked list Node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function rotate(k) {
  if (k == 0) return;

  var current = head;
  var count = 1;
  while (count < k && current != null) {
    current = current.next;
    count++;
  }
  if (current == null) return;

  var kthNode = current;
  while (current.next != null) {
    current = current.next;
  }

  current.next = head;
  head = kthNode.next;
  kthNode.next = null;
}

function push(new_data) {
  var new_node = new Node(new_data);

  new_node.next = head;

  head = new_node;
}

function printList() {
  var temp = head;
  while (temp != null) {
    document.write(temp.data + " ");
    temp = temp.next;
  }
  document.write("<br/>");
}

push(30);
push(25);
push(20);
push(15);
push(10);
push(5);

document.write("Given list<br/>");
printList();

rotate(3);

document.write("Rotated Linked List<br/>");
printList();
