jQuery("document").ready(function(){
    jQuery(".like").on('click', function(){
            comm = this.name;
            jQuery.ajax({
                type: "GET",

                url: "/videos/videolike/ajax/",

                data:{ "addlike" : comm},

                dataType: "text",

                catch: false,

                success: function(data){

                    jQuery("#video" + comm).html(data);
                  }
              });
      });
  });
