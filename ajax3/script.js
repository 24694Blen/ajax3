

function ajax() {
  // alert("hoi");
  // return;
  let question = document.getElementById('question');
  let str = question.value;
  
  console.log(str);//debug
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      txtHint.innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET","getdata.php?q="+str,true);
  xmlhttp.send();
}
function clear(){

}
function setUp(){
  let input = document.getElementById('question');
  input.addEventListener('keyup', ajax);
}
window.onload= setUp;
