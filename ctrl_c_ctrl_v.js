//CTRL+C E CTRL+V
function addLink(e) {
    var nAgt = navigator.userAgent;
    var nameOffset, verOffset, ix;
    if ((verOffset = nAgt.indexOf("Firefox")) != -1) {

    } else {
        e.preventDefault();
        var url = window.location.href.toString();
        var copyright = ' - Leia mais em ' + window.location.href.toString();
        var novoTexto = copytext = window.getSelection() + copyright;
        (window.clipboardData ? window : event).clipboardData.setData('Text', copytext);
    }
}
window.addEventListener('copy', addLink);