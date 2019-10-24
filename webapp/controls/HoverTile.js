sap.ui.define(
  ['sap/ui/core/Control'],
  function(Control) {
  return Control.extend("dev.custom.ExpandOnHover.controls.HoverTile",{
       metadata: {
            properties: {
            	minWidth: {
                    type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
                    defaultValue: "12rem" //this is also optional, but recommended, as it prevents your properties being null
                },
                minHeight: {
                    type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
                    defaultValue: "12rem" //this is also optional, but recommended, as it prevents your properties being null
                },
                maxWidth: {
                    type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
                    defaultValue: "100%" //this is also optional, but recommended, as it prevents your properties being null
                },
                maxHeight: {
                    type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
                    defaultValue: "100%" //this is also optional, but recommended, as it prevents your properties being null
                }
            },
            aggregations: {
            	tileContent    : {type : "sap.ui.core.Control", multiple : false, visibility: "public"},
            	fullContent    : {type : "sap.ui.core.Control", multiple : false, visibility: "public"}
            },
       },
       init: function() {
           //initialisation code, in this case, ensure css is imported
           var libraryPath = jQuery.sap.getModulePath("dev.custom.ExpandOnHover.controls"); //get the server location of the ui library
           jQuery.sap.includeStyleSheet(libraryPath + "/HoverTile.css"); //specify the css path relative from the ui folder
       },/*
       setValue:function(val){
    	   this.setProperty("value", val, true);
    	   var angle = (val-this.getProperty("minValue")) * (240/(this.getProperty("maxValue")-this.getProperty("minValue")));
           angle-=30;
           $("#"+this.sId+" .gaugeNeedle").css("transform","rotate("+angle+"deg)");
           $("#"+this.sId+" .gaugeValue").html((val%1 === 0)?val:val.toFixed(2)+this.getProperty("valueUnit"));
       },*/
       renderer: function(oRm,oControl){
            //to do: render the control
    	 oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.addClass("hoverExpandTile");
            oRm.writeClasses();
            oRm.addStyle("min-width", oControl.getMinWidth());
            oRm.addStyle("min-height", oControl.getMinHeight());
            oRm.writeStyles();
            oRm.write(">");
            //content:
            oRm.write("<div class=\"regularContent\">");
                oRm.renderControl(oControl.getTileContent());
            oRm.write("</div>");
            oRm.write("<div class=\"expandedContent\">");
                oRm.renderControl(oControl.getFullContent());
            oRm.write("</div>");
        oRm.write("</div>");
       },
       onAfterRendering: function(arguments) {
       		$("#"+this.sId).click(function(){
       			$(this).toggleClass("expanded");
       		});
    	   //if I need to do any post render actions, it will happen here
            if(sap.ui.core.Control.prototype.onAfterRendering) {
                 sap.ui.core.Control.prototype.onAfterRendering.apply(this,arguments); //run the super class's method first
            }
       }
  });
  }
);