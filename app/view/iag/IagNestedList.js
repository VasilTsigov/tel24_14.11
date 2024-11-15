Ext.define('MyApp.view.iag.IagNestedList',{
    extend: 'Ext.NestedList',
    xtype: 'iagnestedlist',

    title: 'Изпълнителна агенция по горите',

    displayField: 'text',

    controller: 'iagcontroller',

    // cls: 'custom-nested-list',  // Add a custom class here

    detailCard: {
        xtype: 'panel',
        scrollable: true
    },
    listeners: {
        itemtap: 'onItemTap'
    },

    store: 'IagStore',

//     itemTpl: `
//     <div style="font-size: 20px; color: #333;">
//         {text}
//     </div>
// `

})


