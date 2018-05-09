/*
* @Author: Administrator
* @Date:   2018-05-09 10:06:08
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-09 10:15:01
*/
var addTwoNumbers = function (l1, l2) {
  let l = []
  let ret = []
  let addone = 0
  // 读取链表，生成数组
  var eachNode = function (listNode) {
    l.push(listNode.val)
    if (listNode.next != null) {
      return eachNode(listNode.next)
    } else {
      return l
    }
  }

  let a = eachNode(l1)
  // 递归完成之后，还原 l 默认值
  l = []
  let b = eachNode(l2)

  // 对齐数组，方便循环
  while (a.length < b.length) {
    a.unshift(0)
  }
  while (a.length > b.length) {
    b.unshift(0)
  }
  // 倒序循环数组，a、b当前项相加，如果和超过10，则进一（和下一项相加），超出10的部分存入数组中；如果和小于10，则将和存入数组中
  for (var i = a.length - 1; i >= 0; i--) {
    let sum = a[i] + b[i] + addone
    if( sum >= 10) {
      addone = 1
      ret[i] = sum - 10
    } else {
      ret[i] = sum
      addone = 0
    }
  }
  // 最后a、b项和超出10，则进一(数组开头插入1)
  if (addone === 1) {
    ret.unshift(addone)
  }
  return ret
}


// console.log(addTwoNumbers({
//   val: 7,
//   next: { val: 2, next: { val: 4, next: { val: 3, next: null}}}}, {
//   val: 5,
//   next: { val: 5, next: { val: 6, next: { val: 4, next: null}}}}))

console.log(addTwoNumbers({
  val: 9,
  next: { val: 8, next: null}}, {
  val: 1,
  next: null}))