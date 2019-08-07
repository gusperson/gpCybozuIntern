(function() {
    'use strict';
    $(document).ready(() => {
        kintone.events.on('app.record.detail.show', function(event) {
            const textField = kintone.app.record.getFieldElement('Text');
            console.log(textField);
            const text = event.record.Text.value;
            const slab0 = '<span class=\'slabtext\'>',
                span0 = '</span>',
                txt0 = [text];    
            $(textField).html(slab0 + txt0.join(span0 + slab0) + span0).slabText();
        });
        kintone.events.on('app.record.index.show', function(event) {
            const header = kintone.app.getHeaderSpaceElement();
            const hElem = '<span class=\'slabtext\'>',
                hspan = '</span>',
                htext = ['Insert Reminder Here!'];
            $(header).html(hElem + htext.join(hspan + hElem) + hspan).slabText();
        });
    });
})();
