var EventoDetalleView = Backbone.View.extend({
	el: '#modal-container',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.model = new Evento();
	},
	events: {
		"click #btnGuardarDetalleEvento": "guardarDetalleEvento"
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function(data) {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/evento_detalle.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
			   template = source
		   }
		});
		return template;
	},
  renderCrear: function() {
    var context = {
			id: "E",
			titulo_modal: "Crear Evento",
		};
    $("#btnModal").click();
		this.$el.html(this.getTemplate());
		var source = $("#evento-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
		( function( factory ) {
				if ( typeof define === "function" && define.amd ) {
					// AMD. Register as an anonymous module.
					define( [ "../widgets/datepicker" ], factory );
				} else {
					// Browser globals
					factory( jQuery.datepicker );
				}
			}( function( datepicker ) {
				datepicker.regional.es = {
					closeText: "Cerrar",
					prevText: "&#x3C;Ant",
					nextText: "Sig&#x3E;",
					currentText: "Hoy",
					monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio",
					"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
					monthNamesShort: [ "ene","feb","mar","abr","may","jun",
					"jul","ago","sep","oct","nov","dic" ],
					dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
					dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
					dayNamesMin: [ "D","L","M","X","J","V","S" ],
					weekHeader: "Sm",
					dateFormat: "dd/mm/yy",
					firstDay: 1,
					isRTL: false,
					showMonthAfterYear: false,
					yearSuffix: ""
				};
				datepicker.setDefaults( datepicker.regional.es );
				return datepicker.regional.es;
			} ) );
		$("#txtFechaInicio").datepicker({
			showOtherMonths: true,
			selectOtherMonths: true
		});
		$("#txtFechaFin").datepicker({
			showOtherMonths: true,
			selectOtherMonths: true
		});
		$('#txtHoraInicio').timepicker({
			timeFormat: 'h:mm p',
			interval: 60,
			minTime: '10',
			maxTime: '6:00pm',
			defaultTime: '11',
			startTime: '10:00',
			dynamic: false,
			dropdown: true,
			scrollbar: true
		});
		$('#txtHoraFin').timepicker({
			timeFormat: 'h:mm p',
			interval: 60,
			minTime: '10',
			maxTime: '6:00pm',
			defaultTime: '11',
			startTime: '10:00',
			dynamic: false,
			dropdown: true,
			scrollbar: true
		});
		CKEDITOR.replace('txtDescripcionEvento');
	},
	guardarDetalleEvento: function(){
		var evento = {
			id: $("#lblIdEvento").html(),
			nombre: $("#txtNombre").val(),
			nombre_url: $("#txtNombreURL").val(),
			lugar: $("#txtLugar").val(),
			direccion: $("#txtDireccion").val(),
			dia_inicio: $("#txtFechaInicio").val(),
			dia_fin: $("#txtFechaFin").val(),
			hora_inicio: $("#txtHoraInicio").val(),
			hora_fin: $("#txtHoraFin").val(),
			descripcion: CKEDITOR.instances['txtDescripcionEvento'].getData(),
		}
		$.ajax({
   		type: "POST",
   		url: BASE_URL + "evento/guardar_detalle",
   		data: {data: JSON.stringify(evento), csrfmiddlewaretoken: CSRF},
   		async: false,
   		success: function(data){
				console.log("success");
				console.log(data);
   		},
   		error: function(data){
				console.log("error");
				console.log(data);
   		}
   	});
	}
});
