const createNode = (value) => {
  return {
    value: value,
    left: null,
    right: null,
  };
};

const dptFirstInsert = (root, value) => {
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

// const breadthFirstTraverse = (root) => {
//   let collector = [];
//   let q = [root];

//   while (q.length > 0) {
//     let first = q.shift();
//     collector.push(first.value);
//     if (first.left) q.push(first.left);

//     if (first.right) q.push(first.right);
//   }

//   return collector;
// };

// const depthFirstInsert = (root, value) => {
//   if (root.value === value || !value) return root;
//   // insert on the left side of the tree
//   if (value < root.value) {
//     if (root.left) {
//       return depthFirstInsert(root.left, value);
//     } else {
//       root.left = createNode(value);
//       return root;
//     }
//   }

//   // insert on the right side of the tree
//   if (root.value < value) {
//     if (root.right) {
//       return depthFirstInsert(root.right, value);
//     } else {
//       root.right = createNode(value);
//       return root;
//     }
//   }
// };

// const breadthFirstTraverse = (root) => {
//   let collector = [];
//   let q = [root];

//   while (q.length > 0) {
//     let first = q.shift();
//     collector.push(first.value);
//     if (first.left) q.push(first.left);

//     if (first.right) q.push(first.right);
//   }

//   return collector;
// };

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

let [str, traversedExpected] = ["06f973d4c2ae1b5", "80f6937d24ce15ab"];

const insertWithString = (str, root = createNode("8")) => {
  str.split("").forEach((c) => dptFirstInsert(root, c));
  return root;
};

let root = insertWithString(str, createNode("8"));
let traversed = breadthFirstTraverse([root], []).join("");
// expect(traversed).toEqual(traversedExpected);
console.log(traversed);
console.log(traversedExpected == traversed);
