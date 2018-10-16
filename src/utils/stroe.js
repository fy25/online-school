import store2 from 'store2';

var cookie = (store2.cookie = {});
cookie.get = function(cookieName) {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split('; ');
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split('=');
    if (cookieName === arr[0]) {
      return arr[1];
    }
  }
  return '';
};

cookie.set = function(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
};

cookie.clear = function(name) {
  cookie.set(name, '', -1);
};

export default {
  local: store2.local,
  session: store2.session,
  cookie: store2.cookie
}
