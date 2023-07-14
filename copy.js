let newURL = document.getElementById("shorturl");
let copyBtn = document.getElementById('copy');

copyBtn.onclick = ()=>{

    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}