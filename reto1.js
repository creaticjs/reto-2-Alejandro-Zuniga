function calcularEjercicio1() {
    var n1 = document.getElementById("txt1R1").value;
    var n2 = document.getElementById("txt2R1").value;
    var n3 = document.getElementById("txt3R1").value;
    var n4 = document.getElementById("txt4R1").value;
    var resultado = document.getElementById("resultadoR1");
    if (n1 === "" || n2 === "" || n3 === "" || n4 === "") {
        alert("Todos la notas son obligatorias");
    } else {
        var valores = calularMediaYNota(n1, n2, n3, n4);
        resultado.innerHTML = valores.nota + " (" + valores.resultado + ")";
    }
}

function calularMediaYNota(n1, n2, n3, n4) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    n4 = parseFloat(n4);
    var resultado = (n1 + n2 + n3 + n4) / 4;
    var nota = "";


    if (resultado >= 90 && resultado <= 100) nota = "A";
    else if (resultado >= 80 && resultado <= 89) nota = "B";
    else if (resultado >= 70 && resultado <= 79) nota = "C";
    else if (resultado >= 60 && resultado <= 69) nota = "D";
    else if (resultado >= 0 && resultado <= 59) nota = "E";
    else nota = "Notas inválidas";

    return { nota: nota, resultado: resultado };
}

function validarValoresVacios(array) {
    var validacion = array.find(function (item) {
        return item === "";
    });
    if (validacion != "") return true;
    else {
        alert("Faltan valores");
        return false;
    }
}

function calcularFuerzaGravitacional() {
    var m1 = document.getElementById("txtm1R2").value;
    var m2 = document.getElementById("txtm2R2").value;
    var d = document.getElementById("txtm3R2").value;
    var resultado = document.getElementById("resultado");
    var g = 0.00006673;
    if (validarValoresVacios([m1, m2, d])) {
        resultado.innerHTML = (g * m1 * m2) / Math.pow(d, 2) + "g.cm/seg^2";
    }
}

function calcularEnergia() {
    var m = document.getElementById("txtm1R2").value;
    var resultado = document.getElementById("resultado");
    var c = 2.997925;
    c = c * Math.pow(10, 10);
    if (validarValoresVacios([m])) {
        resultado.innerHTML = parseFloat(m) * Math.pow(c, 2) + " ergios";
    }
}

function calcularHipotenusa() {
    var l1 = document.getElementById("txtLado1").value;
    var l2 = document.getElementById("txtLado2").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([l1, l2])) {
        resultado.innerHTML = ajustarDecimales(Math.sqrt(Math.pow(l1, 2) + Math.pow(l2, 2)));
    }
}

function ajustarDecimales(number) {
    return number.toFixed(2);
}

function calcularAreaTriangulo() {
    var l1 = document.getElementById("txtLado1").value;
    var l2 = document.getElementById("txtLado2").value;
    var l3 = document.getElementById("txtLado3").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([l1, l2, l3])) {
        l1 = parseFloat(l1);
        l2 = parseFloat(l2);
        l3 = parseFloat(l3);
        var p = (l1 + l2 + l3) / 2;
        resultado.innerHTML = ajustarDecimales(Math.sqrt(
            (p * (p - l1)) *
            (p - l2) *
            (p - l3)
        ));
    }
}

function calcularHora() {
    var hora = document.getElementById("txtHora").value;
    var resultado = document.getElementById("resultado");

    if (validarValoresVacios([hora]) && validarTamanioHora(hora)) {
        var hrs = hora.substr(0, 2);
        var minutes = hora.substr(3, 5);
        if (validarHora(hrs, minutes)) {
            if (hrs > 12) {
                resultado.innerHTML = (hrs - 12) + ":" + minutes + " PM ";
            } else {
                resultado.innerHTML = hrs + ":" + minutes + " AM ";
            }
        }
    }
}

function validarTamanioHora(hora) {
    if (hora.length === 5) {
        return true;
    } else {
        alert("La hora tiene demasiados dígitos");
        return false;
    }
}

function validarHora(hora, minutos) {
    if (hora >= 0 && hora < 24 && minutos >= 0 && minutos < 59) {
        return true;
    } else {
        alert("Hora incorrecta");
        return false;
    }
}

function calcularFechaNumeros() {
    var fecha = document.getElementById("txtFecha").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([fecha])) {
        var fechaAjustada = reemplazarMesPorNumero(fecha);
        fechaAjustada = fechaAjustada.replace(/[^\d]/, ' ');
        resultado.innerHTML = fechaAjustada;
    }
}

function reemplazarMesPorNumero(fecha) {
    fecha = fecha.toLowerCase();
    var meses = [{ mes: "enero", valor: 1 }, { mes: "febrero", valor: 2 }, { mes: "marzo", valor: 3 }, { mes: "abril", valor: 4 }, { mes: "mayo", valor: 5 }, { mes: "junio", valor: 6 }, { mes: "julio", valor: 7 }, { mes: "agosto", valor: 8 }, { mes: "septiembre", valor: 9 }, { mes: "octubre", valor: 10 }, { mes: "noviembre", valor: 11 }, { mes: "diciembre", valor: 12 }];
    meses.forEach(function (mes) {
        fecha = fecha.replace(mes.mes, mes.valor + " ");
    });
    return fecha;
}

function calcularDigitos() {
    var numeroDigitos = document.getElementById("txtNumeroEnLetras").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([numeroDigitos])) {
        resultado.innerHTML = parsearLetraANumeros(numeroDigitos);
    }
}

function parsearLetraANumeros(numero) {
    numero = numero.split(" ").join("");
    var numerosIniciales = [{ letra: "uno", valor: 1 }, { letra: "dos", valor: 2 }, { letra: "tres", valor: 3 }, , { letra: "cuatro", valor: 4 }, { letra: "cinco", valor: 5 }, { letra: "seis", valor: 6 }, { letra: "siete", valor: 7 }, { letra: "ocho", valor: 8 }, { letra: "nueve", valor: 9 }];

    var numerosDosCifra = [{ letra: "diez", valor: 10 }, { letra: "once", valor: 11 }, { letra: "doce", valor: 12 }, { letra: "trece", valor: 13 }, { letra: "catorce", valor: 14 }, { letra: "quince", valor: 15 },
    { letra: "dieci", valor: 1 }, { letra: "veinte", valor: 20 }, { letra: "veinti", valor: 2 }, { letra: "treintay", valor: 3 }, { letra: "treinta", valor: 30 }, { letra: "cuarentay", valor: 4 }, { letra: "cuarenta", valor: 40 }, { letra: "cincuentay", valor: 5 }, { letra: "cincuenta", valor: 50 }, { letra: "sesentay", valor: 6 },
    { letra: "sesenta", valor: 60 }, { letra: "setentay", valor: 7 }, { letra: "setenta", valor: 70 },
    { letra: "ochentay", valor: 8 }, { letra: "ochenta", valor: 80 }, { letra: "noventay", valor: 9 },
    { letra: "noventa", valor: 90 }];

    var res = reemplazarLetraANumero(numerosDosCifra, numero);
    debugger;
    res = reemplazarNumeroTresCifras(numerosIniciales, res);
    res = reemplazarLetraANumero(numerosIniciales, res);

    //  res = reeamplazarNumeroTresCifras(res);
    return res;
}
//Terminar de hacer
function reemplazarNumeroTresCifras(numero, numeroLetras) {
    var tresCifrasSinDecenas = [{ letra: "ciento", valor: 10, valor2: 100, }, { letra: "doscientos", valor: 20, valor2: 200 }, { letra: "trescientos", valor: 30, valor2: 300 }, { letra: "cuatrocientos", valor: 40, valor2: 400 }, { letra: "quinientos", valor: 50, valor2: 500 }, { letra: "seiscientos", valor: 60, valor2: 600 }, { letra: "ochocientos", valor: 80, valor2: 800 }, { letra: "novecientos", valor: 90, valor2: 900 }];
    var arrayCompuesto = [];
    tresCifrasSinDecenas.forEach(function (centena) {
        numero.forEach(function (unidad) {
            arrayCompuesto.push({ letra: centena.letra + unidad.letra, valor: centena.valor + "" + unidad.valor });
        });
    });
    numeroLetras = reemplazarLetraANumero(arrayCompuesto, numeroLetras);
    var tresCifrasAjustado = tresCifrasSinDecenas.map(function (i) {
        i.valor = i.valor / 10;
        return i;
    });
    return reemplazarLetraANumero(tresCifrasAjustado, numeroLetras);
}
function reemplazarLetraANumero(array, numeroLetra) {
    array.forEach(function (item) {
        numeroLetra = numeroLetra.replace(item.letra, item.valor);
    });
    return numeroLetra;
}

function calcularDatosCirculo() {
    var radio = document.getElementById("txtRadio").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([radio])) {
        var area = Math.PI * Math.pow(radio, 2);
        var diametro = 2 * Math.PI * radio;
        resultado.innerHTML = "Area: " + area + ". Diametro: " + diametro;
    }
}

function calcularNumeroRomano() {
    var numero = document.getElementById("txtNumero").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([numero])) {
        resultado.innerHTML = pasarRomano(numero)
    }
}

function pasarRomano(num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function calcularProximidad() {
    var n1 = document.getElementById("txtNumero1").value;
    var n2 = document.getElementById("txtNumero2").value;
    var n3 = document.getElementById("txtNumero3").value;
    var n4 = document.getElementById("txtNumero4").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([n1, n2, n3, n4])) {
        if (parseFloat(n3 + n4) > 50) {
            n2 = evaluarCentenaProximidad(n2);
            n1 = (n2 === 0) ? parseFloat(n1 + 1) : n1;
        }
        n3 = 0;
        n4 = 0;
        resultado.innerHTML = n1 + n2 + n3 + n4;
    }
}

function evaluarCentenaProximidad(n2) {
    if (n2 < 9) {
        return parseFloat(n2) + 1;
    } else {
        return 0;
    }
}

function calcularEdad() {
    var fecha = document.getElementById("txtFecha").value;
    var resultado = document.getElementById("resultado");
    var fechaActual = new Date();
    if (validarValoresVacios([fecha])) {
        var fechaPersona = new Date(fecha);
        fechaPersona.setDate(fechaPersona.getDate() + 1);
        var tiempoDiferencia = Math.abs(fechaActual.getTime() - fechaPersona.getTime());
        var diasDiferencia = Math.ceil(tiempoDiferencia / (1000 * 3600 * 24));
        if (diasDiferencia < 365) {
            resultado.innerHTML = Math.trunc(diasDiferencia / 30) + " mes(es)";
        } else {
            resultado.innerHTML = Math.trunc(diasDiferencia / 365) + " años."
        }
    }
}

function calcularCoeficiente() {
    var a = document.getElementById("txtC1").value;
    var b = document.getElementById("txtC2").value;
    var c = document.getElementById("txtC3").value;
    var d = document.getElementById("txtC4").value;
    var e = document.getElementById("txtC5").value;
    var f = document.getElementById("txtC6").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([a, b, c, d, e, f])) {
        var x = ((c * e) - (b * f)) / ((a * e) - (b * d));
        var y = ((a * f) - (c * d)) / ((a * e) - (b * d));
        resultado.innerHTML = "X : " + ajustarDecimales(x) + ". Y:" + ajustarDecimales(y);
    }
}

function calcularSigno() {
    var a = document.getElementById("txtNumero").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([a])) {
        a = parseFloat(a);
        var res = '';
        if (a === 0) res = 'Igual a 0';
        else res = a > 0 ? 'Positivo' : 'Negativo';
        resultado.innerHTML = res;
    }
}

function calcularBiciesto() {
    var a = document.getElementById("txtAnio").value;
    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([a])) {
        a = parseFloat(a);
        var multiplo4 = a % 4 === 0;
        var multiplo100 = a % 100 === 0;
        var multiplo400 = a % 400 === 0;
        var res = multiplo4 ? 'Biciesto' : 'No es biciesto';
        if (multiplo100 && !multiplo400) res = 'No es biciesto';
        resultado.innerHTML = res;
    }
}
function calcularDiasMes() {
    var mes = document.getElementById("txtMes").value;
    var anio = document.getElementById("txtAnio").value;

    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([mes, anio])) {
        if (mes <= 12) {
            var fecha = new Date(anio, mes, 0);
            resultado.innerHTML = fecha.getDate();
        } else {
            alert("Mes incorrecto");
        }
    }
}

function calcularEquivalentePesetas() {
    var pesetas = document.getElementById("txtPesetas").value;

    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([pesetas])) {
        var pesos = parseFloat(pesetas) * 21.16;
        var billetes = { cien: 0, cincuenta: 0, veinte: 0, diez: 0, cinco: 0, dos: 0, mil: 0 };
        var monedas = { quinientos: 0, doscientos: 0, cien: 0, cincuenta: 0 };
        if (pesos / 100000 >= 1) pesos = restarDinero(pesos, 100000, billetes, monedas);
        if(pesos / 50000 >=1) pesos = restarDinero(pesos, 50000, billetes, monedas);
        if(pesos / 20000 >=1) pesos = restarDinero(pesos, 20000, billetes, monedas);
        if(pesos / 10000 >=1) pesos = restarDinero(pesos, 10000, billetes, monedas);
        if(pesos / 5000 >=1) pesos = restarDinero(pesos, 5000, billetes, monedas);
        if(pesos / 2000 >=1) pesos = restarDinero(pesos, 2000, billetes, monedas);
        if(pesos / 1000 >=1) pesos = restarDinero(pesos, 1000, billetes, monedas);
        if(pesos / 500 >=1) pesos = restarDinero(pesos, 500, billetes, monedas);
        if(pesos / 200 >=1) pesos = restarDinero(pesos, 200, billetes, monedas);
        if(pesos / 100 >=1) pesos = restarDinero(pesos, 100, billetes, monedas);
        if(pesos / 50 >=1) pesos = restarDinero(pesos, 50, billetes, monedas);
        resultado.innerHTML = '<div>' +'Billetes: '+'Cien mil: '+billetes.cien
                            +', Cincuenta mil :'+billetes.cincuenta+', Veinte mil: '+ billetes.veinte
                            +', Diez mil :'+billetes.diez+' , Cinco mil: '+billetes.cinco
                            +', Dos mil :'+billetes.dos+' , mil: '+billetes.mil+'<br>'+
                            'Monedas: Quinientos: '+ monedas.quinientos+' , Doscientos :'+monedas.doscientos
                            +', cien: '+ monedas.cien+', ciencuenta: '+monedas.cincuenta + '</div>';
    }
}

function restarDinero(dinero, resto, billetes, monedas) {
    var numero = Math.trunc(dinero / resto);
    switch (resto) {
        case 100000:
            billetes.cien = numero;
            break;
        case 50000:
            billetes.cincuenta = numero;
            break;
        case 20000:
            billetes.veinte = numero;
            break;

        case 10000:
            billetes.diez = numero;
            break;
        case 5000:
            billetes.cinco = numero;
            break;
        case 2000:
            billetes.dos = numero;
            break;
        case 1000:
            billetes.mil = numero;
            break;
        case 500:
            monedas.quinientos = numero;
            break;
        case 200:
            monedas.doscientos = numero;
            break;
        case 100:
            monedas.cien = numero;
            break;
        case 50:
            monedas.cincuenta = numero;
            break;
    }
    return dinero % resto;
}

function calcularSalario(){
    var horas = document.getElementById("txtHoras").value;
    var tasa = document.getElementById("txtTasa").value;
    var resultado = document.getElementById("resultado");

    if(validarValoresVacios([horas, tasa])){
        var res = 0;
        horas= parseFloat(horas);
        tasa = parseFloat(tasa);
        if(horas < 38){
            res = horas * tasa;
        }else{
            res = (37*tasa)+((horas-37)*(tasa*1.5));
        }
        resultado.innerHTML = res;
    }
}
