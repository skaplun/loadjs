(function(window){
        var libs = Object.create(null)
        libs['jquery'] = 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'
         
         function createScript(src, callback){
            var s = document.createElement('script');
            document.head.appendChild(s);
            s.addEventListener('load', callback)
            s.src= libs[src];
         }
    
    
         function load(src, callback) {
             if(!src || !Array.isArray(src)) console.log('src must be an array');
             if(!callback) callback = function(){};
             
             src.forEach(function(v){
                createScript(v, callback);
             })
             
         } 
          window.load = load;
          
        
})(window);