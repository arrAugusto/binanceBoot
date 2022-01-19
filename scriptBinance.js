var acumulador = 0 * 1;
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
    var myFTM = myFTM[0] * 1;

    var viewPrice = document.querySelector(".contractPrice");
    var price = viewPrice.textContent * 1;

    var saldoMoney = myUSDT[0] * 1;
    var monedas = parseInt(saldoMoney / price);
    var listGrid = document.querySelector(".list-grid");

    if (saldoMoney > 10 && saldoMoney >= price && monedas > 1) {
        //contractPrice
        //Comprando monedas
        var monedaCompra = price;
        var monedaCompra = parseFloat(monedaCompra).toFixed(4);
        document.getElementById("FormRow-BUY-price").value = monedaCompra;
        document.getElementById("FormRow-BUY-quantity").value = monedas;
        document.getElementById("orderformBuyBtn").click();
        acumultadorSaldo(monedas);
        var monedaSell = price + 0.003;
        var monedaSell = parseFloat(monedaSell).toFixed(4);
        localStorage.setItem('precioVenta', monedaSell);
        localStorage.setItem('monedasVenta', monedas);
        console.log("Comprando  *************  Monedas : "+monedas+" Price Buy : "+monedaCompra);

    }
    if (myFTM > 1) {
        //Vendiendo monedas
        var venta = localStorage.getItem('precioVenta');
        var moneda = localStorage.getItem('monedasVenta');
        document.getElementById("FormRow-SELL-price").value = venta
        document.getElementById("FormRow-SELL-quantity").value = moneda;
        document.getElementById("orderformSellBtn").click();
        console.log("Vendiendo  *************  Monedas : "+venta+" Price Sell : "+moneda);
    }

    tope++;
    if (tope >= 60) {
        if (myFTM > 1) {
            //Vendiendo monedas
            var venta = localStorage.getItem('precioVenta');
            var moneda = localStorage.getItem('monedasVenta');
            document.getElementById("FormRow-SELL-price").value = venta
            document.getElementById("FormRow-SELL-quantity").value = moneda;
            document.getElementById("orderformSellBtn").click();
            console.log("Vendiendo  *************  Monedas : "+venta+" Price Sell : "+moneda);
        }

        console.log("Ganancia Total Aprox >>>>>>>>>>>>  " + acumulador);
        clearInterval(intervalo);
    }
}

function intervalo() {
    intervalo = setInterval(SuperCore, 1000);
}

function acumultadorSaldo(monedas) {
    acumulador = acumulador + (monedas * 0.0002) * 1;
    parseFloat(acumulador).toFixed(4);
}


