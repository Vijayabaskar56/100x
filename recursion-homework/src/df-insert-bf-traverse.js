const createNode = (value) => {
  return {
    value: value,
    left: null,
    right: null,
  };
};

const depthFirstInsert = (root, value) => {
  let q = root;
  while (value) {
    if (q.value === value || !value) return q;

    if (value < q.value) {
      if (q.left) {
        q = q.left;
      } else {
        q.left = createNode(value);
        return root;
      }
    }
    if (q.value < value) {
      if (q.right) {
        q = q.right;
      } else {
        q.right = createNode(value);
        return root;
      }
    }
  }
};

const breadthFirstTraverse = (queue, collector) => {
  if (queue.length == 0) return collector;

  let current = queue.shift();
  collector.push(current.value);

  if (current.left) {
    queue.push(current.left);
  }
  if (current.right) {
    queue.push(current.right);
  }
  return breadthFirstTraverse(queue, collector);
};

module.exports = { depthFirstInsert, breadthFirstTraverse, createNode };
