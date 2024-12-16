import urgencyNumbers from"../js/telefones.js"

const displayInfo = document.getElementById("display")

function numberByState(state){
  const search = urgencyNumbers.find(region => region.estado == state)
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

function displayfactory(){
  displayInfo.innerHTML = 
  `
   <p>Veja uma lista de telefones úteis para cada estado!</p>

  `
  
    
}

window.onload = function(){

  const selectElement = document.getElementById('state-select');

  const namesStates = urgencyNumbers.map(region => region.estado);

  namesStates.forEach(namesStates =>{

    const option = document.createElement('option');
    option.value = namesStates;
    option.textContent = namesStates

    selectElement.appendChild(option);
  })


  selectElement.addEventListener('change',event =>{
    const selectedValue = event.target.value;
    if(selectedValue == "none"){
      displayfactory()
    }else{
      displayer(numberByState(selectedValue))
    }
    
   
    
  })
}

