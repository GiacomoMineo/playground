'use strict';

angular.module('playgroundApp')
  .factory('Sport', function ($resource) {
    return $resource('/api/sports/:id/:controller', {
      id: '@_id'
    },
    {
      increaseCounter: {
        method: 'PUT',
        params: {
          controller:'increase'
        }
      },
      decreaseCounter: {
        method: 'PUT',
        params: {
          controller:'decrease'
        }
      }
    });
  });
