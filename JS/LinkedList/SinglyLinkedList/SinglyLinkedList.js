class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newVal = new Node(val);
        if(!this.head) {
            this.head = newVal;
            this.tail = this.head;
        } else {
            this.tail.next = newVal;
            this.tail = newVal;
        }
        this.length++;
        return this;
    }
    pop(){
        let node = this.head;
        if(!node) return undefined;
        if(!node.next){
            this.head = null;
            return node;
        }
        let prevNode = node;
        while(node.next){
            prevNode = node;
            node = node.next;
        }
        prevNode.next = null
        this.length--;
        return node;
    }

    traverse(){
        let node = this.head;
        while(node){
            console.log(node.val)
            node = node.next;
        }
    }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5);
singlyLinkedList.push(10);
singlyLinkedList.push(15);




/* EXAMPLE FOR POP */
singlyLinkedList.traverse();
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());

singlyLinkedList.traverse();