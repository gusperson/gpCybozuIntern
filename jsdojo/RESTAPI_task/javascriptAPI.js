(function() {
    'use strict';
    kintone.events.on('app.record.create.show', (event) => {
        //  get form settings
        const params = {
            'app': 41
        };
        kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', params, (forms) => {
            let newRow;
            const setRecord = kintone.app.record.get();
            const action = forms.properties.table.fields.action_5.options;
            for (const actions in action) {
                newRow = {
                    value: {
                        action_5: {
                            type: 'DROP_DOWN',
                            value: actions
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
                setRecord.record.table.value.push(newRow);
            }
            setRecord.record.table.value.pop();
            setRecord.record.table.value.shift();
            kintone.app.record.set(setRecord);
        }, (error) => {
            console.log(error);
        });
    });
})();
