<template>
	<div></div>
</template>

<script>
//通过公众号授权，向服务端获取有效的token
//当客户端没有token或者服务端返回401后，所有请求都会被重定向到此组件
/*let redirect_uri = window.location.href;
let state = 'hdllwebstate';
console.log('redirect_uri:',redirect_uri)*/
import Auth from "@/services/others/auth.js";
export default {
  mounted() {
    let { session } = this.$myStorage;
    var code = this.getCodeString();
    if (code) {
      let refer_id = session.get("refer_id");
      var auth = new Auth();
      auth
        .getToken({
          code: code,
          type: 1,
          refer_id: refer_id
        })
        .then(res => {
          console.log(res, 9990);
          if (res.code == 0) {
            session.set("token", res.data.token);
            if (this.$route.query.redirect) {
              this.$router.push({ path: this.$route.query.redirect });
            } else {
              this.$router.push({ path: "/" });
            }
          }
        })
        .catch(function(error) {
          console.log("error", error);
        });
    } else {
      let auth = "https://edu.2b3.cn/api/auth/getauth";
      window.location.href =
        auth + "/?" + "redirect_uri=" + encodeURIComponent(document.URL);
    }
  },
  methods: {
    getCodeString() {
      var href = window.location.href.split("?");
      if (href.length > 1) {
        var r = href[1];
        var t = r.split("=");
        if (t.length > 1) {
          return r.split("=")[1];
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
</script>

