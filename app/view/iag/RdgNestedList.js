Ext.define('MyApp.view.iag.RdgNestedList',{
    extend: 'Ext.NestedList',
    xtype: 'rdgnestedlist',

    title: 'Регионални дирекции по горите',

    displayField: 'text',

    controller: 'iagcontroller',

    detailCard: {
        xtype: 'panel',
        scrollable: true
    },
    listeners: {
        itemtap: 'onItemTap'
    },


    store: {
        // storeId: 'iagStore',
        // model: 'MyApp.model.iag.IagModel',
        root: {},
        proxy: {
            type: 'jsonp',
            url: 'https://vasil.iag.bg/tel/v7/rdg_empl',
            reader: {
                type: 'json',
                rootProperty: 'items',
            }
        }
    },

})
