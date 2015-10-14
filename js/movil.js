/*********************************************************************
	Jquery Mobile: Framework y CSS deben estar cargados
*********************************************************************/
$(document).bind("mobileinit", function() {
	
	/*********************************************************************
		$.mobile --> Representa al framework JQuery Mobile
	*********************************************************************/
	$.mobile.ajaxEnaled = false;
	$.mobile.defaltPageTransition = "slideup";
	$.mobile.defaultDialogTransition = "flip";
	$.mobile.loadingMessage = "Por favor espere...";
	$.mobile.pageLoadErrorMessage = "No se ha podido cargar";

	alert("Carga Completa");

});