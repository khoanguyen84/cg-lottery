var win = [
    {
        element: ".kk-1",
        name: "Giải khuyến khích 1"
    },
    {
        element: ".kk-2",
        name: "Giải khuyến khích 2"
    },
    {
        element: ".kk-3",
        name: "Giải khuyến khích 3"
    },
    {
        element: ".gb",
        name: "Giải ba"
    },
    {
        element: ".gn",
        name: "Giải nhì"
    },
    {
        element: ".gdb",
        name: "Giải đặc biệt"
    }];

var slot = 0;
var preSlot = 0;
var delay = 120;
function runLottery() {
    process(document.querySelector(win[slot].element, slot));
    preSlot = slot;
    slot++;
    initReRunLotery(preSlot);
}
function reRun() {
    reProcess(document.querySelector(win[preSlot].element));
}

function process(element) {
    var timesRun = 0;
    var interval = setInterval(() => {
        element.innerText = generateNumber();
        timesRun += 1;
        if (timesRun === delay) {
            clearInterval(interval);
            initRunLotery(slot);
        }
    }, 50)
}

function reProcess(element) {
    var timesRun = 0;
    var interval = setInterval(() => {
        element.innerText = generateNumber();
        timesRun += 1;
        if (timesRun === delay) {
            clearInterval(interval);
            initReRunLotery(preSlot);
        }
    }, 50)
}

function generateNumber() {
    let min = 0;
    let max = 200;
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    if (number.toString().length == 1) {
        return `00${number}`;
    }
    if (number.toString().length == 2) {
        return `0${number}`
    }
    return number.toString();
}

function initRunLotery(slot) {
    if(slot == win.length){
        document.querySelector('.run').classList.add('d-none');
        document.querySelector('.init').classList.remove('d-none');
    }
    else{
        document.querySelector('.run').innerHTML = `${win[slot].name}`;
    }
}
function initReRunLotery(preSlot) {
    console.log('preSlot', preSlot);
    document.querySelector('.re-run').innerHTML = `Quay lại ${win[preSlot].name}`;
}


function initRun(){
    if(window.location.href.split("/").pop() == "cg-lottery"){
        window.location.href = "/cg-lottery"
    }
    else{
        window.location.href = "/"
    }
}

(() => {
    initRunLotery(0);
})()