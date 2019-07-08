(function() {
    'use strict';
    kintone.events.on('app.record.create.show', (event) => {
        const record = event.record;
        let i;
        let dd;
        let newRow;
        console.log(event.record.table);
        record.table.value[0].value.action_5.value = 'Relentless quest';
        for (i = 0; i < 5; i++) {
            switch (i) {
            case 0:
                dd = 'Mental and physical persistence';
                break;
            case 1:
                dd = 'Empathy for the ideal';
                break;
            case 2:
                dd = 'Inspire others';
                break;
            case 3:
                dd = 'Increase knowledge and skills';
                break;
            case 4:
                dd = 'Fairness and honesty';
                break;
            default:
                break;
            }
            newRow = {
                value: {
                    action_5: {
                        type: 'DROP_DOWN',
                        value: dd
                    },
                    status: {
                        type: 'CHECK_BOX',
                        value: ['Not reviewed']
                    },
                    task: {
                        type: 'MULTI_LINE_TEXT',
                        value: ''
                    }
                }
            };
            record.table.value.push(newRow);
        }
        return event;
    });
})();