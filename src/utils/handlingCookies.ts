import { ICookiesProps } from "@/common/cookieTypes";

export function setCookies (params: ICookiesProps) {
    if(params.isExpire){
        let date = new Date();
        date.setTime(date.getTime()+(100*60*60*1000));
        document.cookie = params.name + " = " + params.value + "; expires = " +date.toUTCString() + "; path=/";
    } else {
        document.cookie = params.name + " = " + params.value + "; path=/";  
    }
}

export function getCookies (params: ICookiesProps) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + params.name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
}