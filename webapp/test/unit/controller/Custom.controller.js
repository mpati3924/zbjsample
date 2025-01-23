/*global QUnit*/

sap.ui.define([
	"zbjsalesdata_test/controller/Custom.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Custom Controller");

	QUnit.test("I should test the Custom controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
