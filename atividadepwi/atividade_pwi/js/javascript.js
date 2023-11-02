
function openMenu(menuName) {
  document.getElementById(menuName).style.display = "block"

  var conteudos = document.getElementsByClassName("conteudo")
  var conteudosArray = Array.from(conteudos);
  
  conteudosArray.forEach(element => {
      if (element.id != menuName) {
          document.getElementById(element.id).style.display = "none"
      }
  });
}


