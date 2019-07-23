(function () {
    "use strict";
    $( document ).ready(function() {
        kintone.events.on('app.record.detail.show', function(event) {
            var textField = kintone.app.record.getFieldElement('Text');
            console.log(textField);
            var text = event.record.Text.value;
            var slab0 = "<span class='slabtext'>",
                span0 = "</span>",
                txt0 = [text];    
            $(textField).html(slab0 + txt0.join(span0 + slab0) + span0).slabText();
        });
        kintone.events.on('app.record.index.show', function(event) {
            var header = kintone.app.getHeaderSpaceElement();
            var hElem =  "<span class='slabtext'>",
            hspan = "</span>",
            htext = ["Insert Reminder Here!"];
            $(header).html(hElem + htext.join(hspan + hElem) + hspan).slabText();
        });
    });
})();
