sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ltfoodprotal.controller.View1", {
        onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel({
              tiles: [
                { title: "Mandi Arrival", icon: "sap-icon://cart" },
                { title: "Active Competitors", icon: "sap-icon://collaborate" },
                { title: "Own Buying", icon: "sap-icon://cart" },
                { title: "Plant Truck Dispatch", icon: "sap-icon://shipping-status" },
                { title: "Other Truck Dispatch", icon: "sap-icon://shipping-status" },
                { title: "Market Fees", icon: "sap-icon://line-chart" },
                { title: "Variety & Grade Wise", icon: "sap-icon://doc-attachment" },
                { title: "GRN", icon: "sap-icon://globe" },
                { title: "C⁄R Freight Charges", icon: "sap-icon://shipping-status" },
                { title: "C⁄R Labour Charges", icon: "sap-icon://employee" },
                { title: "Change Request Status", icon: "sap-icon://accept" },
                { title: "Arrival So Far", icon: "sap-icon://flight" },
                { title: "Mandi Bid Report Purchase", icon: "sap-icon://competitor" },
                { title: "Dual Variety Approval", icon: "sap-icon://manager" },
                { title: "Arrival So Far Report", icon: "sap-icon://pie-chart" },
                { title: "Truck Status", icon: "sap-icon://log" },
                { title: "Kachcha Artiya Report", icon: "sap-icon://shipping-status" },
                { title: "Bardana Inventory", icon: "sap-icon://inventory" },
                { title: "Mandi Expense", icon: "sap-icon://expense-report" },
                { title: "Freight Change Approval", icon: "sap-icon://shipping-status" },
                { title: "Labour Change Approval", icon: "sap-icon://employee-approvals" }
              ]
            });
            this.getView().setModel(oModel, "viewModel");
          }
          
        
        

        
        
    });
});