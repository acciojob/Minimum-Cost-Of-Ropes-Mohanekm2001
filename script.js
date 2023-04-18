function calculateMinCost() {
  const ropeLengths = document.getElementById('rope-lengths').value.split(',').map(Number);
  const n = ropeLengths.length;

  // Create a min heap to store rope lengths
  const heap = new MinHeap(ropeLengths);

  // Initialize total cost to 0
  let totalCost = 0;

  // Keep connecting ropes until only one rope remains
  while (heap.size() > 1) {
    // Get the two smallest ropes from the heap
    const min1 = heap.extractMin();
    const min2 = heap.extractMin();

    // Connect the two ropes and add the cost to the total cost
    const cost = min1 + min2;
    totalCost += cost;

    // Add the connected rope back to the heap
    heap.insert(cost);
  }

  // Display the total cost in the result div
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Minimum cost to connect ropes: ${totalCost}`;
}

// Min Heap implementation
class MinHeap {
  constructor(arr = []) {
    this.heap = arr;
    this.buildHeap();
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  buildHeap() {
    const n = this.size();
    for (let i = Math.floor(n / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  insert(val) {
    this.heap.push(val);
    this.siftUp(this.size() - 1);
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.siftDown(0);
    }
    return min;
  }

  siftUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] >= this.heap[parentIdx]) {
        break;
      }
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  siftDown(idx) {
    const n = this.size();
    while (idx < n) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;
      let minChildIdx = idx;
      if (leftChildIdx < n && this.heap[leftChildIdx] < this.heap[minChildIdx]) {
        minChildIdx = leftChildIdx;
      }
      if (rightChildIdx < n && this.heap[rightChildIdx] < this.heap[minChildIdx]) {
        minChildIdx = rightChildIdx;
      }
      if (minChildIdx === idx) {
        break;
      }
      this.swap(idx, minChildIdx);
      idx = minChildIdx;
    }
  }

 
