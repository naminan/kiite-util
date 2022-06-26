// ==UserScript==
// @name         KiiteCafeCustom
// @namespace    https://github.com/naminan/
// @version      0.3
// @description  KiiteCafeに動画再生数と選曲履歴を表示します
// @author       nami
// @match        https://cafe.kiite.jp/pc
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cafe.kiite.jp
// @grant        none
// @updateURL    https://github.com/naminan/kiite-util/raw/main/src/kiitecafe.user.js
// @downloadURL    https://github.com/naminan/kiite-util/raw/main/src/kiitecafe.user.js
// ==/UserScript==

(function () {
    'use strict';

    if (window.CafeMusic && !window.CafeMusic.prototype.update_now_playing_info_) {
        window.CafeMusic.prototype.update_now_playing_info_ = window.CafeMusic.prototype.update_now_playing_info
        window.CafeMusic.prototype.update_now_playing_info = function (t) {
            t.artist_name += ' ' + Number(t.baseinfo.view_counter).toLocaleString() + '再生';
            this.update_now_playing_info_(t)
        }

        const hisLi = document.createElement('li')
        hisLi.className = 'his'
        hisLi.setAttribute('data-val', 'his')
        hisLi.appendChild(document.createTextNode("選曲履歴"))
        document.getElementById("cafe_menu").childNodes[1].appendChild(hisLi)

        const timetable = [{ "id": 5482960, "video_id": "sm30107114", "title": "【MMD-PV】Dreamer【初音ミク】", "artist_id": 25689813, "artist_name": "TearyPlanet", "start_time": "2022-06-23T03:06:12.000+09:00", "msec_duration": 283000, "published_at": "2016-11-25T20:00:00.000+09:00", "request_user_ids": [19708, 23098], "created_at": "2022-06-23T03:03:20.000+09:00", "updated_at": "2022-06-23T03:03:20.000+09:00", "reasons": [{ "type": "priority_playlist", "user_id": 19708, "list_title": "いちおしリスト", "list_id": "ApbHjNwxQc", "playlist_comment": "あいうえお\nあいうえお", "user": { "id": null, "user_id": 19708, "user_name": "shibatadtm", "nickname": "柴田", "avatar_url": "https://d7209z8dzwjpy.cloudfront.net/avatar/joHO8NNB87XRQlh4cWd7baHhYN7sh333AQiUV5m9.jpg" } }, { "type": "favorite", "user_id": 19708 }, { "type": "favorite", "user_id": 23098 }], "thumbnail": "http://nicovideo.cdn.nimg.jp/thumbnails/30107114/30107114", "new_fav_user_ids": null, "baseinfo": { "video_id": "sm30107114", "title": "【MMD-PV】Dreamer【初音ミク】", "first_retrieve": "2016-11-25T20:00:00+09:00", "description": "初めて描いた音を鳴らし続けるよ曲／詞　七尾  （mylist/31609172)（mylist/34342652）@Teary_Planet動画　　Thanks（mylist/29558857）MIX　　 caco-2（mylist/53915274）@Caco2musicGuitar　もやし（mylist/30397314）@moyasimamire4年振り、ボーカロイド楽曲3作目となります！長い時間を掛けて一同精一杯製作しましたので気に入って頂けると嬉しいです！楽曲mp3＆Off vocal:http://piapro.jp/my_page/?pid=tearyplanet\u0026view=content\u0026order=sdyoutubeに高画質版をアップロード致しました！興味のある方は下記ＵＲＬよりどうぞ！https://www.youtube.com/watch?v=eRp2dYzQVJs【追記】11/27 沢山のご視聴本当に本当に有難うございます！この動画で僕達のミクさんをまた少しでも盛り上げていけたらうれしいです！", "genre": "音楽・サウンド", "length": "4:43", "tags": ["VOCALOID", "MikuMikuDance", "初音ミク", "LAT式ミク", "MMD-PV", "七尾(涙星P)", "Thanks(PV作者）", "caco-2", "もやし(演奏者)", "VOCALOID殿堂入り", "ミクオリジナル曲"], "thumbnail_url": "http://nicovideo.cdn.nimg.jp/thumbnails/30107114/30107114", "view_counter": "144827", "comment_num": "1753", "mylist_counter": "4005", "embeddable": "1", "no_live_play": "0", "user_id": "25689813", "user_icon_url": "https://secure-dcdn.cdn.nimg.jp/nicoaccount/usericon/s/2568/25689813.jpg?1587210126", "user_nickname": "TearyPlanet" }, "colors": ["#DDDDE8", "#4D5AB1", "#101217"], "presenter_user_ids": null, "belt_message": null, "now_message": null, "rotate_action": null, "bpm": 136.0, "display_playlist_link": true }, { "id": 5482940, "video_id": "sm38419315", "title": "解けない夏 / Aqu3ra feat.初音ミク", "artist_id": 83706458, "artist_name": "Aqu3ra", "start_time": "2022-06-23T03:02:35.000+09:00", "msec_duration": 216000, "published_at": "2021-03-14T19:15:00.000+09:00", "request_user_ids": [21987, 19708, 23098], "created_at": "2022-06-23T02:57:19.000+09:00", "updated_at": "2022-06-23T03:04:15.000+09:00", "reasons": [{ "type": "priority_playlist", "user_id": 21987, "list_title": "ゆうるさんのプレイリスト-20220623", "list_id": "FfKsB89YaW" }, { "type": "favorite", "user_id": 21987 }, { "type": "favorite", "user_id": 19708 }, { "type": "favorite", "user_id": 23098 }], "thumbnail": "http://nicovideo.cdn.nimg.jp/thumbnails/38419315/38419315.84270425", "new_fav_user_ids": [19488, 23867, 18947, 24410, 24406, 24162], "baseinfo": { "video_id": "sm38419315", "title": "解けない夏 / Aqu3ra feat.初音ミク", "first_retrieve": "2021-03-14T19:15:00+09:00", "description": "music：Aqu3ra https://twitter.com/AQU3RA_music illustration ： Y_Yhttps://twitter.com/legacy2outbackボカロ曲マイリス(mylist/64879362)通販 : https://aqu3ra.booth.pm/", "genre": "音楽・サウンド", "length": "3:36", "tags": ["VOCALOID", "初音ミク", "ミクオリジナル曲", "解けない夏", "Aqu3ra", "Y_Y", "お洒落なミクうた", "マイリス巡回推奨", "軌道エレベーター", "VOCALOID殿堂入り"], "thumbnail_url": "http://nicovideo.cdn.nimg.jp/thumbnails/38419315/38419315.84270425", "view_counter": "154705", "comment_num": "646", "mylist_counter": "1469", "embeddable": "1", "no_live_play": "0", "user_id": "83706458", "user_icon_url": "https://secure-dcdn.cdn.nimg.jp/nicoaccount/usericon/s/8370/83706458.jpg?1532002958", "user_nickname": "Aqu3ra" }, "colors": ["#65A1A9", "#234A59", "#0B191E"], "presenter_user_ids": null, "belt_message": null, "now_message": null, "rotate_action": null, "bpm": 100.0, "display_playlist_link": true }]

        const hisDiv = document.createElement('div')
        hisDiv.id = 'cafe_his'
        hisDiv.innerHTML = `<div class="logo_mini">
	<div class="logo_inner">
	  <img src="/assets/logo.png">
	  <div class="logo_cafe">Cafe</div>
	</div>
  </div><div class="inner"><h2>選曲履歴100</h2><div class="detail"></div></div>`
        document.getElementById("cafe").appendChild(hisDiv)

        d3.select("#cafe_menu").selectAll(".his").on("click", function () {
            const t = d3.select(this).attr("data-val")
            if (window.view_ctrl.view == t) {
                return
            }
            window.view_ctrl.update_view(t)
            d3.json("/api/cafe/timetable?limit=100&with_comment=1", function (e) {
                const ids = e.map(e => e.id).join(',')
                const user_ids = e.filter(e => e.reasons[0].type == 'priority_playlist').map(e => e.reasons[0].user_id).join(',')
                d3.json("/api/cafe/rotate_users?ids=" + ids, function (rotate_users) {
                    d3.json("/api/kiite_users?user_ids=" + user_ids, function (users) {

                        let txt = '<ul>'
                        _.each(e, function (song, i) {
                            const elapsedMin = ~~(((Date.now() - Date.parse(song.start_time)) / 1000) / 60)
                            const user = users.find(user => user.user_id == song.reasons[0].user_id) || {}
                            const roteCnt = rotate_users[song.id] ? rotate_users[song.id].length : ''
                            const favCnt = song.new_fav_user_ids ? song.new_fav_user_ids.length : ''
                            txt += `
<li class="${i == 0 ? 'onair' : ''}">
  <div class="thumbnail" style="background-image: url(&quot;${song.thumbnail.replace('http:', '')}&quot;);"></div>
  <div class="info">
    <div class="label_onair">ON AIR</div>
    <div class="start_time">${elapsedMin}分前</div>
    <div class="title">${song.title}</div>
    <div class="artist"><a target="_blank" href="https://radar.kiite.jp/creator/redirect/${song.artist_id}">${song.artist_name}</a></div>
    <div class="rotates${roteCnt ? ' show' : ''}"><b>回</b><span class="count">${roteCnt}</span></div>
    <div class="favs"><span class="new_favs${favCnt ? ' show' : ''}"><span class="new_fav_icon"><i class="material-icons in">favorite</i><i class="material-icons out">favorite</i></span><span class="count">${favCnt}</span></span></div>
  </div>
  <div class="reason${user.user_id ? ' show' : ''}">
    <span class="user_icon" style="background-image: url(&quot;${user.avatar_url}&quot;);"></span>
    <span class="text"><a href="https://kiite.jp/user/${user.user_name}" target="_blank">${user.nickname}</a>さんの<a href="https://kiite.jp/playlist/${song.reasons[0].list_id}" class="priority_playlist" target="_blank">イチ推し</a></span>
  </div>
  <div class="comment_box ${song.reasons[0].playlist_comment ? 'commented' : ''}">
    <div class="comment"><span>${song.reasons[0].playlist_comment && song.reasons[0].playlist_comment.split('\n').join('</span><span>')}</span></div>
  </div>
</li>

`
                        })
                        document.querySelector("#cafe_his .detail").innerHTML = txt + '</ul>'
                    })
                })
            })
        })
        window.view_ctrl.update_view_ = window.view_ctrl.update_view
        window.view_ctrl.update_view = function (t) {
            this.update_view_(t)
            var tt = 'his'
            d3.select("#cafe").classed("view_" + tt, tt === this.view)
        }
        const style = `<style>
#cafe_his {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding: 5px 10px 0px 0px;
    display: none;
    width: 100%;
    height: 100%;
    grid-row: 6/8;
    grid-column: 2/5;
  }

  #cafe_his .logo_mini {
    display: none;
    opacity: 0.7;
    position: absolute;
    left: 0px;
    top: 30px;
    z-index: 40;
    text-align: center;
    height: 100px;
    width: 120px;
  }

  #cafe_his .logo_mini img {
    width: 70px;
  }

  #cafe_his .logo_mini .logo_cafe {
    margin-top: 5px;
    font-size: 10px;
  }

  #cafe_his .inner {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
  }

  #cafe_his h2 {
    font-size: 2em;
    line-height: 1em;
    margin: 40px;
    margin-bottom: 10px;
  }

  #cafe.view_his #cafe_his {
    display: block;
    font-size: 1.1em;
    z-index: 28;
  }

  #cafe.view_his #cafe_menu li.his {
    margin-right: 0px;
    margin-left: 10px;
    color: #ffef00;
    background: rgba(0, 0, 0, 0.5);
    border-left: 4px #ffef00 solid
  }

  #cafe_his .detail {
    background: rgba(0, 0, 0, 0.5);
    padding: 40px;
  }

  #cafe_his .detail li {
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 90px 1fr;
    position: relative;
    margin-bottom: 8px;
  }

  #cafe_his .detail li .thumbnail {
    grid-row: 1/2;
    grid-column: 1/2;
    background-position: center center;
    background-size: 180%;
    border-radius: 20%;
    height: 60px;
  }

  #cafe_his .detail li .info {
    position: relative;
    margin-left: 5px;
    background: rgba(0, 0, 0, 0.8);
    grid-row: 1/2;
    grid-column: 2/3;
  }

  #cafe_his .detail li .label_onair, #cafe_his .detail li .start_time {
    color: #AAA;
    background: #333;
    font-size: .9em;
    line-height: 18px;
    text-align: center;
    z-index: 1;
    display: inline-block;
    margin-left: 15px;
    padding: 2px 4px;
    width: 70px;
  }

  #cafe_his .detail li .label_onair {
    display: none;
    font-size: .8em;
    background: red;
    color: white;
  }

  #cafe_his .detail li.onair .label_onair {
    display: inline-block;
  }

  #cafe_his .detail li.onair .start_time {
    display: none;
  }

  #cafe_his .detail li .info .title {
    display: block;
    font-size: 1.2em;
    line-height: 1.3em;
    padding-top: 5px;
    padding-left: 15px;
  }

  #cafe_his .detail li .info .artist {
    display: block;
    padding-top: 5px;
    padding-left: 15px;
  }

  #cafe_his .detail li .info .artist a {
    color: #AAA
  }

  #cafe_his .detail li .favs {
    display: inline-block;
    padding-left: 15px;
  }

  #cafe_his .detail li .favs .new_favs {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }

  #cafe_his .detail li .favs .new_favs.show .new_fav_icon {
    opacity: 1;
  }

  #cafe_his .detail li .favs .new_favs .new_fav_icon {
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;
    opacity: 0;
  }

  #cafe_his .detail li .favs .new_favs .new_fav_icon i {
    position: absolute;
    font-size: 14px;
    color: #ff33aa;
  }

  #cafe_his .detail li .favs .new_favs .new_fav_icon i.in {
    transform: scale(0.5, 0.5);
    opacity: 1;
  }

  #cafe_his .detail li .favs .new_favs .new_fav_icon i.out {
    opacity: 0.5;
  }

  #cafe_his .detail li .favs .new_favs span.count {
    height: 14px;
    display: inline-block;
    font-size: 1em;
    margin-left: 0.5em;
  }

  #cafe_his .detail li .rotates {
    display: inline-block;
    line-height: 1em;
    z-index: 1;
    text-align: left;
    padding-top: 8px;
    padding-left: 20px;
    width: 80px;
  }

  #cafe_his .detail li .rotates.show b {
    opacity: 1;
    color: #ffef00;
  }

  #cafe_his .detail li .rotates b {
    font-size: 10px;
    font-weight: bold;
    opacity: 0;
  }

  #cafe_his .detail li .rotates span {
    font-size: 1em;
    margin-left: 0.5em;
  }

  #cafe_his .detail li .reason.show {
    display: block;
  }

  #cafe_his .detail li .reason {
    display: none;
    position: relative;
    grid-row: 2/3;
    grid-column: 2/3;
    background: rgba(0, 0, 0, 0.8);
    margin-left: 5px;
    padding: 5px 10px 5px 15px;
    min-height: 2em;
  }

  #cafe_his .detail li .reason .user_icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-position: center center;
    background-size: cover;
  }

  #cafe_his .detail li .reason .user_icon {
    display: inline-block;
  }

  #cafe_his .detail li .reason .text {
    display: inline-block;
    font-size: 1.1em;
    line-height: 1.5em;
    padding: 6px 10px 6px 6px;
    vertical-align: bottom;
  }

  #cafe_his .detail li .reason .text a {
    text-decoration: underline;
  }

  #cafe_his .detail li .reason .text b, #cafe_his .detail li .reason .text a {
    color: #ffef00;
    font-weight: bold;
  }

  #cafe_his .detail li .reason .text a.priority_playlist {
    color: cyan;
  }

  #cafe_his .detail li .comment_box {
    position: relative;
    grid-row: 3/4;
    grid-column: 2/3;
    background: rgba(0, 0, 0, 0.8);
    margin-left: 5px;
    padding: 5px 10px 10px 10px;
  }

  #cafe_his .detail li .comment_box .comment {
    border-radius: 0.3em 0.3em 0.3em 0.3em;
    font-size: 1.1em;
    background: lightcyan;
    padding: 8px;
    color: black;
    line-height: 1.4em;
    /* overflow-y: scroll; */
  }

  #cafe_his .detail li .comment_box {
    display: none;
  }

  #cafe_his .detail li .comment_box.commented {
    display: block;
  }

  #cafe_his .detail li .comment_box .comment span {
    display: block;
    min-height: 1em;
    word-break: break-word;
  }

  @media screen and (max-width: 1050px) {
    #cafe #cafe_his .logo_mini {
      display: block;
    }
    #cafe #cafe_his .inner {
      padding-left: 150px;
    }
  }

  @media screen and (max-width: 900px) {
    #cafe #cafe_his {
      grid-row: 5/7;
      grid-column: 2/3
    }
  }
<style>`
        document.querySelector(`head`).insertAdjacentHTML('beforeend', style)

    }
})();
