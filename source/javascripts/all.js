//= require ./all_nosearch
//= require ./app/_search

(function(){
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
            var elements = $('.toc-wrapper').find('.toc-list-h1, .toc-list-h2, .toc-list-h3')
            for (var i = 0; i < elements.length; i++) {
                var ele = elements[i];
                if (ele.style && ele.style.display === 'none') {
                    ele.style.display = null;
                }
            }
            // console.log('onbeforeprint equivalent');
        } else {
            // console.log('onafterprint equivalent');
        }
    });

})();
