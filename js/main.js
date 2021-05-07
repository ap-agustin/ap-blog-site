const galleryImages = [
  "https://picsum.photos/seed/slgj41/1920/1080",
  "https://picsum.photos/seed/safc4t/1920/1080",
  "https://picsum.photos/seed/axe139/1920/1080",
  "https://picsum.photos/seed/ohgdno/1920/1080",
  "https://picsum.photos/seed/ait431/1920/1080",
  "https://picsum.photos/seed/acehr7/1920/1080",
  "https://picsum.photos/seed/135cmi/1920/1080"
]; // replace with actual urls
const galleryTitles = [
  "Title 1",
  "Title 2",
  "Title 3",
  "Title 4",
  "Title 5",
  "Title 6",
  "Title 7",
];
const galleryAuthors = [
  "John Doe",
  "Firstname Lastname",
  "星街すいせい",
  "Vincent Van Gogh",
  "Pikachu",
  "Lastname Firstname",
  "Ἀριστείδης ὁ Θηβαῖος",
];
const galleryCaptions = [
  "Natura non contristatur.",
  "Deus vult.",
  "きえたい。",
  "Look behind you.",
  "Run.",
  "1, 2, 3, 4, 5.",
  "Wait no"
];
const galleryDescriptions = [

  // Trad Arts

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  "Phasellus ullamcorper lacus nulla, et hendrerit tortor consectetur at. Phasellus sagittis luctus justo ac pharetra. Mauris vel tortor fringilla, scelerisque massa a, congue nisl. Pellentesque malesuada arcu odio, sit amet blandit lacus faucibus vitae. Proin varius nibh tellus. Aliquam eleifend eros in hendrerit efficitur. Suspendisse iaculis dapibus sodales. Etiam viverra nisl justo, ut maximus eros viverra viverra. Cras mattis ornare magna.",

  "向渡ロ遇奥う全覧ぞ歩需スノ権最ヤ答在選ロナソ安最アケ画聞育チヒヤホ仙冬カ動61法伯堤7需へいし脈余献老まとドょ。債3般時へ並浮ルイト度職に城48報ゅやき豊衛り直4細れラや返竹のンもと無牲ヤユナ新作ワマ週課ぱちやが題卒ニヲ終表あ屋団ス加独験フら。里ぴおぎ方始多内みそ演爆議ち権男レつ巡声リ隠人夜オタフユ政和かんフリ冷見メテヌネ棋間やごぐ標変チア更報仁は。",

  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",

  // Media

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",

  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",

];
const divTradArt = document.getElementById("divTradArt");
const tradArt = document.getElementById("tradArt");
const titleTradArt = document.getElementById("titleTradArt");
const authorTradArt = document.getElementById("authorTradArt");
const captionTradArt = document.getElementById("captionTradArt");
const descriptionTradArt = document.getElementById("descriptionTradArt");
const shadowTradArt = document.getElementById("shadowTradArt");
const divMedia = document.getElementById("divMedia");
const media = document.getElementById("media");
const titleMedia = document.getElementById("titleMedia");
const authorMedia = document.getElementById("authorMedia");
const captionMedia = document.getElementById("captionMedia");
const descriptionMedia = document.getElementById("descriptionMedia");
const shadowMedia = document.getElementById("shadowMedia");

function dropDown() {
  for (var i = 0; i < document.querySelectorAll(".navHeading").length; i++) {
    document.querySelectorAll(".navHeading")[i].classList.toggle("show");
  }
}

function openTradArt(id) {
  closeMedia();
  tradArt.src = galleryImages[id];
  titleTradArt.innerHTML = galleryTitles[id];
  authorTradArt.innerHTML = galleryAuthors[id];
  captionTradArt.innerHTML = galleryCaptions[id];
  descriptionTradArt.innerHTML = galleryDescriptions[id];
  divTradArt.style.visibility = "visible";
  divTradArt.style.opacity = 1;
}

function closeTradArt() {
  divTradArt.style.opacity = 0;
  divTradArt.style.visibility = "hidden";
}

function openMedia(id) {
  closeTradArt();
  media.src = galleryImages[id];
  titleMedia.innerHTML = galleryTitles[id];
  authorMedia.innerHTML = galleryAuthors[id];
  captionMedia.innerHTML = galleryCaptions[id];
  descriptionMedia.innerHTML = galleryDescriptions[id];
  divMedia.style.visibility = "visible";
  divMedia.style.opacity = 1;
}

function closeMedia() {
  divMedia.style.opacity = 0;
  divMedia.style.visibility = "hidden";
}
