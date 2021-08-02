
main();

function main () {
    animacion();
    crearTitulo1();
    subtitulo1();
    crearSeguro();
    crearFormularioDatosPersonales();
    crearFormularioDatosVehiculo();
    botonCotizar();   
}

function animacion () {

    window.addEventListener('load', function () {

$('.contenedor__titulo').fadeOut( 2000 ).fadeIn(2000);

    });
    
};



function crearTitulo1 () {
    $('body').append("<h1 class='título1'>Cotizá el seguro de tu auto en 3 simples pasos</h1>");
    
}

function subtitulo1 () {
    $('body').append("<div class= 'contenedorSubtitulo'><h2 class='títuloSecundario' id='subtitulo1'>Elegí tu cobertura</h2></div>");
}

let listaSeguros = [];

function crearSeguro() {    

    $('body').append("<div class = 'contenedor__seguros' id = 'contenedor__seguros'></div>");
    $('body').append("<div class = 'contenedor__seguros__checkbox' id = 'contenedor__seguros__checkbox'></div>");

    let seguros = [            //tipos de seguros//

        { id:1, nombre: "Cobertura básica", cotizar: false },
        { id:2, nombre: "Cobertura intermedia", cotizar: false },
        { id:3, nombre: "Cobertura completa", cotizar: false },  
        
        ]

        for (const seguro of seguros) {     //contenedor HTML para cada tipo de seguro//
            console.log(seguro);

            $ ('#contenedor__seguros').append(`<div class = ' subcontenedor__seguros'> <h5 class = "subcontenedor__seguros__titulo">${seguro.nombre}</h5>
                                                    <div class = "subcontenedor__seguros__lista">
                                                        <ul id = "${seguro.id}">
                                                            <li class = "seguro__li">Responsabilidad civil</li>
                                                            <li class = "seguro__li">Incendio parcial</li>
                                                            <li class = "seguro__li">Seguro del conductor</li>
                                                            <li class = "seguro__li">Acarreo</li>
                                                        </ul>
                                                    </div>    
                                                        </div>` )
                                                        
           $('#contenedor__seguros__checkbox').append(`<div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${seguro.id}">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                ${seguro.nombre}
                                                </label>
                                            </div>`)

              
                                                                                                
        }

        $('#1').append(`<li class = "seguro__li__opcional">Incendio total</li>
                        <li class = "seguro__li__opcional">Robo, hurto total</li>
                        <li class = "seguro__li__opcional">Cristales, laterales y cerraduras</li>
                        <li class = "seguro__li__opcional">Parabrisas y luneta</li>
                        <li class = "seguro__li__opcional">Reposición de cubiertas</li>
                        <li class = "seguro__li__opcional">Daños por granizo</li>
                        <li class = "seguro__li__opcional">Accidente total</li>`)

        $('#2').append(`<li class = "seguro__li">Incendio total</li>
                        <li class = "seguro__li">Robo, hurto total</li>
                        <li class = "seguro__li">Cristales, laterales y cerraduras</li>
                        <li class = "seguro__li__opcional">Parabrisas y luneta</li>
                        <li class = "seguro__li__opcional">Reposición de cubiertas</li>
                        <li class = "seguro__li__opcional">Daños por granizo</li>
                        <li class = "seguro__li__opcional">Accidente total</li>`)

        $('#3').append(`<li class = "seguro__li">Incendio total</li>
                        <li class = "seguro__li">Robo, hurto total</li>
                        <li class = "seguro__li">Cristales, laterales y cerraduras</li>
                        <li class = "seguro__li">Parabrisas y luneta</li>
                        <li class = "seguro__li">Reposición de cubiertas</li>
                        <li class = "seguro__li">Daños por granizo</li>
                        <li class = "seguro__li">Accidente total</li>`)


        let inputsSeguros = $(".form-check-input");

        for (const seguro of inputsSeguros) {         //inputs para cada tipo de seguro// checkbox

            seguro.addEventListener('change', (evento) => {
            const coberturaElegida = evento.target;
            console.log(coberturaElegida.id);
            listaSeguros = seguros.find(seguroItem => seguroItem.id === parseInt(coberturaElegida.id));
            listaSeguros.cotizar = true;
            console.log(listaSeguros);
            const guardarSeguro = JSON.stringify(coberturaElegida.id);
            localStorage.setItem("Cotización", guardarSeguro);

            if (listaSeguros.cotizar = true) {

                $('#subtitulo2').show();
                $('#formulario1').show();
            }
            
        });

        
    }


    
}

function crearFormularioDatosPersonales () {

    $('body').append('<div class = "contenedor__form" id = "contenedorFormularios"></div>');

    $('#contenedorFormularios').append('<form method = "get" id = "formulario1" style="display:none"></form>');

    $('#formulario1').append('<h2 class="títuloSecundario" id="subtitulo2">Completá tus datos personales</h2>');

    let datoPersonal = ["Provincia", "Localidad", "Nombre", "Apellido", "Email", "Fecha de nacimiento"]
    
    for (const datosPersonales of datoPersonal) {
        $('#formulario1').append(`<div id = "contenedor-etiquetas-form1${datosPersonales}"><label class = "label__form1 label-required" id="label${datosPersonales}">${datosPersonales}</label>
                                  <input class = "input__form1" id = ${datosPersonales} required></input></div>`);

    }

        function provincia () {

            $('#Provincia').remove();

            const URLJSON = "datos.json";

            $('#labelProvincia').append('<select class = "input__form1" id = "Provincia"></select>');
            $('#Provincia').append(`<option>Seleccionar provincia</option>`);
            $('#Localidad').remove();
            $('#labelLocalidad').append('<select class = "input__form1" id = "Localidad"></select>');
            $('#Localidad').append(`<option>Seleccionar localidad</option>`);

            $.getJSON(URLJSON, function (respuesta, estado) {

                if(estado === "success"){
                  let misDatos = respuesta;
                  misDatos.sort(function(a,b) {
                    if (a.nombre < b.nombre) {
                        return -1;
                    }
                });
          
          
                for (const dato of misDatos) {
                  $("#Provincia").append(`<option value="${dato.nombre}" id= "${dato.id}">${dato.nombre}</option>`);
          
                }
               
          
             }

             $('#Provincia').change(() => {
          
                selection = document.getElementById("Provincia").value;
                console.log(selection); 
                idSelection = Number(document.getElementById("Provincia").selectedOptions[0].id);
                
                const URLGET = "https://apis.datos.gob.ar/georef/api/localidades?formato=json&max=5000"
            
                $.get(URLGET, function (respuesta, estado) {
                  if(estado === "success"){
                    console.log(estado);
                    console.log(respuesta)
                    
                    console.log(idSelection);
            
                    let localidadesSet = new Set();
            
                    for (let element of respuesta.localidades){
            
                      if (selection === element.provincia.nombre) {
                        
                        localidadesSet.add(element.localidad_censal.nombre);
              
                      }
                        
                    }
            
                    let localidadesArray = [];
            
                    for (let element of localidadesSet) {
            
                      localidadesArray.push(element);
            
                      localidadesArray.sort(function(a,b){
            
                        if (a < b) {
            
                          return -1;
            
                        }
            
                      })             
            
                    }
                
            
                    for (element of localidadesArray) {
            
                      $('#Localidad').append(`<option>${element}</option>`);
            
            
                    }
            
                      
                  }
                    
                
               });
            
            
              })
          
          });

        }

        
    let fechaDeNacimiento = document.getElementById("Fecha");
    fechaDeNacimiento.setAttribute("type","date");


    let emailUsuario = document.getElementById("Email");
    emailUsuario.setAttribute("type","email");

    let selectDatoPersonal = ["Género", "Estado-civil"]              //llama dos elementos de donde se desprenden selects para agregarles ID//

    for (const selectDatosPersonales of selectDatoPersonal) {
        $('#formulario1').append(`<label class = "label__form1">${selectDatosPersonales}</label>
                                   <select id = ${selectDatosPersonales}></select>`);
    }

    let opcionGenero = ["Por favor, elija una opción","Femenino", "Masculino", "Otro", "No informa"]   //opciones para género

    for (const opcionesGenero of opcionGenero) {

        $('#Género').append(`<option>${opcionesGenero}</option>`)
    }

    let opcionEcivil = ["Por favor, elija una opción", "Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a", "concubinato"]  //opciones para estado civil

    for (const opcionesEcivil of opcionEcivil) {

        $('#Estado-civil').append(`<option>${opcionesEcivil}</option>`)
    }

    $('#formulario1').append('<button id="botonSiguiente" class="btn btn-light">Siguiente</button>');

    provincia();


}


function crearFormularioDatosVehiculo () {

    $('#contenedorFormularios').append('<form method = get style = "display:none" id = "formulario2"></form>')

    $('#formulario2').append('<h2 class="títuloSecundario" id="subtitulo3">Completá los datos de tu vehículo</h2>');

    let datoAuto = ["Año", "Marca", "Modelo"];                    

    for (const datosAuto of datoAuto) {                                 //input y label por cada dato del vehículo//
        
        $('#formulario2').append(`<div><label class = "label__form">${datosAuto}</label>
                                  <input class = "input__form" id = ${datosAuto} required></input></div>`);
    }

    let añoAuto = document.getElementById("Año");
    añoAuto.setAttribute("type","number");


    let selectDatoAuto = ["Uso", "Combustible","Pago"]                   //llama tres elementos de donde se desprenden selects para agregarles ID//

    for (const selectDatosAutos of selectDatoAuto) {

        $('#formulario2').append(`<label class = "label__form">${selectDatosAutos}</label>
                                   <select id = ${selectDatosAutos}></select>`);
    }
                      

    let opcionUso = ["Por favor, elija una opción","Particular","Comercial"]

    for (const opcionesUsos of opcionUso) {

        $('#Uso').append(`<option class = "input__form">${opcionesUsos}</option>`)
    }
              
    let opcionCombustible = ["Por favor, elija una opción","Nafta","Gasoil","GNC"]

    for (const opcionesCombustibles of opcionCombustible) {
        
        $('#Combustible').append(`<option class = "input__form">${opcionesCombustibles}</option>`)
    }

    let opcionPago = ["Por favor, elija una opción","Transferencia bancaria","Tarjeta de débito/crédito","Efectivo"]

    for (const opcionesPagos of opcionPago) {

        $('#Pago').append(`<option class = "input__form">${opcionesPagos}</option>`)
    }

    $('#formulario2').append('<button id="botonCotizar" class="btn btn-light">Cotizar</button>')

}
      

class Usuario {                 //Este objeto sirve para recopilar los datos personales del usuario//
    
    constructor () { 
    
    {
        this.provincia = $('#Provincia').value;   
        this.localidad = $('#Localidad').value; 
        this.nombre = $('#Nombre').value; 
        this.apellido  = $('#Apellido').value;
        this.genero  = $('#Género').value; 
        this.estado_civil  = $('#Estado-civil').value; 
        this.email = $('#Provincia').value;
        this.fecha_nacimiento  = $('#Fecha').value; 
    }

    
}

}


const datosVehiculo = [];

class auto {

    constructor () {

        this.año = $('#Año').value;
        this.marca = $('#Marca').value;
        this.modelo = $('#Modelo').value;
        this.uso = $('#Uso').value;
        this.combustible = $('#Combustible').value;
        this.pago = $('#Pago').value;

}

}



const base = 35000;
let subtotal = 0;
const descuento = 0.2;
let cobertura = 0;
const cobertura1 = 1.2;
const cobertura2 = 1.3;
const cobertura3 = 1.5;
const autosGrupo1 = 1.1;
const autosGrupo2 = 1.2;
const autosGrupo3 = 1.4;
const autosGrupo4 = 1.8;
const autosGrupo5 = 2;
let usoAuto = 0;
const usoAutoParticular = 1.02;
const usoAutoComercial = 1.04;
let combustible = 0;
const nafta = 1.03;
const gasoil = 1.025;
const gnc = 1.01;
let medioDePago = 0;
const transferencia = 1.01;
const tarjeta = 1.025;
const efectivo = 1.03;

let validarProvincia = false;
let validarLocalidad = false;
let validarNombre = false;
let validarApellido = false;
let validarEmail = false;
let validarFecha = false;

let provincia = document.getElementById("Provincia"); 
let localidad = document.getElementById("Localidad");
let nombre = document.getElementById("Nombre");
let apellido = document.getElementById("Apellido");
let email = document.getElementById("Email");
let fecha = document.getElementById("Fecha");

provincia.onchange = () => (validarProvincia = true);
provincia.onchange = () => (console.log("cambio")); 
localidad.onchange = () => (validarLocalidad = true);
nombre.onchange = () => (validarNombre = true);
apellido.onchange = () => (validarApellido = true);
email.onchange = () => (validarEmail = true);
fecha.onchange = () => (validarFecha = true);


$('#botonSiguiente').on('click', validarDatosPersonales);
 

function validarDatosPersonales () {
    
    const fechaActual = Date.now();
    const hoy = new Date(fechaActual);
    fechaUsuario = Date.parse(fecha.value);
    let resultadoFecha = (fechaActual - fechaUsuario)/31556952000; // cantidad de milisegundos en un año

        if (
            //(validarProvincia != false) && 
            (validarLocalidad != false) && 
            (validarNombre != false) && 
            (validarApellido != false) && 
            (validarEmail != false) &&
            (validarFecha != false) &&
            (resultadoFecha >= 18) &&
            (provincia.value != "")&&
            (provincia.value != "Seleccionar provincia")&&
            (localidad.value != "")&&
            (localidad.value != "Seleccionar localidad")&&
            (nombre != "")&&
            (apellido != "")&&
            (email != "")&&
            (fecha != "")
            
        ) 
    
          { 
            $('#subtitulo3').show();
            $('.contenedor__form').css("flex-direction", "row");
            $('#formulario2').show();

          }

        else if (resultadoFecha < 18) {

            Swal.fire({
                icon: 'error',
                title: '¡Ups!',
                text: 'Tenés que ser mayor de 18',
              })
        }

        else (
            Swal.fire({
                title: 'Completar los datos obligatorios correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
              })
        )

};

let formulario1 = document.getElementById("formulario1");

formulario1.addEventListener("submit", validarFormulario1);

function validarFormulario1(evento) {
    evento.preventDefault ();
    console.log("Prevent Default formulario1");

    datosUsuario = [];
            
        let datos = document.getElementsByClassName("input__form1");
        console.log(datos);
             
        for (dato of datos) {                        //iteración para separar el valor de cada dato ingresado
                 datosUsuario.push(dato.value);
                 console.log(dato.value);
             }

        const guardarDatosUsuario = JSON.stringify(datosUsuario);
        localStorage.setItem ("Datos usuario", guardarDatosUsuario);

}


let validarAñoAuto = false;
let validarMarca = false;
let validarModelo = false;
let validarUso = false;
let validarCombustibleAuto = false;
let validarPago = false;

let añoAuto = document.getElementById("Año");
let marcaAuto = document.getElementById("Marca");
let modeloAuto = document.getElementById("Modelo");
let uso = document.getElementById("Uso");
let combustibleAuto = document.getElementById("Combustible");
let pago = document.getElementById("Pago");

añoAuto.onchange = () => (validarAñoAuto = true);
marcaAuto.onchange = () => (validarMarca = true);
modeloAuto.onchange = () => (validarModelo = true);
uso.onchange = () => (validarUso = true);
combustibleAuto.onchange = () => (validarCombustibleAuto = true);
pago.onchange = () => (validarPago = true);


let formulario2 = document.getElementById("formulario2");

formulario2.addEventListener("submit", validarFormulario2);

function validarFormulario2(evento) {
    evento.preventDefault ();
    console.log("Prevent Default formulario2");
    datosAuto = [];

    let datos;
    datos = document.getElementsByClassName("input__form");

    for (dato of datos) {                        //iteración para separar el valor de cada dato ingresado
             datosAuto.push(dato.value);
             console.log(dato.value);
    }

    const guardarDatosAuto = JSON.stringify(datosAuto);
    localStorage.setItem ("Datos auto", guardarDatosAuto);
}


function botonCotizar () {

    $('#botonCotizar').on ("click", cotizar) 
    
    function cotizar () {

    nombreUsuario = document.getElementById("Nombre").value;

    let checkbox = listaSeguros.id; 

    cobertura = Number(checkbox);
    console.log(cobertura);

    if (cobertura === 1 ) {
        
        subtotal = base * cobertura1;
    }

    else if (cobertura === 2 ) {
        
        subtotal = base * cobertura2;
    }

    else if (cobertura === 3 ) {
        
        subtotal = base * cobertura3;
    };

    
    añoAuto = document.getElementById("Año").value;


    if ((añoAuto >= 2000) && (añoAuto < 2005)) {

        subtotal = (subtotal * autosGrupo1)
   }

   else if ((añoAuto >= 2005) && (añoAuto < 2010)) {

        subtotal = subtotal * autosGrupo2;
   }

   else if ( (añoAuto >= 2010) && (añoAuto <2015)) {

        subtotal = subtotal * autosGrupo3; 
   }

   else if ((añoAuto >= 2015) && (añoAuto < 2020)) {
       
       subtotal = subtotal * autosGrupo4; 
   }

   else if (añoAuto >= 2020) {

       subtotal = subtotal * autosGrupo5;
   }


   usoAuto = document.getElementById("Uso").value;

   console.log("uso auto", usoAuto);
  
   if (usoAuto === "Particular") {

    subtotal = subtotal * usoAutoParticular;
       
   }

   else if (usoAuto === "Comercial") {
    
    subtotal = subtotal * usoAutoComercial; 
    
}

   

combustible = document.getElementById("Combustible").value;

    if (combustible === "Nafta") {

        subtotal = subtotal * nafta;
        
   }

   else if (combustible === "Gasoil") {

    subtotal = subtotal * gasoil;

    }

    else if (combustible === "GNC") {

        subtotal = subtotal * gnc;

    }


medioDePago = document.getElementById("Pago").value;

    if (medioDePago === "Transferencia bancaria") {

        subtotal = subtotal * transferencia;
        
    }

    else if (medioDePago === "Tarjeta de débito/crédito") {
    subtotal = subtotal * tarjeta;
    }

    else if (medioDePago === "Efectivo") {
        subtotal = subtotal * efectivo;
    }


   console.log(subtotal);
   cuota = subtotal/12
   descuentoCuota = cuota - (cuota * descuento)
   

   if   (
            (validarAñoAuto != false) && 
            (validarMarca != false) && 
            (validarModelo != false) && 
            (validarUso != false) && 
            (validarCombustibleAuto != false) &&
            (validarPago != false)&&
            (añoAuto >= 2000) &&
            (añoAuto <= 2021)&&
            (añoAuto != "")&&
            (marcaAuto != "")&&
            (modeloAuto != "")&&
            (uso != "Por favor, elija una opción")&&
            (combustibleAuto != "Por favor, elija una opción")&&
            (pago != "Por favor, elija una opción")
        )

        {
            
            $('body').append(`<div id="myModal" class="modal">
                              <div class="modal-content">
                                    <span class="close">&times;</span>
                                        <p>Gracias por tu consulta, ${nombreUsuario}. 
                                        Contratando tu seguro hoy, las tres primeras cuotas tendrán un valor de <strong>$ ${descuentoCuota.toFixed(2)} </strong>.
                                        Un vendedor se contactará con vos en breve</p>
                                    </div>
                              </div>`)

            let modal = document.getElementById("myModal");

            let span = document.getElementsByClassName("close")[0];

            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
              }
              
              // When the user clicks anywhere outside of the modal, close it
              window.onclick = function(event) {
                    if (event.target == modal) {
                    modal.style.display = "none";
                    }
                  }
             
        }

    else (
        Swal.fire({
            title: 'Completar los datos obligatorios correctamente',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
        })
    )              
            
  }
 
}   


$(document).ready(function(){
 $(`#emailFooter`).change(function(){
    Swal.fire({
        icon: 'success',
        title: 'Hemos recibido tu correo',
        showConfirmButton: false,
        timer: 1500
      })
     let emailFooter;
     emailFooter = document.getElementById("emailFooter").value;
     let guardarDatosFooter;
     guardarDatosFooter = JSON.stringify(emailFooter);
     localStorage.setItem("email footer", guardarDatosFooter);
     $('#emailFooter').prop("disabled", true);
 }); 
});



$('#contacto').on("click", modalContacto);

function modalContacto(evento) {

    $('#contenedorFormulariosContacto').empty();

    evento.preventDefault();

    console.log("prevent default modal");

    $('body').append(`<div id="myModal2" class="modal2">
                            <div class="modal-content">
                                    <span class="close2">&times;</span>
                                    '<div class = "contenedor__form" id = "contenedorFormulariosContacto"></div>'
                                    </div>
                            </div>`)

    $('#contenedorFormulariosContacto').append('<form method = "get" id = "formulario3"></form>');

    $('#formulario3').append('<h2 class="títuloSecundario" id="">¡Esperamos tu mensaje!</h2>');

    let datoPersonal = ["Nombre", "Apellido", "Email", "Mensaje"];

    datoPersonal.forEach(datosPersonales => {
        $('#formulario3').append(`<div id = "contenedor-etiquetas-form3${datosPersonales}"><label class = "label__form1 label-required" id="label${datosPersonales}">${datosPersonales}</label>
                                <input class = "input__form" id = "contacto${datosPersonales}" required></input></div>`);

    });


    let emailUsuario = document.getElementById("contactoEmail");
    emailUsuario.setAttribute("type","email");

    $('#contactoMensaje').attr({
        type: 'text',
        maxlength: '300',
        placeholder: 'Max. 300 palabras',
      });

    $('#formulario3').append(`<button id="botonEnviar" class="btn btn-light">Enviar</button>`);

    let modal2 = document.getElementById("myModal2");

    let span2 = document.getElementsByClassName("close2")[0];

    modal2.style.display = "block";

    span2.onclick = function() {
        modal2.style.display = "none";
    }
    
    window.onclick = function(event) {
            if (event.target == modal2) {
            modal2.style.display = "none";
            }
        }

    formulario3.addEventListener("submit", validarFormulario3);

    function validarFormulario3(evento) {
        evento.preventDefault ();
        console.log("Prevent Default formulario3");
        Swal.fire('Muchas gracias por tu mensaje'); 
    }
            
}
    





