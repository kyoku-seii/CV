class MinHeap {
    constructor() {
        this.heap = [];
    }
    swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    shiftUp(index) {
        if (index === 0) return
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    pop() {
        let res = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.shiftDown(0)
        return res
    }
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    getRightIndex(i) {
        return i * 2 + 2;
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] < this.heap[index] && this.heap[leftIndex] <= this.heap[rightIndex]) {
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] < this.heap[index] && this.heap[rightIndex] <= this.heap[leftIndex]) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
}

const h = new MinHeap()
h.insert(4)
h.insert(3)
h.insert(2)
h.insert(1)
console.log(h.heap)
console.log(h.pop())
console.log(h.heap)

