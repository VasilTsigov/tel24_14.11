Ext.define('MyApp.controller.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',

    onSearchChange: function(field, newValue) {
        const searchResultList = this.lookupReference('searchResultList');
        const searchValue = newValue.trim();

        // Regex to match "FirstName (3 letters) space LastName (3 letters)"
        const searchPattern = /^[a-zA-Zа-яА-Я]{3,}\s[a-zA-Zа-яА-Я]{3,}$/;

        // Only search if input meets requirements
        if (searchPattern.test(searchValue)) {
            const [firstName, lastName] = searchValue.split(' ');
            this.performSearch(firstName, lastName, searchResultList);
        } else {
            // Clear results if input is invalid
            searchResultList.getStore().setRoot({
                expanded: true,
                children: []
            });
        }
    },

    // performSearch: function(firstName, lastName, list) {
    //     Ext.Ajax.request({
    //         url: 'https://vasil.iag.bg/all_empl/imeAndFam',  // Your JSONP URL
    //         method: 'GET',
    //         callbackKey: 'callback',  // JSONP callback parameter
    //         success: function(response) {
    //             const data = Ext.decode(response.responseText);
    //             const matchedItems = [];

    //             // Filter results based on name and last name
    //             data.items.forEach(item => {
    //                 const [itemFirstName, itemLastName] = item.text.split(' ');
    //                 if (itemFirstName && itemLastName &&
    //                     itemFirstName.toLowerCase().startsWith(firstName.toLowerCase()) &&
    //                     itemLastName.toLowerCase().startsWith(lastName.toLowerCase())) {
    //                     matchedItems.push(item);
    //                 }
    //             });

    //             // Update the NestedList or List with matched results
    //             list.getStore().setRoot({
    //                 expanded: true,
    //                 children: matchedItems.map(item => ({ ...item, leaf: true }))
    //             });
    //         },
    //         failure: function() {
    //             Ext.Msg.alert('Error', 'Failed to fetch data. Please try again.');
    //         }
    //     });
    // }

    performSearch: function(firstName, lastName, list) {
        Ext.data.JsonP.request({
            url: 'https://vasil.iag.bg/all_empl/imeAndFam',
            callbackKey: 'callback',
            success: function(response) {
                const data = response;

                // Confirm the data structure
                console.log("Response data:", data);

                const itemsArray = Array.isArray(data.items) ? data.items : (data.items && data.items.items ? data.items.items : []);
                console.log("Items array:", itemsArray);

                const matchedItems = [];

                // Broader matching approach
                itemsArray.forEach(item => {
                    const lowerText = item.text.toLowerCase();
                    if (lowerText.includes(firstName.toLowerCase()) && lowerText.includes(lastName.toLowerCase())) {
                        matchedItems.push(item);
                    }
                });

                // Log matched items
                console.log("Matched items:", matchedItems);

                // Update the NestedList or List with matched results
                list.getStore().setRoot({
                    expanded: true,
                    children: matchedItems.map(item => ({ ...item, leaf: true }))
                });
            },
            failure: function() {
                Ext.Msg.alert('Error', 'Failed to fetch data. Please try again.');
            }
        });
    },


    success: function(response) {
        const data = response;

        // Log the response to confirm its structure
        console.log("Response data:", data);

        // Check if data.items.items is the correct path
        const itemsArray = data && data.items ? data.items.items : [];
        console.log("Items array:", itemsArray);

        const matchedItems = [];

        // Proceed with filtering
        itemsArray.forEach(item => {
            console.log("Item text:", item.text);  // Log each item's text field
        });

        // Further code…
    }


});
