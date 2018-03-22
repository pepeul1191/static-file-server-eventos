$(document).ready(function(){
  // mapa
  /*
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -11.729697, lng: -75.28832},
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: {lat: parseFloat(-12.084824), lng: parseFloat(-76.971121)},
    map: map,
    title: 'Hello World!'
  });
  */
  // select de relacion con la Universidad
  var source   = document.getElementById("hb-form-group-relacion").innerHTML;
  var template = Handlebars.compile(source);
  var context = [
    {id: 'E', nombre: ""},
    {id: 1, nombre: "Alumno/Exalumno"},
    {id: 2, nombre: "Empleado"},
    {id: 3, nombre: "Externo"},
  ];
  var template_compiled = template(context);
  $("#form-group-relacion").html(template_compiled);
  // demo
  // renderizar el deatlle del evento
  eventoInscripcion = new EventoInscripcion();
  eventoInscripcion.render();
  // select de origenes renderiza formulario
  $("#slc-origen").change(function(event) {
    var id = $(this).children(":selected").val();
    switch(id) {
    case "E":
      alert("ERROR!!!");
      break;
    case "1": // Alumno/Exalumno
      var estacionSensorView = new FormInscripcionView({template: "form_alumno.html",});
      break;
    case "2": // Empleado
      var estacionSensorView = new FormInscripcionView({template: "form_empleado.html",});
      break;
    case "3": // Externo
      var estacionSensorView = new FormInscripcionView({template: "form_externo.html",});
      break;
    default:
      //TODO
      break;
    }
  });
});

function cargarFormularioRegistro(vista_html){

}
