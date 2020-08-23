(function() 
{
    document.write('<iframe src="https://' + dd.host + '/captcha/?initialCid=' + encodeURIComponent(dd.cid) + '&hash=' + encodeURIComponent(dd.hsh) + '&cid=' + encodeURIComponent(function (){var r=new RegExp("datadome=([^;]+)");var v=r.exec(document.cookie);if(v!=null)try{return decodeURIComponent(v[1])}catch(e){return v[1];}return null;}()) + '&t=' + encodeURIComponent(dd.t)  + '&referer=' + encodeURIComponent(document.referrer) + ' " width="100%" height="100%" style="height:100vh;" FRAMEBORDER="0" border="0" scrolling="yes"></iframe>');

    var noScriptMessageElement = document.getElementById('cmsg');
    if(noScriptMessageElement) {
        noScriptMessageElement.parentNode.removeChild(noScriptMessageElement);
    }
    var viewPortTag = document.createElement('meta');
    viewPortTag.name = "viewport";
    viewPortTag.content = "width=device-width, initial-scale=1.0";
    var headTags = document.getElementsByTagName('head');
    if(headTags.length > 0) {
        headTags[0].appendChild(viewPortTag);
    }
    var setupCaptchaCookieCallBack = function(event) {
        var data = JSON.parse(event.data);
        document.cookie = data.cookie;

        if (data.url) {
            // Reload the page
            setTimeout(function () {	
                if (typeof ddReloadPageCustom === 'function') {	
                    ddReloadPageCustom();	
                } else {
                    window.location.href = encodeURI(data.url);
                }	
            }, 500);

            if (typeof ddReloadPageCustom !== 'function') {
                setTimeout(function () {
                    window.location.reload();
                }, 750)
            }
        }     
    };
    if (window.addEventListener) {
        window.addEventListener('message', setupCaptchaCookieCallBack, false);
    } else if (window.attachEvent) {
        window.attachEvent('onmessage', setupCaptchaCookieCallBack);
    }
})();
