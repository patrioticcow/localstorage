angular.module('starter.controllers', [])

    .controller('MainCtrl', function ($scope) {
        $scope.createDatabase = function (databaseName) {
            var lib = new localStorageDB(databaseName, localStorage);
        }
    })

    .controller('CategoriesCtrl', function ($scope, Categories) {
        var cat = Categories.all();

        $scope.categories = cat;

        addthis.layers({
            'theme': 'transparent',
            'share': {
                'position': 'left',
                'numPreferredServices': 5
            },
            'whatsnext': {}
        });
    })

    .controller('sideMenuCtrl', function ($scope, $stateParams) {

    });