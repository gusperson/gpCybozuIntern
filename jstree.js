(function() {
    'use strict';
    $(document).ready(function() {
        kintone.events.on('app.record.index.show', function(event) {
            const body = {
                'app': kintone.app.getId(),
            };
            $('#tree').jstree({
                'core': {
                    'check_callback': true,
                    'themes': {'variant': 'large'},
                    'data': [
                        {
                            'text': 'Departments',
                            'expand_selected_onload': 'false',
                            'id': 'dept',
                            'numb': -1,
                            'children': [
                                {
                                    'id': 'hr',
                                    'text': 'Human Resources',
                                    'numb': -1
                                },
                                {
                                    'id': 'af',
                                    'text': 'Accounting and Finance',
                                    'numb': -1
                                },
                                {
                                    'id': 'prod',
                                    'text': 'Production',
                                    'numb': -1
                                },
                                {
                                    'id': 'rd',
                                    'text': 'Research and Development',
                                    'numb': -1
                                }
                            ]
                        }
                    ]
                }
            });
            kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
                for (let i = 0; i < resp.records.length; i++) {
                    const recNum = resp.records[i].Record_number.value
                    const name = resp.records[i].Text.value;
                    const department = resp.records[i].Drop_down.value;
                    switch(department){
                        case 'Accounting and Finance':
                            $('#tree').jstree(true).create_node('#af', {text: name, numb: recNum});
                        break;
                        case 'Human Resources':
                            $('#tree').jstree(true).create_node('#hr', {text: name, numb: recNum});
                        break;
                        case 'Production':
                            $('#tree').jstree(true).create_node('#prod', {text: name, numb: recNum});
                        break;
                        case 'Research and Development':
                            $('#tree').jstree(true).create_node('#rd', {text: name, numb: recNum});
                        break;
                    }
                }
                
        }, function(error) {
            console.log(error);
        });    
        $('#tree').on("select_node.jstree", function (e, data) {
            if(data.node.original.numb !== -1){
                var origin = window.location.origin;
                var pathname = window.location.pathname;
                window.open(origin + pathname + 'show#record=' + data.node.original.numb)
            }
        })
        });
    });
})();