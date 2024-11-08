//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mv/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

],
/**
 * @param {typeof sap.ui.core.mv.Controller}Controller
 * @param {typeof sap.m.MessageToast}MessageToast
 *  @param{typeof sap.ui.core.Fragment}Fragment
 */
    function(Controller,MessageToast,Fragment){
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.HelloPAnel", {
            onInit:function(){

            },
            onShowHello:function(){
                //read text from i18n model
                var oBundle=this.getView().getModel("i18n").getResourceBundle();
                //read property fron data model
                var sRecipient=this.getView().getModel().getProperty("/recipient/name");
                var sMg=oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show.(sMsg);
            },

            onOpenDialog:function(){

                const oview=this.getView();

                if (!this.byId("helloDialog")){
                    Fragment.load({
                        id:oView.getId(),
                        name:"logaligroup.SAPUI5.view.HelloDialog",
                        controller:this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                }else{
                    this.byId("helloDialog").open();

                }
            },
            onCloseDialog:function(){
                this.byId("helloDialog").close();
            }
        });
   
});