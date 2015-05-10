require.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
    '6to5': 'http://cdnjs.cloudflare.com/ajax/libs/6to5/3.6.5/browser',
       
  }

});



define(['jquery', '6to5'], function ($, babel) {
        $(function(){
                alert(1);
            
        })
    });