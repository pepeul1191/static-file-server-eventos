$(document).ready(function(){
  // mapa
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -11.729697, lng: -75.28832},
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: {lat: parseFloat(-12.084824), lng: parseFloat(-76.971121)},
    map: map,
    title: 'Hello World!'
  });
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
  console.log(window.location.pathname);
  // select de origenes renderiza formulario
  $("#slc-origen").change(function(event) {
    var id = $(this).children(":selected").val();
    switch(id) {
    case "E":
      alert("ERROR!!!");
      break;
    case "1": // Alumno/Exalumno
      var estacionSensorView = new EstacionSensorView({template: "form_alumno.html",});
      break;
    case "2": // Empleado
      var estacionSensorView = new EstacionSensorView({template: "form_empleado.html",});
      break;
    case "3": // Externo
      var estacionSensorView = new EstacionSensorView({template: "form_externo.html",});
      break;
    default:
      //TODO
      break;
    }
  });
});

var EstacionSensorView = Backbone.View.extend({
	el: '#form-registro',
  initialize: function(vista_html){
    this.vista_html = vista_html;
    this.render();
	},
  render: function() {
    this.$el.html(this.getTemplate());
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
    console.log(this.vista_html);
		$.ajax({
		   url: STATICS_URL + 'templates/' + this.vista_html.template,
		   type: "GET",
		   async: false,
		   success: function(source) {
         var template = Handlebars.compile(source);
		   	 template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
});

function cargarFormularioRegistro(vista_html){

}
