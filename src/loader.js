// Static JS loader embedded in site for added functionality
let pageLoaded = false;
setTimeout(() => {
    if(!pageLoaded) document.getElementById('loader-text').innerHTML = "Looks like you might have a slow internet connection?";
},10000);