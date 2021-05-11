angular.module('isghApp').factory('userCache', function ($firebaseObject) {
    return function (ref) {
        var cachedUsers = {};
        // loads one user into the local cache, you do not need to
        // wait for this to show it in your view, Angular and Firebase
        // will work out the details in the background
        cachedUsers.$load = function (id) {
            if( !cachedUsers.hasOwnProperty(id) ) {
                cachedUsers[id] = $firebaseObject(ref.child(id));
            }
            return cachedUsers[id];
        };
        // frees memory and stops listening on user objects
        // use this when you switch views in your SPA and no longer
        // need this list
        cachedUsers.$dispose = function () {
            angular.forEach(cachedUsers, function (user) {
                user.$destroy();
            });
        };
        // removes one user, note that the user does not have
        // to be cached locally for this to work
        cachedUsers.$remove = function(id) {
            delete cachedUsers[id];
            ref.child(id).remove();
        };
        return cachedUsers;
    }
});  