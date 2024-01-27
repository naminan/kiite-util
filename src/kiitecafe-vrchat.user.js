// ==UserScript==
// @name         KiiteCafe-VRChat
// @namespace    https://github.com/naminan/
// @version      0.3
// @description  KiiteCafeとVRChat連携
// @author       nami
// @match        https://cafe.kiite.jp/pc
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cafe.kiite.jp
// @grant        none
// @updateURL    https://github.com/naminan/kiite-util/raw/main/src/kiitecafe-vrchat.user.js
// @downloadURL    https://github.com/naminan/kiite-util/raw/main/src/kiitecafe-vrchat.user.js
// ==/UserScript==

(function () {
    'use strict';

    function base64Decode(text, charset) {
        return fetch(`data:text/plain;charset=${charset};base64,` + text).then(response => response.text());
    }

    const jsElement = document.createElement('script')
    jsElement.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/reconnecting-websocket/1.0.0/reconnecting-websocket.min.js')
    jsElement.setAttribute('integrity', 'sha512-B4skI5FiLurS86aioJx9VfozI1wjqrn6aTdJH+YQUmCZum/ZibPBTX55k5d9XM6EsKePDInkLVrN7vPmJxc1qA==')
    jsElement.setAttribute('crossorigin', 'anonymous')
    jsElement.setAttribute('referrerpolicy', 'no-referrer')
    document.getElementsByTagName("body")[0].appendChild(jsElement)

    jsElement.onload = () => {
        const commentFormElement = document.getElementById('comment_form')
        const cleanButton = commentFormElement.getElementsByClassName('clean')[0]
        const submitButton = commentFormElement.getElementsByClassName('submit')[0]
        const commentInput = commentFormElement.getElementsByTagName('input')[0]
        const favoriteButton = document.getElementsByClassName('favorite')[0]
        const usersElement = document.getElementsByClassName('users')[0]


        const ws = new ReconnectingWebSocket('ws://localhost:2085')
        ws.onopen = e => {
        }
        ws.onclose = e => {
        }
        ws.onerror = e => {
        }
        ws.onmessage = async e => {
            const json = JSON.parse(e.data)
            console.log('--VRChat--', json.type, json.p ?? '')

            if (json.type == 'rotate') {
                if (json.p != (cafe_users.gesture.my_gesture != '')) {
                    document.getElementsByClassName('rotate')[0].dispatchEvent(new Event('click'))
                }
            }
            if (json.type == 'comment') {
                commentInput.value = await base64Decode(json.p)
            }
            if (json.type == 'comment_submit') {
                commentInput.value = await base64Decode(json.p)
                submitButton.dispatchEvent(new Event('click'))
            }
            if (json.type == 'comment_clean') {
                cleanButton.dispatchEvent(new Event('click'))
            }
            if (json.type == 'favorite') {
                if (json.p.split(':')[0] != cafe_music.sns_song.is_faved) {
                    favoriteButton.dispatchEvent(new Event('click'))
                }
            }
            if (json.type == 'my_pos') {
                //usersElement.dispatchEvent(new Event('click'))
            }
            if (json.type == 'penlight') {
                for (const elm of document.getElementsByClassName('bar_btn')) {
                    if (elm.getAttribute("data-color") == json.p) {
                        elm.dispatchEvent(new Event('click'))
                    }
                }
            }
        }
    }
})()
