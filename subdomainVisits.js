/*
* @Author: Administrator
* @Date:   2018-05-03 16:40:24
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-04 10:31:45
*/
/*
一个网站域名，如"discuss.leetcode.com"，包含了多个子域名。作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，最低的一级为"discuss.leetcode.com"。当我们访问域名"discuss.leetcode.com"时，也同时访问了其父域名"leetcode.com"以及顶级域名 "com"。

给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如："9001 discuss.leetcode.com"。

接下来会给出一组访问次数和域名组合的列表cpdomains 。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。

示例 1:
输入: 
["9001 discuss.leetcode.com"]
输出: 
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
说明: 
例子中仅包含一个网站域名："discuss.leetcode.com"。按照前文假设，子域名"leetcode.com"和"com"都会被访问，所以它们都被访问了9001次。

示例 2
输入: 
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
输出: 
["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
说明: 
按照假设，会访问"google.mail.com" 900次，"yahoo.com" 50次，"intel.mail.com" 1次，"wiki.org" 5次。
而对于父域名，会访问"mail.com" 900+1 = 901次，"com" 900 + 50 + 1 = 951次，和 "org" 5 次。
 */

var subdomainVisits = function (cpdomains) {
  let domains = {}
  let arr = []
  for (var i = 0; i < cpdomains.length; i++) {
    let item = cpdomains[i].split(/\s/)
    item[0] = Number(item[0])
    domains[item[1]] = sumVisits(domains, item[1], item[0])
    let domainsItems = item[1].split('.')
    if (domainsItems.length === 3) {
      domains[`${domainsItems[1]}.${domainsItems[2]}`] = sumVisits(domains, `${domainsItems[1]}.${domainsItems[2]}`, item[0])
      domains[domainsItems[2]] = sumVisits(domains, domainsItems[2], item[0])
    } else if (domainsItems.length === 2) {
      domains[domainsItems[1]] = sumVisits(domains, domainsItems[1], item[0])
    }
  }
  for (let key in domains) {
    arr.push(`${domains[key]} ${key}`)
  }
  return arr
}
var sumVisits = function(domains, key, num) {
  return domains[key] === undefined ? num : domains[key] + num
}
console.log(subdomainVisits(["900 com"]))