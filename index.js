function getFirstSelector(selector){
  var element
  element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  var element
  element = document.getElementById('nested')
  return element
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  const Boo = document.getElementById('grand-node').querySelector('div div div div')
  return Boo
}
