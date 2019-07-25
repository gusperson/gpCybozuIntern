(function() {
    'use strict';
    $(document).ready(function() {
        kintone.events.on('app.record.detail.show', function(event) {
            kintone.app.record.setFieldShown('department0', false); // hides the tables
            kintone.app.record.setFieldShown('department1', false);
            kintone.app.record.setFieldShown('department2', false);
            const tree = document.createElement('ul'); // sets up wrapper for the tree
            tree.setAttribute('id', 'tree');
            kintone.app.record.getSpaceElement('bspace').appendChild(tree);
            $('#tree').jstree({
                'core': {
                    'check_callback': true,
                    'themes': {
                        'variant': 'large',
                    },
                    'data': [
                        {
                            'text': 'Departments',
                            'expand_selected_onload': 'false',
                            'id': 'dept',
                            'children': [
                                {
                                    'id': 'managers',
                                    'text': 'Managers',
                                },
                                {
                                    'id': 'sales',
                                    'text': 'Sales',
                                },
                                {
                                    'id': 'hr',
                                    'text': 'HR',
                                }
                            ]
                        }
                    ]
                }
            });
            $('#tree').on('ready.jstree', function() {
                for (let i = 0; i < event.record.department0.value.length; i++) {
                    const name = event.record.department0.value[i].value.managers.value;
                    if (name !== '') {
                        $('#tree').jstree(true).create_node('#managers', {text: name, state: {'disabled': true}});
                    }
                }
                for (let i = 0; i < event.record.department1.value.length; i++) {
                    const name = event.record.department1.value[i].value.sales.value;
                    if (name !== '') {
                        $('#tree').jstree(true).create_node('#sales', {text: name, state: {'disabled': true}});
                    }
                }
                for (let i = 0; i < event.record.department2.value.length; i++) {
                    const name = event.record.department2.value[i].value.hr.value;
                    if (name !== '') {
                        $('#tree').jstree(true).create_node('#hr', {text: name, state: {'disabled': true}});
                    }
                }
            });
        });
    });
})();