function add(){
   
    const counter = document.getElementById("number");
    const value = Number(counter.innerHTML);
    counter.innerHTML = String(value + 1);
}

function reset(){
   
    const counter = document.getElementById("number");
    counter.innerHTML = "0";
}

function decrease(){
    
    const counter = document.getElementById("number");
    const value = Number(counter.innerHTML);

    if (value > 0) {
        counter.innerHTML = String(value - 1);
    } else {
        counter.innerHTML = "0";
    }
};

export {add, reset, decrease}
