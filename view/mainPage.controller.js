sap.ui.controller("com.tallymarks.z_fiori_test.view.mainPage", {


    onInit: function() {

        
    },
    
    onSelectChange: function() {
        debugger;
        var aCurrentFilterValues = [];

        aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectName));
    

        this.filterTable(aCurrentFilterValues);
    },

});