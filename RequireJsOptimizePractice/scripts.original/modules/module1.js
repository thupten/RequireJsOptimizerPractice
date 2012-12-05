define(['jquery','text!/templates/myAccount.xml'],
    function ($, template) {
        function Module1() {
            this.start = function () {
                console.log('m1 started');
                $template = $(template);
                $('#main').text('jquery is working using librarypath....');
                $('#main').append($template);

            };
        }

        return Module1;
    });