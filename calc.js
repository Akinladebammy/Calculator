const btn = document.getElementsByTagName('button');
const screen = document.getElementById('screen');

for (const item of btn){
    item.addEventListener('click', function(e){
    bText = e.target.innerText
    if (bText === 'AC'){
        screen.value = '';
    }

    else if (bText === '='){
       try{
            screen.value = eval(screen.value);
        }
        
        catch(err){
            alert('invalid input')
        }
    }

    else if (bText === 'DEL'){
        screen.value = screen.value.slice(0, -1)
    }

    
    else {
        screen.value += bText
    }
})
    
}

