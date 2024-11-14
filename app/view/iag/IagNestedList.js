Ext.define('MyApp.view.iag.IagNestedList',{
    extend: 'Ext.NestedList',
    xtype: 'iagnestedlist',

    title: 'ИАГ',

    displayField: 'text',

    requires: [
        // 'Ext.MessageBox',
        // 'Ext.layout.Fit',
        // 'MyApp.store.iag.IagStore',
        // 'Ext.data.proxy.JsonP',
        // 'Ext.data.reader.Json',
    ],
    detailCard: {
        xtype: 'panel',
        scrollable: true
    },
    listeners: {
        itemtap: function (nestedList, list, index, target, record) {
            if (record.get('leaf')) {
                nestedList.getDetailCard().setHtml(
                    `<div style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; padding: 10px;">
                        <!-- Container for the image and overlay -->
                        <div style="position: relative; display: inline-block;">
                            <!-- Main Image -->
                            <img src="https://vasil.iag.bg/upload/${record.get('glavpod')}/${record.get('pict')}"
                                 alt="Picture of ${record.get('text')}"
                                 style="width:140px; height:180px; border-radius: 8px;">
                        </div>

                        <!-- Additional details below the image -->
                        <div style="margin-top: 10px; color: #333;">
                            <p><b>${record.get('text')}</b></p>
                            <p>${record.get('dlag')}</p>
                            <p>${record.get('pod')}</p>

                            <p><b>Телефон:</b> ${record.get('gsm')}</p>
                            <p><b>Email:</b> ${record.get('email')}</p>
                        </div>

                        <!-- Action buttons for call, SMS, and email -->
                        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 15px;">
                            <button onclick="window.location.href='tel:${record.get('gsm')}'" style="padding: 8px 12px; border-radius: 5px; border: none; background-color: #4CAF50; color: white; cursor: pointer;">
                                Call
                            </button>
                            <button onclick="window.location.href='sms:${record.get('gsm')}'" style="padding: 8px 12px; border-radius: 5px; border: none; background-color: #2196F3; color: white; cursor: pointer;">
                                SMS
                            </button>
                            <button onclick="window.location.href='mailto:${record.get('email')}'" style="padding: 8px 12px; border-radius: 5px; border: none; background-color: #f44336; color: white; cursor: pointer;">
                                Email
                            </button>
                        </div>
                    </div>`
                );
            }
        }
    },


    store: {
        storeId: 'iagStore',
        // model: 'MyApp.model.iag.IagModel',
        root: {},
        proxy: {
            type: 'jsonp',
            url: 'https://vasil.iag.bg/tel/v7/iag_empl',
            reader: {
                type: 'json',
                rootProperty: 'items',
            }
        }
    },

})


