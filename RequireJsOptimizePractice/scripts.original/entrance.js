define([
    'library-paths',
    'modules/module1',
    'modules/module2'
],
    function (libraryPaths, Module1, Module2) {
        require.config({
            paths:libraryPaths
        });
        return {
            start: function(){
                console.log('main started');
                var module1 = new Module1();
                var module2 = new Module2();
                module1.start();
                module2.start();
            }
        };
    }

);
