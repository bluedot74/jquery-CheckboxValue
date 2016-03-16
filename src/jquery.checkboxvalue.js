(function ( $ ) {

    $.fn.checkboxValue = function( options ) {

        var settings = $.extend({
            unchecked_value: "false"
        }, options );

        $(this).on('submit',function(event){
            var form = this;
            $(form).find('input[type="checkbox"]').each(function(){

                if(!$(this).is(':checked')){
                    var name = $(this).attr('name');
                    var input = $("<input>").attr("type", "hidden")
                        .val(settings.unchecked_value)
                        .attr('name',name);
                    $(form).append($(input));
                }
            });

        });

        return this;
    };

}( jQuery ));