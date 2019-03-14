(function(){
'use strict';

document.addEventListener('DOMContentLoaded', funtion(){
    var c = document.getElementById('current-time');
    
    var d = new Date();

    c.innerHTML = d.toTimeString();
});


})();