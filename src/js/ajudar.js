import urgencyNumbers from"../js/telefones.js"

const displayInfo = document.getElementById("display")


//procurar na lista telefonica com base no parametro
function numberByState(state){
  const search = urgencyNumbers.find(estado => estado.estado ==state)
  if(search){
    return search
  }
}

//altera o texto para o encontrado na lista
function displayer(obj){

  
  displayInfo.innerHTML = 
  `
  
    <p>${obj.estado}</p>
    <p>${obj.bombeiros}</p>
    <p>${obj.defesaCivil}</p>
    <p>${obj.meioAmbiente}</p>
  
    
  `
}

function displayfactory(){
  displayInfo.innerHTML = 
  `
   <p>Veja uma lista de telefones úteis para cada estado!</p>

  `
  
    
}
//ao carregar a pagina
window.onload = function(){
  //id da caixa de selecao
  const selectElement = document.getElementById('state-select');
  //preenche o select automaticamente com todos os estados da lista
  const nomesEstados = urgencyNumbers.map(estado => estado.estado);
 
  //pra cada estado 
  nomesEstados.forEach(nomeEstado =>{
    //cria, preenche
    const option = document.createElement('option');
    option.value = nomeEstado;
    option.textContent = nomeEstado
    //e adiciona
    selectElement.appendChild(option);
  })

  //qual foi selecionado
  selectElement.addEventListener('change',event =>{
    const selectedValue = event.target.value;
    if(selectedValue == "none"){
      displayfactory()
    }else{
      displayer(numberByState(selectedValue))
    }
    
   
    
  })
}

