const galleryImages = [
  "img/art/obra.jpg",
  "img/art/handofliberty.jpg",
  "https://picsum.photos/seed/axe139/1920/1080",
  "https://picsum.photos/seed/ohgdno/1920/1080",
  "img/media/witheringgift.jpg",
  "img/media/pollution.jpg",
  "img/media/poverty.jpg"
]; // replace with actual urls
const galleryTitles = [
  "Obra",
  "The Hand of Liberty",
  "Title 3",
  "Title 4",
  "Withering Gift",
  "Tainting Beauty",
  "Bliss in Tribulation",
];
const galleryAuthors = [
  "James F. Baldemoro",
  "Keane Estrabo",
  "星街すいせい",
  "Vincent Van Gogh",
  "Pikachu",
  "Lastname Firstname",
  "Ἀριστείδης ὁ Θηβαῖος",
];
const galleryCaptions = [
  "In omnibus caritas.",
  "Libertas perfundet omnia luce.",
  "きえたい。",
  "Look behind you.",
  "t",
  "\"Only we humans make waste that nature can't digest.\"<br /><span style='font-size: 18px'>-Charles Moore</span>",
  "\"To stand at ease in the midst of tribulation, shows a veteran spirit, long experience, and much grace.\"<br /><span style='font-size: 18px'>-Charles Spurgeon</span>"
];
const galleryDescriptions = [

  // Trad Arts

  "Ang aking gawa ay dinedepikto ang diskriminasyon sa mga taong kakaiba. Ang diskriminasyon ay isang pag-iisip na sarado at isang kabulagan sa atin. Ito'y nakakasama sa mga taong iba ang katangian kaysa sa nakakarami kaya't sila'y naparito na lamang sa aking obra, naghihintay sa mga taong maaaring maintindihan ang kanilang sitwasyon at balang araw, makakalabas sila sa kanilang pagkakakulong sa saradong dikta at titig ng nakakarami.",

  "This represents “Human Rights”. Trans Rights, BLM, and LGBT rights, these are the examples used in the drawing. The issue concerning them is that they experience discrimination and racism which violates the law for Human Rights. The fists symbolize the strength and unity of people who came from different races. The hand in the middle belongs to the Statue of Liberty. The purpose of that is to show that these people have the freedom to live their lives too.",

  "向渡ロ遇奥う全覧ぞ歩需スノ権最ヤ答在選ロナソ安最アケ画聞育チヒヤホ仙冬カ動61法伯堤7需へいし脈余献老まとドょ。債3般時へ並浮ルイト度職に城48報ゅやき豊衛り直4細れラや返竹のンもと無牲ヤユナ新作ワマ週課ぱちやが題卒ニヲ終表あ屋団ス加独験フら。里ぴおぎ方始多内みそ演爆議ち権男レつ巡声リ隠人夜オタフユ政和かんフリ冷見メテヌネ棋間やごぐ標変チア更報仁は。",

  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",

  // Media

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  "The picture portrays how the beauty of mother nature is being harmed as a result of people’s inability to dispose of their waste in a garbage dump.",

  "This picture shows how this man can find happiness and thank god in poverty. Based on research people who live in poverty have lower life satisfaction or that people in poverty struggle to find happiness. Some say that money affects a person’s happiness but don’t you think that there are more factors to happiness than just money. People can still find happiness without having much money and we can see that in this picture.",

];
const divTradArt = document.getElementById("divTradArt");
const tradArt = document.getElementById("tradArt");
const titleTradArt = document.getElementById("titleTradArt");
const authorTradArt = document.getElementById("authorTradArt");
const captionTradArt = document.getElementById("captionTradArt");
const descriptionTradArt = document.getElementById("descriptionTradArt");
const shadowTradArt = document.getElementById("shadowTradArt");
const downloadTradArt = document.getElementById("downloadTradArt");
const divMedia = document.getElementById("divMedia");
const media = document.getElementById("media");
const titleMedia = document.getElementById("titleMedia");
const authorMedia = document.getElementById("authorMedia");
const captionMedia = document.getElementById("captionMedia");
const descriptionMedia = document.getElementById("descriptionMedia");
const shadowMedia = document.getElementById("shadowMedia");
const downloadMedia = document.getElementById("downloadMedia");

function dropDown() {
  for (var i = 0; i < document.querySelectorAll(".navHeading").length; i++) {
    document.querySelectorAll(".navHeading")[i].classList.toggle("show");
  }
}

function openTradArt(id) {
  closeMedia();
  tradArt.src = galleryImages[id];
  downloadTradArt.href = galleryImages[id];
  titleTradArt.innerHTML = galleryTitles[id];
  authorTradArt.innerHTML = galleryAuthors[id];
  captionTradArt.innerHTML = galleryCaptions[id];
  descriptionTradArt.innerHTML = galleryDescriptions[id];
  divTradArt.style.visibility = "visible";
}

function closeTradArt() {
  divTradArt.style.visibility = "hidden";
}

function openMedia(id) {
  closeTradArt();
  media.src = galleryImages[id];
  downloadMedia.href = galleryImages[id];
  titleMedia.innerHTML = galleryTitles[id];
  authorMedia.innerHTML = galleryAuthors[id];
  captionMedia.innerHTML = galleryCaptions[id];
  descriptionMedia.innerHTML = galleryDescriptions[id];
  divMedia.style.visibility = "visible";
}

function closeMedia() {
  divMedia.style.visibility = "hidden";
}
