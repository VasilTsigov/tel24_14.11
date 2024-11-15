Ext.define('MyApp.view.iag.DpNestedList',{
    extend: 'Ext.NestedList',
    xtype: 'dpnestedlist',

    title: 'Държавни горски предприятия',

    displayField: 'text',

    requires:[
        'MyApp.store.iag.IagStore',
    ],

    controller: 'iagcontroller',

    detailCard: {
        xtype: 'panel',
        scrollable: true
    },
    listeners: {
        itemtap: 'onItemTap'
    },


    store: 'DpStore',
    // store: {
    //     // storeId: 'iagStore',
    //     // model: 'MyApp.model.iag.IagModel',
    //     root: {},
    //     proxy: {
    //         type: 'jsonp',
    //         url: 'https://vasil.iag.bg/tel/v7/dp_dgs_empl',
    //         reader: {
    //             type: 'json',
    //             rootProperty: 'items',
    //         }
    //     }
    // },

})
