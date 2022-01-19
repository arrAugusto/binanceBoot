var acumulador = 0;
var tope = 0;
var intervalo;
var compraCirrando = 0;
function SuperCore() {

    var data = document.querySelectorAll(".proInnerFormWrap");
    var data = data[0].outerText.split("\n");
    var myUSDT = data[1];
    var myUSDT = myUSDT.split(" ");
    var myFTM = data[10];
    var myFTM = myFTM.split(" ");

    var viewPrice = document.querySelector(".contractPrice");
    var price = viewPrice.textContent * 1;

    var saldoMoney = myUSDT[0];
    if (saldoMoney > 0 && saldoMoney >= price) {
        console.log("Comprando..................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        //contractPrice
        var monedas = parseInt(saldoMoney / price);
        //Comprando monedas
        var monedaCompra = price - 0.0001;
        var monedaCompra = parseFloat(monedaCompra).toFixed(4);
        document.getElementById("FormRow-BUY-price").value = monedaCompra;
        document.getElementById("FormRow-BUY-quantity").value = monedas;
        document.getElementById("orderformBuyBtn").click();
        acumultadorSaldo(monedas);
        var monedaSell = price + 0.0001;
        var monedaSell = parseFloat(monedaSell).toFixed(4);
    }

    if (myFTM > 0) {
        console.log("Vendiendo..................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        var listGrid = document.querySelector(".list-grid");
        //Vendiendo monedas
        document.getElementById("FormRow-SELL-price").value = monedaSell
        document.getElementById("FormRow-SELL-quantity").value = monedas;
        document.getElementById("orderformSellBtn").click();
    }

    tope++;
    if (tope >= 100) {
        parseFloat(acumulador).toFixed(4);
        clearInterval(intervalo);
    }
}

function intervalo() {
    intervalo = setInterval(SuperCore, 1000);
}

function acumultadorSaldo(monedas) {
    var ganancia = monedas * 0.0002;
    acumulador = acumulador + ganancia;
    parseFloat(acumulador).toFixed(4);
}


