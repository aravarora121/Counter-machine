decrease = document.getElementById("but-1").onclick = function(){
    count--
    counter.textContent = count
}
increase = document.getElementById("but-3").onclick = function(){
    count++
    counter.textContent = count
}
reset = document.getElementById("but-2").onclick = function(){
    count = 0
    counter.textContent = count
}

counter = document.getElementById("counter")

count = 0