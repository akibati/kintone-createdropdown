(function(){
    "use strict";

    kintone.events.on(['app.record.create.show', 'kintone.app.edit.show'], function(event){
        
        return createDropdown('spDropdown', 'dropdownValue');

    });


    const createDropdown = (spaceId, fieldCode) => {
        
        const dropdownMenu = fieldCode + 'Menu';
        const dropdownList = fieldCode + 'List';
        const menuItem = fieldCode + 'Item';
        const myAppId = kintone.app.getId();
        
        kintone.app.record.setFieldShown(fieldCode, false);
        let body = {
            'app' : myAppId
        }
        kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', body, function(resp) {
            const fieldName = resp.properties[fieldCode].label;

        });

    };



})();



