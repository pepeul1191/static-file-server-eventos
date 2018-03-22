var evento_array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 250px;"},
  {titulo:"Dia Inicio",index:"dia_inicio",estilos:"width: 100px;"},
  {titulo:"Dia Fin",index:"dia_fin",estilos:"width: 100px;"},
	{titulo:"Hora Inicio",index:"hora_inicio",estilos:"width: 100px;"},
  {titulo:"Hora Fin",index:"hora_fin",estilos:"width: 100px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 80px;"}
];

var evento_array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:250px;", index:"nombre", edicion:""},
  {tipo:"label",estilos:"width:100px;", index:"dia_inicio", edicion:""},
  {tipo:"label",estilos:"width:100px;", index:"dia_fin", edicion:""},
	{tipo:"label",estilos:"width:100px;", index:"hora_inicio", edicion:""},
	{tipo:"label",estilos:"width:100px;", index:"hora_fin", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var evento_array_json_btn_td = [
	{clase:"fa fa-pencil",href:"#/evento/editar/",alt:"Editar Evento",estilos:"padding-left: 2px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-search",href:"#/evento/ver/",alt:"Previsualizar Evento",estilos:"padding-left: 2px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-users",href:"#/evento/participantes/",alt:"Ver Participantes de Evento",estilos:"padding-left: 2px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-times",url:"",alt:"Eliminar Evento",estilos:"padding-left: 2px;", operacion:"QuitarFila"}
];

var evento_array_json_btn = [
	{tipo: "agrega_fila_link", link:"#/evento/crear", operacion:"AccionURL", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];
