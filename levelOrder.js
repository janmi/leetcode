/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	const result = []
	let items = []
	//items.push(root.val)
  function loop (tree) {
  	if (tree.left) {
  		items.push(tree.left.val)
  		loop(tree.left)
  	}
  	if (tree.right) {
  		items.push(tree.right.val)
  		loop(tree.right)
  	}
  }
  // loop(root)
  items = levelOrderTraversal(root)
  for (var i = 0; i < items.length; i++) {
  	if (items.length === 0) return
  	result.push(items.splice(0, Math.pow(2, i)))
  }
  return result
}


var levelOrderTraversal = function(node) {
	let result = []
  if(!node) {
    throw new Error('Empty Tree')
  }

  var que = []
  que.push(node)
  while(que.length !== 0) {
    node = que.shift()
    result.push(node.val)
    console.log(node.val)
    if(node.left){
    	que.push(node.left)
    } 
    if(node.right) {
    	que.push(node.right)
    }
  }
	return result
}

var tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 7
      },
      right: {
        val: 8
      }
    },
    right: {
      val: 6
    }
  }
}

const tree2 = {
	val: 3,
	left: {
		val: 9,
		left: null,
		right: null
	},
	right: {
		val: 20,
		left: {
			val: 15,
			left: null,
			right: null
		},
		right: {
			val: 7,
			left: null,
			right: null
		}
	}
}
console.log(levelOrder(tree2))