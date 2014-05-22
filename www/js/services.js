angular.module('starter.services', [])

    .factory('Categories', function () {
        var categories = [
            { id: 0, name: 'IQ Tests', groups: [
                { id: 0, name: 'Elementary Level', count: 10 },
                { id: 1, name: 'Challenging Level', count: 10 },
                { id: 2, name: 'Masterful Level', count: 10 }
            ]},
            { id: 1, name: 'Performance Tests', groups: [
                { id: 0, name: '1Elementary Level', count: 10 },
                { id: 1, name: '2Challenging Level', count: 10 },
                { id: 2, name: '3Masterful Level', count: 10 }
            ]}
        ];

        return {
            all: function () {
                return categories;
            },
            get: function (catId) {
                return categories[catId];
            },
            getTest: function (catId, groupId) {
                return categories[catId].groups[groupId];
            }
        }
    });
