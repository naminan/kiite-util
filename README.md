# kiite-util

Kiite Cafe用のTampermonkeyスクリプト

動画再生数とCafe人数を表示します

PCのEdgeとChromeで動作します

## インストール方法
Tampermonkey - Chrome ウェブストア

https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja

「Chromeに追加」をクリックしてTampermonkey をインストールします

https://github.com/naminan/kiite-util/raw/main/src/kiitecafe.user.js

上記のリンクからスクリプトをインストールすると、KiiteCafeページに再生数と人数が表示されます

---

## iPhone用
iPhoneは以下の文字列をブックマークに保存して、Cafeのページを開いた状態で保存したブックマークを押してアラートが表示されれば、次の曲から投稿者名の横に再生数を表示します

ホーム画面から起動するCafeには適用できないです

```javascript
javascript:(function(){var e=window.CafeMonitorOnairVideoinfo.prototype;if(!e.update_){e.update_=e.update;e.update=function(){var n=cafe.onair.now_playing;n.artist_name+=' '+Number(n.baseinfo.view_counter).toLocaleString()+'再生';this.update_()}}alert('投稿者名の横に再生数表示します')})();
```
