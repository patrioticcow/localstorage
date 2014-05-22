angular.module('starter.helper', [])
    .factory('Helper', function ($window, $stateParams, localStorageService, Tests, Scores) {
        return {
            isEmpty: function (value) {
                if (value === '' || value === undefined || value === null) {
                    //alert('Please answer question.');
                    return true;
                }
                return false;
            },
            isObjEmpty: function (obj) {
                if (obj == null) return true;
                if (obj.length > 0) return false;
                if (obj.length === 0) return true;
                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key)) return false;
                }

                return true;
            }
        }
    })
;
