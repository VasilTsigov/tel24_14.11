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
