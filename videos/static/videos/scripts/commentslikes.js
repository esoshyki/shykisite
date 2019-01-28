jQuery("document").ready(function(){
    jQuery(".comlike").on('click', function(){
            comm = this.name;
            jQuery.ajax({
                type: "GET",

                url: "/videos/comlike/ajax/",

                data:{ "addlike" : comm},

                dataType: "text",

                catch: false,

                success: function(data){

                    jQuery("#" + comm).html(data);
                  }
              });
      });
  });
