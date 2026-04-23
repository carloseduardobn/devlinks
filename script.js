function toggleMode(){
  const html = document.body
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')    
  }

  //html.classList.toggle('ligth') também pode ser usado, ele faz o comando direto
}