define(['modules/module3'],
    function (Module3) {
        function Module2() {
            this.start = function () {
                console.log('m2 started..starting m3 from m2');

                var module3 = new Module3();
                module3.start();

            };
        }

        return Module2;
    });