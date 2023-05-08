const pokemon = ()=>{
    const $xhr = document.getElementById('xhr')
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', e =>{
        if(xhr.readyState !== 4)return;
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        $xhr.innerHTML = `<li><img src='${data.sprites.front_default}' ></li>`
    })

    xhr.open('GET','https://pokeapi.co/api/v2/pokemon/pikachu');
    xhr.send();
}
pokemon();