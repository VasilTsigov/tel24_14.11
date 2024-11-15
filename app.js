/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    stores: [
        'MyApp.store.iag.IagStore',
        'MyApp.store.iag.RdgStore',
        'MyApp.store.iag.DpStore'
    ],

    launch: function() {
        const stores = ['IagStore', 'RdgStore', 'DpStore']; // Add the store IDs you want to track
        let loadedCount = 0;

        // Function to check if all stores are loaded
        function checkAllStoresLoaded() {
            if (loadedCount === stores.length) {
                document.getElementById('loading-screen').style.display = 'none';
            }
        }

        // Set up listeners for each store
        stores.forEach(storeId => {
            const store = Ext.getStore(storeId);
            store.on('load', function() {
                loadedCount++;
                checkAllStoresLoaded();
            });
        });

        // Initial check in case stores load instantly
        checkAllStoresLoaded();
    },

    controllers: [
        // 'MyApp.controller.IagController'
    ],

    // controllers: ['IagController'], // Add your controller here

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyApp.view.Home'
});
