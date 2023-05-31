
function work(){
    let count = document.getElementById("numberOfCircle").value;
    if(count > 10){
        count = 10;
        document.getElementById("numberOfCircle").value = 10;
    }
    let red = document.getElementById("red_cir");
    red.innerHTML = "";
    const inp_1 = `<div style="height: 50px; width: 50px; background-color: red; margin: 5px; border-radius: 50%"></div>`;
    for(var i = 0;i<count;i++){
        red.innerHTML += inp_1;
    }
    let green = document.getElementById("green_cir");
    green.innerHTML = "";
    const inp_2= `<div style="height: 50px; width: 50px; background-color: green; margin: 5px; border-radius: 50%"></div>`;
    for(var i = 0;i<count;i++){
        green.innerHTML += inp_2;
    }
    let blue = document.getElementById("blue_cir");
    blue.innerHTML = "";
    const inp_3 = `<div style="height: 50px; width: 50px; background-color: blue; margin: 5px; border-radius: 50%"></div>`;
    for(var i = 0;i<count;i++){
        blue.innerHTML += inp_3;
    }
    let btn1 = document.getElementById("btn1");
    btn1.classList.remove("btn1");
    btn1.classList.add("btn2");
    let btn2 = document.getElementById("btn2");
    btn2.classList.remove("btn1");
    btn2.classList.add("btn2");
}
function start(){
    let x = document.getElementById("red").value;
    let y = document.getElementById("green").value;
    let z = document.getElementById("blue").value;
    setTimeout(() => {
        document.getElementById("red_cir").style.display = "none";
    }, x*1000);
    setTimeout(() => {
        document.getElementById("green_cir").style.display = "none";
    }, y*1000);
    setTimeout(() => {
        document.getElementById("blue_cir").style.display = "none";
    }, z*1000);
}
function reset(){
    let red = document.getElementById("red_cir");
    red.innerHTML = "";
    red.style.display = "flex";
    let green = document.getElementById("green_cir");
    green.innerHTML = "";
    green.style.display = "flex";
    let blue = document.getElementById("blue_cir");
    blue.innerHTML = "";
    blue.style.display = "flex";
    let btn1 = document.getElementById("btn1");
    btn1.classList.remove("btn2");
    btn1.classList.add("btn1");
    let btn2 = document.getElementById("btn2");
    btn2.classList.remove("btn2");
    btn2.classList.add("btn1");
}