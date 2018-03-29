var FormInscripcionView = Backbone.View.extend({
	el: '#form-registro',
	events: {
  	"focusout #txtCodigoAlumno": "buscarAlumnoCodigo",
		"focusout #txtCodigoEmpleado": "buscarEmpleadoCodigo",
		"focusout #txtDni": "buscarExternoDNI",
		"focusout #txtDni": "buscarExternoDNI",
		"click #field_terms": "terminosCondiciones",
	  "click #btnInscribirse": "inscribirse",
	},
  initialize: function(){
	},
  render: function(vista_html) {
		this.$el.html(this.getTemplate(vista_html));
		var source = null;
		var context = { };
		if(vista_html.template == "form_alumno.html"){
			source = $("#alumno-inscripcion-template").html();
			this.tipo = "alumno";
		}
		if(vista_html.template == "form_empleado.html"){
			source = $("#empleado-inscripcion-template").html();
			this.tipo = "empleado";
		}
		if(vista_html.template == "form_externo.html"){
			source = $("#externo-inscripcion-template").html();
			this.tipo = "externo";
		}
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
	},
	getTemplate: function(vista_html) {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/' + vista_html.template,
		   type: "GET",
		   async: false,
		   success: function(source) {
         template = source
		   }
		});
		return template;
	},
	terminosCondiciones: function(event){
		var input = $(event.target);
		if(input.prop("checked") == true){
			$("#btnInscribirse").removeAttr("disabled");
		}else{
			$("#btnInscribirse").attr("disabled","disabled");
		}
	},
	inscribirse: function(event){
		var datos = {};
		var url = null;
		switch(this.tipo) {
	    case "alumno": // Alumno/Exalumno
					datos.id = $("#lblIdAlumno").html();
					datos.evento_id = $("#lblIdEvento").html();
					datos.correo_adicional = $("#txtCorreoAdicional").val();
					datos.telefono_adicional = $("#txtTelefonoAdicional").val();
					url = "registro/alumno"
	      break;
	    case "empleado": // Empleado
				datos.id = $("#lblIdEmpleado").html();
				datos.evento_id = $("#lblIdEvento").html();
				datos.correo_adicional = $("#txtCorreoAdicional").val();
				datos.telefono_adicional = $("#txtTelefonoAdicional").val();
				url = "registro/empleado"
	      break;
	    case "externo": // Externo
	      break;
	    default:
	      //TODO
	      break;
    }
		$.ajax({
   		type: "POST",
   		url: BASE_URL + url,
   		data: {data: JSON.stringify(datos), csrfmiddlewaretoken: CSRF},
   		async: false,
   		success: function(data){
				console.log(data);
   		},
   		error: function(data){
				console.log("error");
				evento = data;
   		}
   	});
	},
	buscarAlumnoCodigo: function(event) {
		var input = $(event.target);
		var rpta = null;
		$.ajax({
		   url: BASE_URL + 'evento/alumno/codigo_buscar/' + input.val(),
		   type: "GET",
		   async: false,
		   success: function(data) {
         rpta = data;
		   }
		});
		if (rpta == "null"){
			alert("Código de alumno ingresado no encontrado");
			//input.focus();
		}else{
			var alumno = JSON.parse(rpta);
			$("#lblIdAlumno").html(alumno.id);
			$("#txtNombres").val(alumno.nombres);
			$("#txtPaterno").val(alumno.paterno);
			$("#txtMaterno").val(alumno.materno);
		}
	},
	buscarEmpleadoCodigo: function(event) {
		var input = $(event.target);
		var rpta = null;
		$.ajax({
			 url: BASE_URL + 'evento/empleado/codigo_buscar/' + input.val(),
			 type: "GET",
			 async: false,
			 success: function(data) {
				 rpta = data;
			 }
		});
		if (rpta == "null"){
			alert("Código de alumno ingresado no encontrado");
			//input.focus();
		}else{
			var empleado = JSON.parse(rpta);
			$("#lblIdEmpleado").html(empleado.id);
			$("#txtNombres").val(empleado.nombres);
			$("#txtPaterno").val(empleado.paterno);
			$("#txtMaterno").val(empleado.materno);
		}
	},
	buscarExternoDNI: function(event) {
		alert("buscarExternoDNI");
	},
});
