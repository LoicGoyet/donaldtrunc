(function ($) {
    $.fn.donaldtrunc = function(action) {
        var el = this;
        var string = el.html();

        $(this).attr('data-toggle', 'donaldtrunc');

        // Default settings
        // ================
        var settings = $.extend({
            trunc: 10,
            trunctoggle: true,
            toggleLabelIn: '... Read more',
            toggleLabelOut: 'Show less',
            toggleClass: 'trunc-toggle'
        }, action );



        // Set data as the settings if they are isset
        // ==========================================
        if (this.data('trunc')) { settings.trunc = this.data('trunc') };
        if (this.data('trunctoggle')) { settings.trunctoggle = this.data('trunctoggle') };
        if (this.data('toggleLabelIn')) { settings.toggleLabelIn = this.data('toggleLabelIn') };
        if (this.data('toggleLabelOut')) { settings.toggleLabelOut = this.data('toggleLabelOut') };
        if (this.data('toggleClass')) { settings.toggleClass = this.data('toggleClass') };



        // Buttons
        // =======
        var buttonin = "<button class='" + settings.toggleClass + " -in'>" + settings.toggleLabelIn + "</button>";
        var buttonout = "<button class='" + settings.toggleClass + " -out'>" + settings.toggleLabelOut + "</button>";



        // Helper Functions
        // ================
        function truncIn(el, string, trunc) {
            if (string.length > trunc) {

                if (settings.trunctoggle) {
                    el.children('.'+settings.toggleClass).remove();
                    string = el.html();
                }

                var newstring = jQuery.trim(string).substring(0, trunc);
                var reststring = jQuery.trim(string).substring(trunc);

                if (settings.trunctoggle) {
                    el.html(newstring).append(buttonin).attr('data-reststring', reststring);
                } else {
                    el.html(newstring).attr('data-reststring', reststring);
                }

                return true;
            }
        }

        function truncOut(el, incompletestring) {
            if (el.attr('data-reststring')) {
                var reststring = el.attr('data-reststring');

                if (settings.trunctoggle) {
                    el.children('.'+settings.toggleClass).remove();
                    incompletestring = el.html();
                    el.html(incompletestring + reststring).append(buttonout).attr('data-reststring', '');
                } else {
                    el.html(incompletestring + reststring).attr('data-reststring', '');
                }

                return true;
            } else {
                return false;
            }
        };

        function truncToggle(el, string, trunc) {
            if (el.attr('data-reststring')) {
                truncOut(el, string);
            } else {
                truncIn(el, string, settings.trunc);
            }
        }



        // Actions
        // =======
        switch(action) {
            // Show
            // ----
            case "show":
                el.each(function(index, el) {
                    truncOut($(this), $(this).html());
                });
                break;

            // Hide
            // ----
            case "hide":
                el.each(function(index, el) {
                    truncIn($(this), $(this).html(), settings.trunc);
                });
                break;

            // Toggle
            // ------
            case "trunctoggle":
                el.each(function(index, el) {
                    truncToggle($(this), $(this).html(), settings.trunc);
                });
                break;

            // Default (as Hide)
            // -----------------
            default:
                el.each(function(index, el) {
                    truncIn($(this), $(this).html(), settings.trunc);
                });
        }

        // Toggle Actions
        // ==============
        $(document).on('click', '[data-toggle="donaldtrunc"] button', function(event){
            el = $(this).parent();
            string = el.html();
            truncToggle(el, string, settings.trunc);
        });

    };
}(jQuery));

