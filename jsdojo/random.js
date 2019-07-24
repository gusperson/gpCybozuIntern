(function() {
    'use strict';
    kintone.events.on('app.record.index.show', function(event) {
        const button = document.createElement('button'); // create the button element
        button.innerHTML = 'Choose a random employee!'; // adds HTML text to the button
        button.onclick = function() {
            if (event.records.length === 0) {
                alert('No Records Available!'); // if no records saved, display this alert
            } else {
                alert(_.sample(event.records).Text.value);
            }
        }; // sets the onclick
        kintone.app.getHeaderMenuSpaceElement().appendChild(button); // adds the button to the Header Menu Space
    });
})();
