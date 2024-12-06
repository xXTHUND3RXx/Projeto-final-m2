import urgencyNumbers from"../js/telefones.js"

const displayInfo = document.getElementById("display")



function numberByState(state){
  const search = urgencyNumbers.find(estado => estado.estado ==state)
  if(search){
    return search
  }
}


function displayer(obj){

  
  displayInfo.innerHTML = 
  `
  
    <p>${obj.estado}</p>
    <p>${obj.bombeiros}</p>
    <p>${obj.defesaCivil}</p>
    <p>${obj.meioAmbiente}</p>
  
    
  `
}

window.onload = function(){
  const selectElement = document.getElementById('estado');
  const nomesEstados = urgencyNumbers.map(estado => estado.estado);
 
  nomesEstados.forEach(nomeEstado =>{
    const option = document.createElement('option');
    option.value = nomeEstado;
    option.textContent = nomeEstado
    selectElement.appendChild(option);
  })

  selectElement.addEventListener('change',event =>{
    const selectedValue = event.target.value;
    displayer(numberByState(selectedValue))
    
  })
}

