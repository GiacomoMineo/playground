'use strict';

angular.module('playgroundApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      addFavoriteSport: {
        method: 'PUT',
        params: {
          controller:'newsport'
        }
      },
      removeFavoriteSport: {
        method: 'PUT',
        params: {
          controller:'removesport'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
