// ==UserScript==
// @name         KiiteCafeCustom
// @namespace    https://github.com/naminan/
// @version      0.1
// @description  KiiteCafeに動画再生数とCafe人数を表示します
// @author       nami
// @match        https://cafe.kiite.jp/pc
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cafe.kiite.jp
// @grant        none
// @updateURL    https://github.com/naminan/kiite-util/raw/main/src/kiitecafe.user.js
// @downloadURL    https://github.com/naminan/kiite-util/raw/main/src/kiitecafe.user.js
// ==/UserScript==

(function () {
    'use strict';
    if (!window.CafeMusic.prototype.update_now_playing_info_) {
        window.CafeMusic.prototype.update_now_playing_info_ = window.CafeMusic.prototype.update_now_playing_info
        window.CafeMusic.prototype.update_now_playing_info = function (t) {
            t.artist_name += ' ' + Number(t.baseinfo.view_counter).toLocaleString() + '再生';
            this.update_now_playing_info_(t)
        }
        const peopleDiv = document.createElement('div')
        window.CafeUsers.prototype.plot_users_ = window.CafeUsers.prototype.plot_users
        window.CafeUsers.prototype.plot_users = function (t) {
            peopleDiv.innerHTML　= '<i class="material-icons" style="font-size:13px;margin-right:3px;">account_circle</i>' + this.users.length
            this.plot_users_()
        }
        document.getElementsByClassName("cafe_users")[0].appendChild(peopleDiv)
        peopleDiv.style.position = 'absolute'
        peopleDiv.style.right = '0px'
        peopleDiv.style.bottom = '0px'
        peopleDiv.style.background = 'black'
        peopleDiv.style.padding = '2px 4px'
        peopleDiv.style.opacity = '0.3'
        peopleDiv.style.display = 'inline-flex'
        peopleDiv.style['font-size'] = '12px'
    }
})();
