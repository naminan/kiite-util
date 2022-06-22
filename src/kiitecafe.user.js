// ==UserScript==
// @name         KiiteCafeCustom
// @namespace    https://github.com/naminan/
// @version      0.2
// @description  KiiteCafeに動画再生数を表示します
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
    }
})();
