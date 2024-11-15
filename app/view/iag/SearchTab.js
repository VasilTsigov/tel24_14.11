Ext.define('MyApp.view.iag.SearchTab', {
    extend: 'Ext.Panel',
    xtype: 'searchtab',

    controller: 'searchcontroller',

    layout: 'vbox',
    items: [
        {
            xtype: 'textfield',
            label: 'Search Name',
            placeholder: 'Type Name and Family Name...',
            listeners: {
                change: 'onSearchChange'  // Listener for the change event
            }
        },
        {
            xtype: 'nestedlist',  // or 'list', depending on the structure you prefer
            reference: 'searchResultList',  // Reference for easy access
            displayField: 'text',
            store: {
                type: 'tree',  // Use a TreeStore if using NestedList
                fields: ['id', 'text', 'dlag', 'dlagid', 'pod', 'egn', 'gsm', 'email', 'glavpod', 'pict', 'leaf'],
                root: {
                    expanded: true,
                    children: []  // Empty initially; will populate on search
                }
            },
            flex: 1
        }
    ]
});
