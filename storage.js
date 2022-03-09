//local storage kono ekta add korno 
localStorage.setItem('userId',87952214);

// abar dynamic vabeo korte pari 
const addTolocalStorage=()=>{
    const idInput =document.getElementById('storage-id');
    const id=idInput.value ;
    const valueInput =document.getElementById('storage-value');
    const value=valueInput.value ;
//
localStorage.setItem(id,value);
idInput.value='';
valueInput.value='';
}