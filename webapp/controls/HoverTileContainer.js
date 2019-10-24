sap.ui.define(
	['sap/ui/core/Control'],
	function (Control) {
		return Control.extend("dev.custom.ExpandOnHover.controls.HoverTileContainer", {
			metadata: {
				properties: {
	                minHeight: {
	                    type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
	                    defaultValue: "100%" //this is also optional, but recommended, as it prevents your properties being null
	                }
				},
				aggregations: {
					hoverTiles: {
						type: "dev.custom.ExpandOnHover.controls.HoverTile",
						multiple: true,
						visibility: "public",
						default: true
					}
				}
			},
			init: function () {
				//initialisation code, in this case, ensure css is imported
				var libraryPath = jQuery.sap.getModulePath("dev.custom.ExpandOnHover.controls"); //get the server location of the ui library
				jQuery.sap.includeStyleSheet(libraryPath + "/HoverTile.css"); //specify the css path relative from the ui folder
			},
			renderer: function (oRm, oControl) {
				//to do: render the control
				oRm.write("<div");
					oRm.addClass("hoverTileContainer");
				oRm.writeControlData(oControl);
				oRm.writeClasses();
					oRm.addStyle("min-height", oControl.getMinHeight());
				oRm.writeStyles();
				oRm.write(">");
				oControl.getHoverTiles().forEach(function(control){
					oRm.renderControl(control);	
				});
				oRm.write("</div>");
			},
			onAfterRendering: function (arguments) {
				//if I need to do any post render actions, it will happen here
				if (sap.ui.core.Control.prototype.onAfterRendering) {
					sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments); //run the super class's method first
				}
			}
		});
	}
);