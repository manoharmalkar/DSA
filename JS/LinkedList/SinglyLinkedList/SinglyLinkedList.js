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
    get(index){
        let count = 0;
        let node = this.head;
        while(node){
            if(count === index){
                return node;
            }
            node = node.next;
            count++;
        }
        return null;
    }
    set(index, val){
        const node = this.get(index);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        let tempNode;
        if(index === 0){
            tempNode = this.head.next;
            this.head = new Node(val);
            this.head.next = tempNode;
            return true;
        }
        const node = this.get(index - 1);
        if(!node) return false;
        tempNode = node.next; 
        node.next = new Node(val);
        node.next.next = tempNode;
        return true;
    }

    remove(index){
        let teampNode;
        if(index === 0){
            teampNode = this.head;
            this.head = this.head.next;
            this.length--;
            return tempNode;
        }
        const node = this.get(index - 1);
        if(!node) return undefined;
        teampNode = node.next;
        node.next = node.next.next;
        this.length--;
        return teampNode;
    }

    traverse(){
        let node = this.head;
        while(node){
            console.log(node.val)
            node = node.next;
        }
    }

    rotate(num){
        if(num === -1){
            const tempHead = this.head;
            const tempTail = this.tail;
            this.head = tempTail;
            this.head.next = tempHead;
            let node = this.head;
            while(node){
                if(node.next === this.head){
                    this.tail = node;
                    node.next = null;
                    return 
                }
                node = node.next;
            }
        }
        let rotatecount = 0;
        while(num !== rotatecount){
            let tempNode = this.head;
            this.head = this.head.next;
            this.tail.next = tempNode;
            this.tail = this.tail.next;
            this.tail.next = null;
            rotatecount++;
        }
    }
}

var singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(5);
// singlyLinkedList.push(10);
// singlyLinkedList.push(15);

/* EXAMPLE FOR INSERT WITH INDEX */
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.tail.val); // 25;
// console.log("===============")
// singlyLinkedList.rotate(3);
// singlyLinkedList.traverse();
// console.log("===============")
// console.log(singlyLinkedList.head.val); // 20
// console.log(singlyLinkedList.tail.val); // 15;

// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.tail.val); // 25;
// console.log("===============")
// singlyLinkedList.rotate(-1);
// singlyLinkedList.traverse();
// console.log("===============")
// console.log(singlyLinkedList.head.val); // 25
// console.log(singlyLinkedList.tail.val); // 20;

// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.tail.val); // 25;
// console.log("===============")
// singlyLinkedList.rotate(10000);
// singlyLinkedList.traverse();
// console.log("===============")
// console.log(singlyLinkedList.head.val); // 25
// console.log(singlyLinkedList.tail.val); // 20;


/* EXAMPLE FOR INSERT WITH INDEX */
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.remove(2).val); // 15
// console.log(singlyLinkedList.remove(100)); // undefined
// console.log(singlyLinkedList.length) // 3
// console.log(singlyLinkedList.head.val) // 5
// console.log(singlyLinkedList.head.next.val) // 10
// console.log(singlyLinkedList.head.next.next.val) // 20

/* 
EXAMPLE FOR INSERT WITH INDEX 

should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

*/
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.insert(2,12)); // true
// console.log(singlyLinkedList.insert(100,12)); // false\
// console.log("==========================")
// singlyLinkedList.traverse()
// console.log(singlyLinkedList.insert(5,25)); // true
// console.log("==========================")
// singlyLinkedList.traverse()
// console.log(singlyLinkedList.tail.val) // 25





/* 
EXAMPLE FOR SET WITH INDEX 

should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

*/
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.set(0,10)) // true
// console.log(singlyLinkedList.set(1,2)) // true
// console.log(singlyLinkedList.length) // 4
// console.log(singlyLinkedList.head.val) // 10
// console.log(singlyLinkedList.set(10,10)) // false
// console.log(singlyLinkedList.set(3,100)) // true
// console.log(singlyLinkedList.head.next.next.next.val); // 100




/* EXAMPLE FOR GET WITH INDEX */
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.get(0)?.val) // 5
// console.log(singlyLinkedList.get(1)?.val) // 10
// console.log(singlyLinkedList.get(2)?.val) // 15
// console.log(singlyLinkedList.get(3)?.val) // 20
// console.log(singlyLinkedList.get(4)?.val) // undefined




/* EXAMPLE FOR POP */
// singlyLinkedList.traverse();
// console.log(singlyLinkedList.pop());
// console.log(singlyLinkedList.pop());
// console.log(singlyLinkedList.pop());
// console.log(singlyLinkedList.pop());

// singlyLinkedList.traverse();