const playList = {
  playList: "1",
  playListInfo: {
    title: "Hip-hop hits",
    coverImageUrl: "./image/main1.jpg",
    totalInfo: {
      totaltrackCount: 4,
      totaltracksDurationInSec: 733
  }
},
  tracks: [
    {
      trackId: "11",
      trackCoverImageUrl: "./image/eminem.jpg",
      artistName: "Eminem",
      trackTitle: "Rap God",
      trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
      trackDurattion: 1,
      isHot: false,
    },
    {
      trackId: "12",
      trackCoverImageUrl: "./image/cent50.jpg",
      artistName: "50cent",
      trackTitle: "In da club",
      trackFileUrl: "50 Cent In Da Club.mp3",
      trackDurattion: 1,
      isHot: true,
    },
  ],
};

// const playListTitleEl = document.createElement("h1");
// playListTitleEl.append(playList.title);
// document.body.append(playListTitleEl);

// const playListCoverEl = document.createElement("img");
// playListCoverEl.src = playList.coverImageUrl;
// document.body.append(playListCoverEl);

const tracksListEl = document.createElement("ul");

// const track_1_El=document.createElement("li");
// track_1_El.append(playList.tracks[0].artistName + " :" + playList.tracks[0].trackTitle);

// const track_2_El=document.createElement("li");
// track_2_El.append(playList.tracks[1].artistName + " :" + playList.tracks[1].trackTitle);

// tracksListEl.append(track_1_El,track_2_El);
// document.body.append(tracksListEl);

function renderPlayList(anyPlayList){
  renderPlayListHeader(anyPlayList.playListInfo);
  renderTrack(anyPlayList.tracks[0]);
  renderTrack(anyPlayList.tracks[1]);
}

function renderPlayListHeader(anyPlayListInfo){
  const playListTitleEl = document.createElement("h1");
playListTitleEl.append(anyPlayListInfo.title);
document.body.append(playListTitleEl);

const playListCoverEl = document.createElement("img");
playListCoverEl.src = anyPlayListInfo.coverImageUrl;
document.body.append(playListCoverEl);
}

function renderTrack(anyTrack){
  const trackEl=document.createElement("div");
  trackEl.append(anyTrack.artistName + " :" + anyTrack.trackTitle);
}

renderPlayList(playList)