
const fordestopHTML = document.getElementById("fordestop__id")
console.log (fordestopHTML)

if (document.documentElement.clientWidth < 1440) {
    
    console.log ("hi")
    fordestopHTML.remove();
}

const fortabletHTML = document.getElementById("fortablet__id")
console.log (fortabletHTML)
if (document.documentElement.clientWidth >= 1400) {
    console.log ("hello")
    fortabletHTML.remove()
}