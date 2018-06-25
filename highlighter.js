(function($){
    $.fn.highlighter = function(word = '', settings){

        var options = $.extend({           
            color: "red",
            backgroundColor: "white",
        }, settings );

        this.each(function(){
            var element = $(this);
            var text = element.text();
            var highlighted = text.replace(new RegExp(word, 'g'), '<span style="color:'+ options.color +'">'+ word +'</span>');
            element.html(highlighted);
        });
    }
})(jQuery);