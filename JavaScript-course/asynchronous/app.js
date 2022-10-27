function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src;
    script.onload = function() {
        console.log('Script loaded');
        callback(null, src);
    }
    script.onerror = ()=>{
        console.log('Nothing is loaded');
        callback(new Error("Man!! why  isn't it working"), src);
    }
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", say);

function say(error, src){
    if(error)
    console.log(error+' '+src);
    console.log(src);
}
