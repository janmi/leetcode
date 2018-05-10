/*
* @Author: Administrator
* @Date:   2018-05-09 16:13:54
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-10 23:28:22
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/*
    解题思路：
    用递归的方式遍历链表，在遍历的过程中，把节点的 val 设置为一个固定的值 hasCycle，如果不是环（即next 为 null）返回false，如果是环，在递归到最后一个节点时，其next指向换的第一个节点，而这时，第一个节点的 val 为 hasCycle, 则证明链表为环
 */
var hasCycle = function(head) {
  if (head === null) {
    return false
  }
  var eachNode = function (ListNode) {
    if (ListNode.next === null) {
      return false
    } else if (ListNode.val === 'hasCycle') {
      return true
    } else {
      ListNode.val = 'hasCycle'
      return eachNode(ListNode.next)
    }
  }
  return eachNode(head)
};

// 定义构造函数
function createNode(data,next) {
    var obj = {
        data: data,
        next: next
    };
    return obj;
}
// 定义链表函数
function Lists() {
    this.pRear = null;
    this.length = 0;
    this.InsertAtEnd = function (data) {
        if (this.length == 0) {
            var node = new createNode(data,this.pRear);
            this.pRear = node;
            node.next = this.pRear;
        } else {
            var node = new createNode(data,this.pRear.next);
            this.pRear.next = node;
            this.pRear = node;
        }
        this.length++;
    }
    this.InsertAtFirst = function (data) {
        if (this.length == 0) {
            var node = new createNode(data,this.pRear);
            this.pRear = node;
            node.next = this.pRear;
        } else {
            var node = new createNode(data,this.pRear.next);
            this.pRear.next = node;
        }
        this.length++;
    }
    this.Locate = function (index) {
        if (index < 0 || index > this.length - 1) {
            throw new Error("索引值有错");
        }   
        var temp = this.pRear.next;             
        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    this.Insert = function (index,data) {
        if (index < 0 || index > this.length) {
            throw new Error("索引值有错");
        }
        if (index == 0) {
            this.InsertAtFirst(data);
        } else if (index == this.length) {
            this.InsertAtEnd(data);
        } else {
            var node = new createNode(data,this.Locate(index));
            this.Locate(index - 1).next = node;
            this.length++;
        }
    }
    this.Search = function (data) {
        var temp = this.pRear.next;
        for (var i = 0; i < this.length; i++) {
            if (data == temp.data) {
                return i;
            }
            temp = temp.next;
        }
        return -1;
    }
    this.Clear = function () {
        this.length = 0;
        this.pRear = null;
    }
    this.Remove = function (index) {
        if (index < 0 || index > this.length - 1 || this.length == 0) {
            throw new Error("索引值有错");
        }
        if (this.length == 1) {
            this.Clear();
            return 1;
        }
        if (index == 0) {
            this.pRear.next = this.Locate(0).next;
        } else {
            this.Locate(index - 1).next = this.Locate(index).next;
        }
    }
    this.isEmpty = function () {
        return this.length == 0 ? true : false;
    }
    this.toString = function () {
        var temp = this.pRear.next,
            str = "";
        for (var i = 0; i < this.length; i++) {
            str += "第" + i + "个为:" + temp.data; 
            temp = temp.next; 
        }
        return str;
    }
}
// 测试
var list = new Lists();
list.Insert(0,1);
list.InsertAtFirst(0);
list.Insert(2,-1);
list.InsertAtEnd(20);
console.dir(list.pRear)
console.log(hasCycle(list.pRear))