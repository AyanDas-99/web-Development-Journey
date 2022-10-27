function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src;
    script.onload = function() {
        console.log('Script loaded');
        callback();
    }
    script.onerror = ()=>{
        alert('Nothing is loaded');
    }
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", say);

function say(){
    alert('Everything is loaded');
}
