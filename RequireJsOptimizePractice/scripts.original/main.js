define([],
    function () {
        require.config({
            paths: {
                'underscore':'lib/underscore',
                'jquery':'lib/jquery-latest'
            }
        });
        require(['entrance'], function(entrance){
            entrance.start();
        });
    });