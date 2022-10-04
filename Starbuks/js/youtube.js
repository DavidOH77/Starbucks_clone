// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "OdFr7wd-DWA",
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: "OdFr7wd-DWA", // 반복 재상할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        // 영상의 준비가되면 함수 실행
        event.target.mute(); //음소거
      },
    },
  });
}
