class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 添加
  append(element) {
    let node = new Node(element)
    let curr

    if (this.head === null) {
      this.head = node
    } else {
      curr = this.head
      while(curr.next) {
        curr = curr.next
      }

      curr.next = node
      this.length++
    }
  }

  removeAt(index) {
    let curr = this.head
    let pos = 0
    let prev

    if (index < 0) {
      return
    }

    if (index === 0) {
      this.head = curr.next
    } else {
      while(pos < index) {
        prev = curr
        curr = curr.next
        pos++
      }
      prev.next = curr.next
      curr.next = null
    }
    this.length--

  }

  // 改
  update(index, element) {
    let curr = this.head
    let pos = 0

    if (index < 0) {
      return
    }

    while(index < pos) {
      curr = curr.next
      pos++
    }

    curr.element = element
  }

  // 查
  getElement(index) {
    let curr = this.head
    let pos = 0

    if (index < 0) {
      return 
    }

    while(index < pos) {
      curr = curr.next
      pos++
    }

    return curr.element
  }

  // 打印
  print() {
    let ele = []
    let curr = this.head

    while(curr) {
      ele.push(curr.element)
      curr = curr.next
    }

    console.log(ele.join('===>'))

    return ele.join('===>')
  }
}

let linkNode = new LinkNodeList()

linkNode.append('1111')
linkNode.append('2222')
linkNode.append('3333')
console.log('linkNode.getElement(0)', linkNode.getElement(0))

linkNode.print()
linkNode.removeAt(2)
linkNode.print()

linkNode.update(0, '99999')

linkNode.print()