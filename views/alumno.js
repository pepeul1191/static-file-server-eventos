var tablaAlumno = new Grid();

var AlumnoView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/alumno.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
		   	var template = Handlebars.compile(source);
		   	template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
	mostrarTabla: function(){
    /*
		tablaAlumno.BorrarTable();
   	var ajax_dao_sistema = new AjaxPython();
   	ajax_dao_sistema.Constructor("GET", BASE_URL + "accesos/sistema/listar", "", false);
   	tablaAlumno.SetTableId("tablaAlumno");
   	tablaAlumno.SetTableObj("tablaAlumno");
   	tablaAlumno.SetTableHeader(sistema_array_json_th);
   	tablaAlumno.SetTableBody(sistema_array_json_td, sistema_array_json_btn_td, ajax_dao_sistema);
   	tablaAlumno.SetTableFooter(sistema_array_json_btn, false);
   	tablaAlumno.SetLabelMensaje("#txtMensajeRpta");
   	tablaAlumno.SetURLGuardar(BASE_URL + "accesos/sistema/guardar");

   	tablaAlumno.MostrarTable();
    */
	}
});
