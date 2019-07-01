const filemanage = {


    'f001': {
        'folderName': 'Information System Department',
        'viewAuth': 'Information System Department',
        'editAuth': 'Information System Department',
        'deleteAuth': 'Information System Department',

    },
    'f002': {
        'folderName': 'Corporate Planning Department',
        'viewAuth': 'Corporate Planning Department',
        'editAuth': 'Corporate Planning Department',
        'deleteAuth': 'Corporate Planning Department',

    },
    'f003': {
        'folderName': 'Sales Department',
        'viewAuth': 'Everyone',
        'editAuth': 'Sales Department',
        'deleteAuth': 'Sales Department',

    },
    'f004': {
        'folderName': 'Development Division',
        'viewAuth': 'Development Division',
        'editAuth': 'Development Division',
        'deleteAuth': 'Development Division',

    },
    'f005': {
        'folderName': 'General Affairs Department',
        'viewAuth': 'Everyone',
        'editAuth': 'Everyone',
        'deleteAuth': 'General Affairs Department',

    },
    'f006': {
        'folderName': 'Accounting Department',
        'viewAuth': 'Accounting Department',
        'editAuth': 'Accounting Department',
        'deleteAuth': 'Accounting Department',

    },
    'f007': {
        'folderName': 'Planning Department',
        'viewAuth': 'Everyone',
        'editAuth': 'Planning Department',
        'deleteAuth': 'Planning Department',

    },

};


for (let i = 1; i < 8; i++) {
    const node = document.createElement('li');
    if (filemanage['f00' + i].viewAuth === 'Everyone') {
        const permission = document.createTextNode(filemanage['f00' + i].folderName);
        node.appendChild(permission);
        document.getElementById('list').appendChild(node);

    }

}
//document.getElementById('list').appendChild(node);
