Ext.define('MyApp.view.iag.SearchPanel', {
    extend:'Ext.Panel',

    xtype: 'searchpanel',

    title: 'Търсене в базата данни',

    requires: [
        'Ext.Panel',
        'Ext.Img',
        'Ext.Button',
        'Ext.Spacer'
    ],

    controller: 'main',
    viewModel: 'main',

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                flex: 5,
                layout: 'fit',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/Home.png'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'fit',
                items: [
                    {
                        xtype: 'image',
                        // src: 'resources/images/main.png'
                    }
                ]
            },

        ]
    }

    })
