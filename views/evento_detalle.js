var EventoDetalleView = Backbone.View.extend({
	el: '#modal-container',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.model = new Evento();
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
    var context = {titulo_modal: "Crear Evento"};
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
});
