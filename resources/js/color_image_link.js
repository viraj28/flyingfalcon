var btns = document.querySelectorAll(".changepic");
var detailpic = document.getElementById("detail_pic");
console.log(btns);

var el = 0;
[el].forEach.call(btns, function(el) {
  el.onclick = function() {
  	  console.log(el);
  	  console.log(el.children[0].src);	
  	  detailpic.src = el.children[0].src;
      
  }
})