function  isEmptyParam(a) {
            if (a == undefined || a == "") {
                return true
            } else {
                return false
            }
        }
CookieManage = {
	getCookie: function (c) {
            var b = document.cookie;
            var e = c + "=";
            var d = b.indexOf("; " + e);
            if (d == -1) {
                d = b.indexOf(e);
                if (d != 0) {
                    return null
                }
            } else {
                d += 2
            }
            var a = document.cookie.indexOf(";", d);
            if (a == -1) {
                a = b.length
            }
            return unescape(b.substring(d + e.length, a))
        },
        setCookie: function (b, d, a, c) {
            var e = new Date();
            e.setDate(e.getDate() + a);
            window.document.cookie = b + "=" + escape(d) + ";path=/" + ((isEmptyParam(a)) ? "" : ";expires=" + e.toUTCString()) + ((isEmptyParam(c)) ? ";" : ";")
        },
        deleteCookie: function (a) {
            if (CookieManage.getCookie(a)) {
                CookieManage.setCookie(a, "", -1, "")
            }
        }
}

LocalStrManage = {
	setLocalStorage:function(a,b) {
            window.localStorage.setItem(a, b);
        },
        getLocalStorage: function (a) {
            var c = window.localStorage.getItem(a);
            if ( c != null) {
               
                return c;
            } else {
                return "";
            }
               
        
        },
        deleteLocalStorage: function (a) {
            window.localStorage.removeItem(a);
        }
}