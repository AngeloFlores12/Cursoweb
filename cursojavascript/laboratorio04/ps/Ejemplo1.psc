Algoritmo Ejemplo1
	//definiendo variable
	definir edad como entero;
	definir men como texto;
	//inicializando variables
	edad=0; men="";
	//capturando valores
	escribir "Ingresa tu edad:";
    leer edad;
	//condicion
	si (edad>=18) Entonces
		men="Eres mayor de edad";
	Sino;
		men="Eres menor de edad";
	FinSi
	//mostrando resultados
	escribir "La edad es : ",edad;
	escribir men;
FinAlgoritmo
