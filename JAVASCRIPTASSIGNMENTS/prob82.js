

let liChild = document.querySelectorAll('li')
for(let li of liChild){
  let title = li.firstChild.data;
  title = title.trim();
  let count = li.getElementsByTagName('li').length;
  alert(title +':' + count);
}
