var mleadsnew = 'K17dLlo0GeDOeXT3CQcoU75qqmkzuHIc';var cartinfo = {"country":"BY","prices":{"12233":{"RU":{"price":"990.00","percent":"100","dostavka":"370","old_price":"1980","geo_code":"RU","geo_name":"\u0420\u043e\u0441\u0441\u0438\u044f","currency":"\u0440\u0443\u0431","currency_code":"RUB","description":"","name":"BENTOLIT \u0420\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u043e\u0445\u0443\u0434\u0435\u043d\u0438\u044f"},"UA":{"price":"450.00","percent":"100","dostavka":"50","old_price":"900","geo_code":"UA","geo_name":"\u0423\u043a\u0440\u0430\u0438\u043d\u0430","currency":"\u0433\u0440\u043d","currency_code":"UAH","description":"","name":"BENTOLIT \u0420\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u043e\u0445\u0443\u0434\u0435\u043d\u0438\u044f"},"KZ":{"price":"5990.00","percent":"100","dostavka":"1400","old_price":"11980","geo_code":"KZ","geo_name":"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d","currency":"\u0442\u0435\u043d\u0433\u0435","currency_code":"KZT","description":"","name":"BENTOLIT \u0420\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u043e\u0445\u0443\u0434\u0435\u043d\u0438\u044f"},"AM":{"price":"8824.00","percent":"100","dostavka":"1200","old_price":"17648","geo_code":"AM","geo_name":"\u0410\u0440\u043c\u0435\u043d\u0438\u044f","currency":"\u0434\u0440\u0430\u043c","currency_code":"AMD","description":"","name":"BENTOLIT \u0420\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u043e\u0445\u0443\u0434\u0435\u043d\u0438\u044f"},"GE":{"price":"49.00","percent":"100","dostavka":"20","old_price":"98","geo_code":"GE","geo_name":"\u0413\u0440\u0443\u0437\u0438\u044f","currency":"\u10da\u10d0\u10e0\u10d8","currency_code":"GEL","description":"","name":"BENTOLIT \u0420\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u043e\u0445\u0443\u0434\u0435\u043d\u0438\u044f"},"KG":{"price":"1660.00","percent":"100","dostavka":"600","old_price":"3320","geo_code":"KG","geo_name":"\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f","currency":"\u0441\u043e\u043c","currency_code":"KGS","description":"","name":"BENTOLIT \u0420\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u043e\u0445\u0443\u0434\u0435\u043d\u0438\u044f"},"TJ":{"price":"200.00","percent":"100","dostavka":"10","old_price":"400","geo_code":"TJ","geo_name":"\u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d","currency":"\u0441\u043e\u043c\u043e\u043d\u0438","currency_code":"TJS","description":"","name":"BENTOLIT \u0420\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u043e\u0445\u0443\u0434\u0435\u043d\u0438\u044f"}}},"tel":[]};var footertext = 'ООО «МОНСТР-МЕДИА» ИНН 7701071884<br>ОГРН 1157746018870<br/><a onclick="javascript: cartPolitika();" style="cursor: pointer;">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 </a><br/><a href="http://monsterleads.pro/?utm_source=from_land" target="_blank">MonsterLeads.Pro</a>';function cartFrameInit(params) {
    console.log("init");
    var element = document.getElementById('cart');
    if (element)
        element.parentNode.removeChild(element);

    var product_id = params.product_id || '';
    var type = params.type || '';
    var landing_id = params.landing_id || 0;

    var frame = document.createElement('div');

    frame.style.position = 'fixed';
    frame.style.width = '100%';
    frame.style.zIndex = '1000';

    if (type === 'hunter') {
        frame.id = 'cbHunter';
        frame.style.height = '0%';
        frame.style.bottom = '0px';    
    }
    else {
        frame.id = 'cart';
        frame.style.top = '0px';
        frame.style.height = '100%';
    }

    var iframe = document.createElement('iframe');
    if (type == 'hunter') {
        iframe.id = 'fr_hunter';
        if (params.subtype == 'fast_call'){
            iframe.id = 'fc_hunter';
        }
    } else {
        iframe.id = 'fr_cart';
    }
    ;
    iframe.src = 'http://c.cpam.pro/' + landing_id + '/frame?mleads=K17dLlo0GeDOeXT3CQcoU75qqmkzuHIc&t=' + parseInt(cartStartTime || 0) + '&product_id=' + product_id + (type !== '' ? '&type=' + type : '') + (params.subtype === 'fast_call' ? '&subtype=fast_call' : '') + (params.tel ? '&tel=' + encodeURIComponent(params.tel) : '');
    iframe.style.border = '0px';
    iframe.style.opacity = '1';
    iframe.style.height = '100%';
    iframe.style.width = '100%';

    iframe.style.position = 'absolute';
    if (type !== 'hunter' && type !== 'fast_call') {
        iframe.style.backgroundImage = 'url(http://c.cpam.pro/static/fog.png)';
    }
    if (type == 'bineks'){
        var amount = params.data.amount || '';
        var quantity = params.data.quantity || '1';
        var currency = params.data.currency || 'EUR';
        iframe.src += '&bineks=true' + '&amount=' + amount + '&quantity=' + quantity + '&currency=' +currency;
    }

    iframe.style.display = 'block';
    frame.appendChild(iframe);

    window.document.body.appendChild(frame);
    var receiveMessage = function (event) {

        if ('close-iframe' === event.data) {
            var element = document.getElementById('cart');
            element.parentNode.removeChild(element);
        }

        if (event.data === 'close-call') {
            var element = document.getElementById('cbHunter');
            element.parentNode.removeChild(element);
        }

        if (event.data === 'open-call') {
            var element = document.getElementById('cbHunter');
            element.style.height = '100%';
        }
    };

    window.addEventListener('message', receiveMessage, false);
}
;

function cartProductAdd(product_id, type, data) {
    var data = data || null;
    var params = {
        product_id: (product_id || 0),
        type: (type || 'cart'),
        count: 1,
        landing_id: '50123',
        data: data
    };
    cartFrameInit(params);

}
;﻿var cartOnceSet = false;
var events = {};
cartStartTime = cartTime();
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var mleads = ((window.location.href || '').match(/mleads=([a-zA-Z0-9]+)/) || {0: '', 1: ''})[1];
        if (typeof mleads == 'string' && mleads.length > 0) {
            createCookie('mleads', mleads, 365);
        }
        if (typeof mleadsnew == 'string') {
            createCookie('mleads', mleadsnew, 365);
        }
        cartChangeGeo(cartinfo.country);
        cartSetFooter();
        cartLoadPhones();
        try {
            var inputs = document.getElementsByTagName('input') || [];
        } catch (e) {
            var inputs = new Array;
        }

        if (!inputs)
            return;

        for (var i = 0; i < inputs.length; i++) {
            try {
                var old_class = inputs[i].className || '';
                inputs[i].setAttribute('class', (old_class ? old_class + ' ' : '') + '-metrika-nokeys');
                inputs[i].onpaste = pastedData;
                inputs[i].onclick = function () {
                    sendEvent('count_click_field');
                };
            } catch (e) {
                console.log(e.message);
            }
        }

        window.onclick = function () {
            sendEvent('count_click');
        };

        window.onscroll = function () {
            sendEvent('count_scroll');
        };

        if (!window.customSelect) {
            customSelect = {};
        }

        customSelect.Selector = {};
        customSelect.Selector.getSelected = function () {
            var t = '';
            if (window.getSelection) {
                t = window.getSelection();
            } else if (document.getSelection) {
                t = document.getSelection();
            } else if (document.selection) {
                t = document.selection.createRange().text;
            }
            return t;
        }

        customSelect.Selector.mouseup = function () {
            var st = customSelect.Selector.getSelected();
            if (st != '') {
                sendEvent('count_pick');
            }
        }

        document.onmouseup = customSelect.Selector.mouseup;
    }

};

function rand(min, max) {	// Generate a random integer
    if (max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (min + 1));
    }
}


function getSecondsToday() {
    var now = new Date();

    // создать объект из текущей даты, без часов-минут-секунд
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // перевести в секунды
}

function cartSetFooter() {
    var text = footertext || '';
    classHtml('footer_text', text);
    cartGe('footer_text').innerHTML = text;
}

function cartChangeGeo(geo_code) {

    if (cartinfo.country == geo_code && cartOnceSet == true) {
        return;
    }
    else
        cartinfo.country = geo_code;

    if (typeof cartinfo.prices != 'object') {
        return;
    }

    for (var productId in cartinfo.prices) {
        cartSetPrice(productId, geo_code);
    }
}

function cartLoadPhones() {
    if (typeof cartinfo.tel != 'object')
        return;

    for (var i = 1; i < 6; i++) {
        var tel = cartinfo.tel[i] || '';
        if (tel != '') {
            classHtml('tel' + i, tel);
        }
    }

}

function cartSetPrice(productId, country) {

    var productId = parseInt(productId || 0);
    if (typeof country != 'string')
        return;

    try {
        var priceCountryList = cartinfo.prices[productId] || null;
    } catch (e) {
        console.log(e.message);
        priceCountryList = null;
    }

    if (priceCountryList == null)
        return;
    var res = 0;
    var key = '';
    var first_key = '';
    var priceList = null;

    try {
        for (var key in priceCountryList) {
            res++;
            if(res == 1) {
                first_key = key;
            }
            if (res > 1)
                break;
        }
    } catch (e) {
        console.log(e.message);
    }

    if (res == 1) {
        priceList = priceCountryList[key] || null;
    } else {
        if  (cartinfo.prices[productId][country] == undefined ) {
            priceList = priceCountryList[first_key] || null;
        } else {
            var priceList = priceCountryList[country] || null;
        }
    }

    if (priceList == null) {
        priceList = priceCountryList.RU || null;
        if (priceList == null) {
            priceList = priceCountryList.UA || null;
            if (priceList == null) {
                return;
            }
        }

    }

    if (!cartOnceSet) {

        var countryList = '<select name="country" id="country" class="country select_country" onchange="javascript: cartChangeGeo(this.value);">';
        for (var current_country in priceCountryList) {
            countryList += '<option value="' + priceCountryList[current_country].geo_code + '"' + (priceCountryList[current_country].geo_code == country ? ' selected="selected"' : '') + '>' + priceCountryList[current_country].geo_name + '</option>'
        }
        countryList += '</select>';

        classHtml('country', countryList);
        cartGe('country').innerHTML = countryList;

        cartOnceSet = true;
    }
    priceList.price = parseFloat(priceList.price);
    priceList.dostavka = parseFloat(priceList.dostavka);
    priceList.total = parseFloat(parseFloat(priceList.price + priceList.dostavka).toFixed(2));

    classHtml('price_currency', priceList.currency);
    classHtml('price_only' + productId, parseFloat(priceList.price.toFixed(2)));
    classHtml('price_dostavka' + productId, parseFloat(priceList.dostavka.toFixed(2)));
    classHtml('price_total' + productId, priceList.total);
    classHtml('price_old' + productId, parseFloat(parseFloat(priceList.old_price).toFixed(2)));
    classHtml('price_old_discount' + productId, priceList.percent);
    classHtml('price_old_percent' + productId, '-' + priceList.percent + '%');
    if (document.getElementById('product_name_td') !== null && document.getElementById('product_name_td').innerHTML == '') {
        document.getElementById('product_name_td').innerHTML = priceList.name;
    }
    if (document.getElementById('product_name') !== null && document.getElementById('product_name').innerHTML == '') {
        document.getElementById('product_name').innerHTML = priceList.name;
    }
    if (document.getElementById('product_desc') !== null && document.getElementById('product_desc').innerHTML == '') {
        document.getElementById('product_desc').innerHTML = priceList.description;
    }
    if(typeof wheel === 'object'){
        wheel.oldPrice = parseFloat(parseFloat(priceList.old_price).toFixed(2));
        wheel.currencyPrice = priceList.currency;
        wheel.setPrice();
    }
}

if (document.getElementsByClassName) {

    getElementsByClass = function (classList, node) {
        return (node || document).getElementsByClassName(classList);
    };

} else {

    getElementsByClass = function (classList, node) {
        var node = node || document,
            list = node.getElementsByTagName('*'),
            length = list.length,
            classArray = classList.split(/\s+/),
            classes = classArray.length,
            result = [], i, j
        for (i = 0; i < length; i++) {
            for (j = 0; j < classes; j++) {
                if (list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
                    result.push(list[i]);
                    break
                }
            }
        }

        return result;
    };
}

function classHtml(className, value) {
    var Key;
    for (Key in getElementsByClass(className) || []) {
        if (isNaN(Key))
            continue;
        getElementsByClass(className)[Key].innerHTML = value;
    }
}

function replaceWithByClass(className, value) {
    var length = getElementsByClass(className).length;
    for (var i = 0; i <= length; i++) {
        try {
            document.querySelectorAll(className)[0].parentNode.replaceChild(document.createTextNode(value), document.querySelectorAll(className)[0]);
        } catch (e) {
        }
    }
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 3600 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, '', -1);
}

function cartCount(obj) {
    var count = 0;
    if (typeof obj != 'object')
        return count;
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            ++count;
        }
    }
    return count;
}
var countOrder = 0;
function cartTelCheck(id, show_errors, t, e) {
    var div = document.getElementById(id) || null;
    if (div == null)
        return true;
    if(countOrder > 0)
        return false;
    var phone = (div.value || '').replace(/[^0-9]+/, '');

    var phoneLen = phone.length || 0;
    if (phoneLen < 5 || typeof phone != 'string') {
        if (show_errors == true) {
            if (navigator && navigator.language) {
                if (navigator.language == 'pl') {
                    alert("Proszę podać poprawny numer telefonu.");
                } else if(navigator.language == 'ru') {
                    alert("Укажите корректный номер телефона.");
                } else if(navigator.language == 'uk') {
                    alert("Укажите корректный номер телефона.");
                } else {
                    alert("Please enter a valid phone number.");
                }
            } else {
                alert("Please enter a valid phone number.");
            }
        }
        return false;
    }

    if (cartStartTime > 0) {
        var timeLeft = (cartTime() - cartStartTime) || 0;
        t.action += '&t=' + timeLeft;
    }
    try {
        var cw = parseInt(window.screen.width || 0) || 0;
        var ch = parseInt(window.screen.height || 0) || 0;
        t.action += '&s=' + cw + 'x' + ch;
        console.log('&s=' + cw + 'x' + ch);
    } catch (e) {
        console.log(e.message);
    }

    if (typeof yandex_goal == 'function') {
        yandex_goal();
        for (var i = 0; i < 200; i++) {
        }
    }
    countOrder++;
}


function cartGe(el) {
    return document.getElementById(el) || {};
}

function cartSubmit(e) {
    console.log(e);
}

function cartPolitika() {
    //window.open('http://proml.net/politika.html');
    cartIframe('https://politika.discountsalepro.com');

}

function cartOformlenie() {
    //window.open('http://proml.net/uslovie.html');
    cartIframe('http://proml.net/uslovie.html');
}

function cartIframe(src) {
    var modal_body = '<button type="button" class="close" style="position:absolute;right:6px;top:0;background:transparent;border:none;color:#888;font-size:32px;cursor:pointer;">×</button>' +
        '<div class="politika-body">' +
        '<iframe src="' + src + '" style="width:100%; height: 490px;"></iframe>' +
        '</div>';

    if ($('#politika_modal').length === 0) {
        $('body').prepend('<div id="politika_modal" style="display: none;position: fixed;width:60%;padding:30px 10px 10px;text-align: center; top:10%;left:50%;z-index:99999;-webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);-o-transform: translateX(-50%);transform: translateX(-50%);background:#fff;border-radius:10px;">' +
            modal_body +
            '</div>'
        );
    } else {
        $('#politika_modal').html(modal_body);
    }

    if (!$("body").find("#TB_overlay").is("div")) {
        $("body").append("<div id='TB_overlay' style='position:fixed;z-index:1000;top:0;left:0;height:100%;width:100%;background-color:#000;opacity:0.55;'></div>");
        $("body").css('overflow', 'hidden');
    }

    $('#politika_modal').fadeIn();

    $(".close").click(function () {
        $("#politika_modal").fadeOut();
        $("#TB_overlay").remove();
        $("body").css('overflow', '');
    })
}

function cartTime() {
    return (new Date().getTime()) || 0;
}

function pastedData() {
    var land_forms = document.getElementsByTagName('form');
    for (var k = 0; k < land_forms.length; k++) {
        land_forms[k].action = land_forms[k].action + '&copypaste=1';
    }
}

function sendEvent(event_type) {
    if (events[event_type] != 1) {
        events[event_type] = 1;
        sendBaseEvent(event_type);
    }
}

var markerSF = true;

function countSF() {
    frameCartSF();
    markerSF = false;
}

function funcAddSF() {
    var iframe = document.getElementsByTagName('iframe');

    $.each(iframe, function (key, value) {
        var iWindow = iframe[key].contentWindow;
        var doc = iframe[key].contentDocument || iframe[key].contentWindow.document;
        var button = $(doc).find('button.shopify-buy__btn');

        button.on('click', function (event) {
            if (event.target.textContent == 'ADD TO CART') {
                if (markerSF) {
                    countSF();
                }
                //console.log('AddToCart');
                fbq('track', 'AddToCart');
            }
        })
    });
}

function frameCartSF() {
    var frame = $("iframe[name=frame-cart]").contents();
    $(frame.get(0)).on('click', 'button.shopify-buy__btn', function (event) {
        //console.log('SubLead');
        fbq('track', 'SubLead');
    });
}

function creatModalDesc() {

    $(document).on("mouseenter", "#100500-popup-content-100500 button", function(event) {
        $(this).attr('style', 'float: initial !important;background: rgba(135,135,135,1) !important;background: -moz-linear-gradient(top, rgba(135,135,135,1) 0%, rgba(246,246,246,1) 50%, rgba(255,255,255,1) 100%) !important;background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(135,135,135,1)), color-stop(50%, rgba(246,246,246,1)), color-stop(100%, rgba(255,255,255,1))) !important;background: -webkit-linear-gradient(top, rgba(135,135,135,1) 0%, rgba(246,246,246,1) 50%, rgba(255,255,255,1) 100%) !important;background: -o-linear-gradient(top, rgba(135,135,135,1) 0%, rgba(246,246,246,1) 50%, rgba(255,255,255,1) 100%) !important;background: -ms-linear-gradient(top, rgba(135,135,135,1) 0%, rgba(246,246,246,1) 50%, rgba(255,255,255,1) 100%) !important;background: linear-gradient(to bottom, rgba(135,135,135,1) 0%, rgba(246,246,246,1) 50%, rgba(255,255,255,1) 100%) !important;border: 2px solid #fff !important;border-radius: 2px !important;width: 138px !important;font-size: 24px !important; font-weight: bold !important; cursor: pointer !important; height: 34px !important; line-height: 25px !important;');
    });
    $(document).on("mouseleave", "#100500-popup-content-100500 button", function(event) {
        $(this).attr('style', 'float: initial !important;background: rgba(255,255,255,1) !important;background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(50%, rgba(246,246,246,1)), color-stop(100%, rgba(135,135,135,1))) !important;background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#878787\', GradientType=0 ) !important;border: 2px solid #fff !important;border-radius: 2px !important;width: 138px !important;font-size: 24px !important; font-weight: bold !important; cursor: pointer !important; height: 34px !important; line-height: 25px !important;');
    });
    $('html').append('<div id="100500-popup-100500" style="display: none !important; width:100% !important;min-height:100% !important;background-color: rgba(0,0,0,0.85) !important;overflow:hidden !important;position:fixed !important;top:0px !important; z-index: 9999999999999;">\n' +
        '    <div id="100500-popup-content-100500" style="display:none !important; width: 250px !important; height:378px !important; background: url(http://files.exsale.pro/22112017/black-friday-desc.jpg) center; background-repeat: no-repeat; background-size: contain;position: fixed !important;top: 50% !important;left: 50% !important;margin-left: -125px !important;margin-top: -189px !important;background-color: #c5c5c5 !important; box-shadow: 0px 0px 10px #000 !important; z-index: 9999999999999;font-family: Areal !important; font-size: 17px !important;line-height: 17px !important;">\n' +
        '        <div style="padding: 25px !important;position: relative !important;min-height: 324px !important;">\n' +
        '            <div style="position: absolute !important;right: 12px !important;top: 11px !important;width: 30px !important;height: 30px !important;background: #000000 !important;border: 2px solid #ffffff !important; text-align: center !important;line-height: 33px !important;"><a href="javascript:closeModal();" style="vertical-align: middle !important;text-decoration: none; color: #ffffff !important;width: 100% !important;height: 100% !important;display: block !important;font-weight: bold !important;font-size: 24px !important;line-height: 27px !important;"><span style="background: url(http://files.exsale.pro/22112017/text.png) center !important; background-repeat: no-repeat !important;display: inline-block !important;background-position: -32px -1px !important;width: 17px !important;height: 15px !important;margin-top: 0px !important;"></span></a></div>\n' +
        '            <div style="position: relative !important; right: 0 !important; top: 225px !important;text-align: center !important;">\n' +
        '                <button style="float: initial !important;background: rgba(255,255,255,1) !important;background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(50%, rgba(246,246,246,1)), color-stop(100%, rgba(135,135,135,1))) !important;background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 50%, rgba(135,135,135,1) 100%) !important;filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#878787\', GradientType=0 ) !important;border: 2px solid #fff !important;border-radius: 2px !important;width: 138px !important;font-family: MONOSPACE !important;font-size: 24px !important; font-weight: bold !important; cursor: pointer !important; height: 34px !important; line-height: 25px !important;" onclick="closeModal();"><span style="background: url(http://files.exsale.pro/22112017/text.png) center !important; background-repeat: no-repeat !important; display: inline-block !important;background-position: 0 0 !important;width: 29px !important;height: 17px !important;"></span></button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>');
}

function createModalMobile() {
    $('html').append('<div id="100500-popup-100500" style="display: none !important; width: 100% !important; height: 100% !important;max-width: 700px !important;margin: auto;overflow:hidden !important;position:fixed !important;top:0px !important; z-index: 9999999999999;width:100% !important;min-height:100% !important;" onclick="closeModal();"><img src="http://files.exsale.pro/22112017/black-friday-mob.jpg" style="width: 100% !important; cursor: pointer !important;" alt=""></div>');
}

function showModal() {
    $('#100500-popup-100500').fadeIn(500);
    if ($('#100500-popup-content-100500').length > 0) {
        setTimeout(function () {
            $('#100500-popup-content-100500').fadeIn(500);
        }, 500);
    }
}

function closeModal() {
    $('#100500-popup-100500').fadeOut();
    setTimeout(function () {
        $('#100500-popup-100500').remove();
    }, 2500);
}

function visibleModal() {
    if (window.innerWidth <= 700) {
        createModalMobile();
    } else {
        creatModalDesc();
    }
    setTimeout(showModal(), 6000);
}

function timerModal() {
    var time = cartTime();

    // @todo попап работает только до пятница, 1 декабря 2017 г., 23:59:59 GMT+02:00
//        Date.parse('Wed Nov 23 2017 23:59:59 GMT+0200 (Финляндия (зима))')
    var startTime = 1511474399000;
//        Date.parse('Friday, 1 December 2017, 23:59:59')
    var endTime = 1512165599000;

    if (time > startTime && time <= endTime) {
        visibleModal();
    }
}
function sendBaseEvent(event) {var http = new XMLHttpRequest();var url = "https://c.cpam.pro/50123/cross_query?&code=&geo_id=4&subid_id=&subid2_id=&subid3_id=&subid4_id=&subid5_id=&event_trigger=true&unique=&event=" + event;var params = "";http.open("POST", url, true);http.onreadystatechange = function(){if (http.readyState == 4) {}};http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");http.send(params);};try { (function (d, w, c) {
            (w[c] = w[c] || []).push(function() { 
                try { w.yaCounter25634507 = new Ya.Metrika({id:25634507, clickmap:true, webvisor: true, accurateTrackBounce:true, ut:"noindex"});  } catch(e) { } }); 
                var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { 
                    n.parentNode.insertBefore(s, n); 
                 }; 
                 s.type = "text/javascript"; 
                 s.async = true; 
                 s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); } catch(e) {
            console.log("problem w y.metrika"+e.message); 
         };