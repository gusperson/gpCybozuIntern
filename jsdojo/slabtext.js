(function() {
    'use strict';
    $(document).ready(() => {
        kintone.events.on('app.record.detail.show', (event) => {
            const textField = kintone.app.record.getFieldElement('Text');
            console.log(textField);
            const text = event.record.Text.value;
            const slab0 = '<span class=\'slabtext\'>',
                span0 = '</span>',
                txt0 = [text];    
            $(textField).html(slab0 + txt0.join(span0 + slab0) + span0).slabText();
        });
        // eslint-disable-next-line prefer-arrow-callback
        kintone.events.on('app.record.index.show', function(event) {
            const header = kintone.app.getHeaderSpaceElement();
            const cleaned = sanitizeStr(header.text());
            const hElem = '<span class=\'slabtext\'>',
                hspan = '</span>',
                htext = ['Insert Reminder Here!'];   
            $(header).html(hElem + htext.join(hspan + hElem) + hspan).slabText();
        });
        function sanitizeStr(str) {
            let tmpstr = str;
            tmpstr = tmpstr.replace(/&/g, '&amp;');
            tmpstr = tmpstr.replace(/</g, '&lt;');
            tmpstr = tmpstr.replace(/>/g, '&gt;');
            tmpstr = tmpstr.replace(/"/g, '&quot;');
            tmpstr = tmpstr.replace(/'/g, '&#39;');
            return tmpstr;
        }

    });
})();
