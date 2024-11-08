// @ts-nocheck
// eslint-disable-next-line no-undef
// @ts-ignore
sap.ui.define([
    'sap/ui/core/mvc/XMLView'
],
    /**
     * @param {typeof sap.ui.core.mvc.XMLView} XMLView
     */
    function (XMLView) {
        XMLView.create({
            viewName:"logaligroup.SAPUI5.view.App"
        }).then(function(oView){
            oView.placeAt("content");
        });
        
    });
