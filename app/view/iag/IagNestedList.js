Ext.define('MyApp.view.iag.IagNestedList',{
    extend: 'Ext.NestedList',
    xtype: 'iagnestedlist',

    title: 'Изпълнителна агенция по горите',

    displayField: 'text',

    controller: 'iagcontroller',

    requires:[
        'MyApp.store.iag.IagStore',
    ],

    detailCard: {
        xtype: 'panel',
        scrollable: true
    },
    listeners: {
        itemtap: 'onItemTap'
    },

    store: 'IagStore'

    // store: {
    //     storeId: 'iagStore',
    //     // model: 'MyApp.model.iag.IagModel',
    //     root: {},
    //     proxy: {
    //         type: 'jsonp',
    //         url: 'https://vasil.iag.bg/tel/v7/iag_empl',
    //         reader: {
    //             type: 'json',
    //             rootProperty: 'items',
    //         }
    //     }
    // },

})


