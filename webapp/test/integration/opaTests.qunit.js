/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dev/custom/ExpandOnHover/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});