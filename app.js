window.addEventListener('keydown', function(e){
  if(e.code == 'Enter'){
  AdicionarItem(document.querySelector('#input').value)
  }else{
    return
  }
})
function AdicionarItem(titulo){
  if(titulo == ''){
    window.alert('Impossível cadastrar tarefas vazias !!!')
  }else{
  var item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `
    <h1 id="titulo">${titulo}</h1>
    <span id="close-btn">X</span>` 
  document.querySelector('.list').appendChild(item)
  }

  RemoverTarefa()
  MarcarTarefa()

  document.querySelector('#input').value = ''
}
function MarcarTarefa(){
  var title = document.querySelectorAll('h1');
  title.forEach(tit => {
  tit.onclick = function(){
    tit.classList.toggle('finish')
  }
})
}
function RemoverTarefa(){
  const closeButtons = document.querySelectorAll('#close-btn');
  closeButtons.forEach(button => {
  button.addEventListener('click', function(){
    console.log(button.parentElement.remove())
  })
})
}

