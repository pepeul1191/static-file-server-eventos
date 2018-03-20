var tablaEmpleado = new Grid();

var EmpleadoView = Backbone.View.extend({
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
		   url: STATICS_URL + 'templates/empleado.html',
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
		tablaEmpleado.BorrarTable();
   	var ajax_dao_sistema = new AjaxPython();
   	ajax_dao_sistema.Constructor("GET", BASE_URL + "empleado/listar", "", false);
   	tablaEmpleado.SetTableId("tablaEmpleado");
   	tablaEmpleado.SetTableObj("tablaEmpleado");
   	tablaEmpleado.SetTableHeader(empleado_array_json_th);
   	tablaEmpleado.SetTableBody(empleado_array_json_td, empleado_array_json_btn_td, ajax_dao_sistema);
   	tablaEmpleado.SetTableFooter(empleado_array_json_btn, false);
   	tablaEmpleado.SetLabelMensaje("#txtMensajeRpta");
   	tablaEmpleado.SetURLGuardar(BASE_URL + "accesos/sistema/guardar");
   	tablaEmpleado.MostrarTable();
	}
});
