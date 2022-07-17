


function CalculaSuma(num1,num2){
    return num1+num2;
}
function CalculaResta(num1,num2){
    return num1-num2;
}
function CalculaMultiplicacion(num1,num2){
    return num1*num2;
}
function CalculaDivision(num1,num2){
    return num1/num2;
}
    function Calcular(){
    txtN1 = document.getElementById("txtN1");
    txtN2 = document.getElementById("txtN2");
    txtSum = document.getElementById("txtSum");
    txtRes = document.getElementById("txtRes");
    txtMul = document.getElementById("txtMul");
    txtDiv = document.getElementById("txtDiv");
    if (txtN1.value == "") {
    alert("Ingresa el numero 1");
    txtN1.focus();
    } else if(txtN2.value) {
    alert("Ingrese el numero 2");
    txtN2.focus();
    } else{
        //declarando variables 
        var n1 = 0,
        n2 = 0,
        sum = 0
        res = 0,
        mul = 0,
        div = 0;
    //capturando valores
    n1 = parseFloat(txtN1.value)
    n2 = parseFloat(txtN2.value)
    //realizando operaciones
    sum = CalculaSuma(n1, n2);
    res = CalculaResta(n1, n2);
    mul = CalculaMultiplicacion(n1, n2);
    div = CalculaDivision(n1, n2);
    //mostrando resultados
    txtSum.value = sum;
    txtRes.value = Res;
    txtMul.value = mul;
    txtDiv.value = div;
    }
}
//creamos las funciones
function CalculaSueldoBasico(h,c){
    return h * c;
}
function CalculaBonificacion(s) {
    return s * 0.09;
}
function CalculaDescuento(s) {
    return s * 0.06;
}
function CalculaSueldoFinal(s, b, d) {
    return s + b - d;
}
function CalculaSueldo() {
    //declarando controles
    txtNh=document.getElementById("txtNh");
    txtCh=document.getElementById("txtCh");
    txtSb=document.getElementById("txtSb");
    txtBon=document.getElementById("txtBon");
    txtDes=document.getElementById("txtDes");
    txtSf=document.getElementById("txtSf");
    if(txtNh.value==""){
        alert("Ingresa el numero por hora");
        txtNh.focus();
    }else if(txtCh.value==""){
        alert("Ingresa el costo por hora");
        txtCh.focus();
    }else {
        //declarando variables
        var nh = 0,
        ch = 0,
        sb = 0,
        bon = 0,
        des= 0,
        sf= 0;
        //capturando valores
        nh = parseFloat(txtNh.value);
        ch = parseFloat(txtCh.value);
        //realizando operaciones
        sb = CalculaSueldoBasico(nh, ch);
        bon = CalculaBonificacion(sb);
        des = CalculaDescuento(sb);
        sf = CalculaSueldoFinal(sb, bon, des);
        //mostrando resultados
        txtSb.value = sb;
        txtBon.value = bon;
        txtDes.value = des;
        txtSf.value = sf;
    }
}

//funcion para el mensaje de la edad
function EvaluaEdad(e){
    var men="";
    if(e>=18){
        men="Eres mayor de edad";
    }else{
        men="Eres menor de edad";
    }
    return men;
}
function MostrarMensaje(){
    //declara los controles
    txtEdad=document.getElementById("txtEdad");
    txtMen=document.getElementById("txtMen");

    if(txtEdad.value==""){
        alert("Ingresa la edad:");
        txtEdad.focus();
    }else{
        var edad = 0,
            men = "";
        edad = parseInt(txtEdad.value);
        men =EvaluaEdad(edad);
        txtMen.valuea = men;
    }
}

//funcion para calcular la bonificacion
function CalcularBonificacion(c, s) {
    var b = 0;
    if (c == "a") {
        b = s * 0.03;
    } else if (c == "b") {
        b = s * 0.05;
    } else if (c == "c") {
        b = s * 0.07;
    } else if (c == "d") {
        b = s * 0.09;
    } else {
        b = 0;
    }
    return b;
}
function CalcularDescuento(s) {
    return s * 0.05;
}
function CalcularSueldoF(s, b, d) {
    return s + b - d;
}
function CalcularSueldoFinal() {
    //declarando los controles
    txtSb=document.getElementById("txtSb");
    rbA=document.getElementById("rbA");
    rbB=document.getElementById("rbB");
    rbC=document.getElementById("rbC");
    rbD=document.getElementById("rbD");
    txtBon=document.getElementById("txtBon");
    chkTar=document.getElementById("chkTar");
    txtDes=document.getElementById("txtDes");
    txtSf=document.getElementById("txtSf");
    if (txtSb.value == ""){
        alert("Ingrese el sueldo basico");
    }else if (
        rbA.checked==false && 
        rbB.checked==false &&
        rbC.checked==false && 
        rbD.checked==false
        ) {
        alert("Seleccione una categoria");
        rbA.focus();
    } else {
        var sb = 0, 
            bon=0, 
            des=0, 
            sf=0;
        sb = parseFloat(txtSb.value);
        if(rbA.checked == true) {
            bon = CalcularBonificacion("a", sb);
        } else if (rbB.checked == true) {
            bon = CalcularBonificacion("b", sb);
        } else if (rbC.checked == true) {
            bon = CalcularBonificacion("c", sb);
        } else if (rbD.checked == true) {
            bon = CalcularBonificacion("d", sb);
        } else {
            bon = 0;
        }
        if (chkTar.checked == true) {
            des = CalcularDescuento(sb);
        } else {
            des = 0;
        }
        sf = CalcularSueldoFinal(sb, bon, des);
        //mostrando resultados
        txtBon.value = bon;
        txtDes.value = des;
        txtSf.value = sf;
        }
    }

//funciones para calcular el sueldo de empleado
function CalcularBasicoEmpleado(n, c) {
    return n * c;
}
function CalculaBonificacionEmpleado(ct, s) {
    var b = 0;
    if (ct == "a") {
        b = s *0.03;
    } else if (ct == "b") {
        b = s *0.05;
    } else if (ct == "c" ) {
        b = s *0.07;
    } else if (ct == "d") {
        b = s *0.09;
    } else {
        b = 0;
    }
    return b;
}
function CalculaDescuentoEmpleado(s) {
    return s * 0.05;
}
function CalcularFinalEmpleado(s, b, d){
    return s + b - d;
}

function CalcularSueldoEmpleado(){
    txtNh = document.getElementById("txtNh");
    cboArea = document.getElementById("cboArea");
    txtCh = document.getElementById("txtCh");
    txtSb = document.getElementById("txtSb");
    rbA = document.getElementById("rbA");
    rbB = document.getElementById("rbB");
    rbC = document.getElementById("rbC");
    rbD = document.getElementById("rbD");
    txtBon = document.getElementById("txtBon");
    chkEst = document.getElementById("chkEst");
    txtDes = document.getElementById("txtDes");
    txtSf = document.getElementById("txtSf");
    if (txtNh.value == "") {
        alert("Ingrese el numero de horas");
        txtNh.focus();
    } else if (cboArea.selectedIndex==0) {
        alert("Seleccione un area");
        cboArea.focus();
    } else if ( 
        rbA.checked == false && 
        rbB.checked == false && 
        rbC.checked == false && 
        rbD.checked == false
        ) {
        alert("Seleccione una categoria");
        rbA.focus();
    } else{
        var nh = 0,
            ch = 0,
            sb = 0,
            bon = 0,
            des = 0,
            sf = 0,
        nh = parseFloat(txtNh.value);
        //ch = parseFloat(cboArea.value);
        var indice = cboArea.selectedIndex;
        switch (indice) {
            case 1:
                ch = 15;
                break;
            case 2:
                ch = 18;
                break;
            case 3:
                ch = 16;
                break;
            case 4:
                ch = 12;
                break;
            case 5:
                ch = 10;
                break;
            case 6:
                ch = 13;
                break;
            default:
                ch = 0;
                break
        }
        sb=CalcularBasicoEmpleado(nh,ch);
        if(rbA.checked==true) {
            bon = CalcularBonificacionEmpleado("a", sb); 
        } else if (rbB.checked == true) {
            bon = CalcularBonificacionEmpleado("b", sb); 
        } else if (rbC.checked == true) {
            bon = CalcularBonificacionEmpleado("c", sb);
        } else if (rbD.checked == true) {
            bon = CalcularBonificacionEmpleado("d", sb); 
        } else { 
            bon = 0;
        }
        if (chkTar.checked == true) { 
            des = CalcularDescuentoEmpleado(sb);
        } else {
            des = 0;
        }
        sf = CalcularFinalEmpleado(sb, bon, des);
        txtCh.value = ch;
        txtSb.value = sb;
        txtBon.value = bon;
        txtDes.value = des;
        txtSf.value = sf;
    }
}
