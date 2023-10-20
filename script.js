const info = document.getElementById('info')

function doin(url){
    info.style.display = ''
    info.style.backgroundImage = `url('${url}')`
}

window.addEventListener('keydown', function(event){
    if(event.key=='Escape'){
        info.style.display = 'none'
    }
})