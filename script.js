function run(){
    let htmlCode = document.querySelector(".editor #html").value;
    let cssCode = "<style>" + document.querySelector(".editor #css").value + "</style>";
    let jsCode = document.querySelector(".editor #js").value;
    let output = document.querySelector(".editor #output");
    console.log(htmlCode, cssCode, jsCode, output);
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);
}
document.querySelector(".editor #html").addEventListener('keyup', run);
document.querySelector(".editor #css").addEventListener('keyup', run);
document.querySelector(".editor #js").addEventListener('keyup', run);

run();