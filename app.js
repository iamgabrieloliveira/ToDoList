

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

  const titles = document.querySelectorAll('#titulo');
  titles.forEach(title => {
  title.addEventListener('click', function(){
    if(title.classList.contains('finish')){
      title.classList.remove('finish')
    }else{
      title.classList.add('finish')
    }
  })
})

const closeButtons = document.querySelectorAll('#close-btn');
closeButtons.forEach(button => {
  button.addEventListener('click', function(){
    console.log(button.parentElement.remove())
  })
})


document.querySelector('#input').value = ''

}
