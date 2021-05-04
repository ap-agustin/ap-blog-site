const galleryImages = [
  "https://picsum.photos/seed/slgj41/1920/1080",
  "https://picsum.photos/seed/safc4t/1920/1080",
  "https://picsum.photos/seed/axe139/1920/1080",
  "https://picsum.photos/seed/ohgdno/1920/1080"
]; // replace with actual urls
const galleryTitles = [
  "TITLE 1",
  "TITLE 2",
  "TITLE 3",
  "TITLE 4"
];
const galleryAuthors = [
  "John Doe",
  "Firstname Lastname",
  "星街すいせい",
  "Vincent Van Gogh"
];
const galleryCaptions = [
  "Natura non contristatur.",
  "Deus vult.",
  "きえたい。",
  "Blink twice if you're being held hostage."
];
const galleryDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",

  "向渡ロ遇奥う全覧ぞ歩需スノ権最ヤ答在選ロナソ安最アケ画聞育チヒヤホ仙冬カ動61法伯堤7需へいし脈余献老まとドょ。債3般時へ並浮ルイト度職に城48報ゅやき豊衛り直4細れラや返竹のンもと無牲ヤユナ新作ワマ週課ぱちやが題卒ニヲ終表あ屋団ス加独験フら。里ぴおぎ方始多内みそ演爆議ち権男レつ巡声リ隠人夜オタフユ政和かんフリ冷見メテヌネ棋間やごぐ標変チア更報仁は。",

  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?"
];
const divTradArt = document.getElementById("divTradArt");
const tradArt = document.getElementById("tradArt");
const titleTradArt = document.getElementById("titleTradArt");
const authorTradArt = document.getElementById("authorTradArt");
const captionTradArt = document.getElementById("captionTradArt");
const descriptionTradArt = document.getElementById("descriptionTradArt");

function dropDown() {
  for (var i = 0; i < document.querySelectorAll(".navHeading").length; i++) {
    document.querySelectorAll(".navHeading")[i].classList.toggle("show");
  }
}

function openTradArt(id) {
  tradArt.src = galleryImages[id];
  titleTradArt.innerHTML = galleryTitles[id];
  authorTradArt.innerHTML = galleryAuthors[id];
  captionTradArt.innerHTML = galleryCaptions[id];
  descriptionTradArt.innerHTML = galleryDescriptions[id];
  divTradArt.style.display = "flex";
  divTradArt.style.opacity = 1;
}

function closeTradArt(id) {
  divTradArt.style.display = "none";
  divTradArt.style.opacity = 0;
}
