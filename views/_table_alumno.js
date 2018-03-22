var alumno_array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
  {titulo:"Código",index:"codigo",estilos:"width: 70px;"},
  {titulo:"DNI",index:"dni",estilos:"width: 70px;"},
	{titulo:"Apellido Paterno",index:"paterno",estilos:"width: 120px;"},
  {titulo:"Apellido Materno",index:"materno",estilos:"width: 120px;"},
  {titulo:"Nombres",index:"nombres",estilos:"width: 100px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 40px; padding-left: 0px;"}
];

var alumno_array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
  {tipo:"label",estilos:"width:70px;", index:"codigo", edicion:""},
  {tipo:"label",estilos:"width:70px;", index:"dni", edicion:""},
	{tipo:"label",estilos:"width:120px;", index:"paterno", edicion:""},
  {tipo:"label",estilos:"width:120px;", index:"materno", edicion:""},
  {tipo:"label",estilos:"width:100px;", index:"nombres", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var alumno_array_json_btn_td = [
	{clase:"fa fa-search", href:"#/alumno/ver/", alt:"Ver Alumno",estilos:"padding-left: 5px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-list-ul", href:"#/alumno/participacion/", alt:"Participación en Eventos",estilos:"padding-left: 5px;", tipo:"btn_td_href", operacion:"IrURL"},
];

var alumno_array_json_btn = [
];
