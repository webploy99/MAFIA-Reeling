
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/mafia-reeling/id6482852516";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/eb/61/73/eb6173a8-4e96-2c88-2b22-3aaa4adbd74d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d8/37/76/d83776ec-e33e-1ca9-a553-a3341a0235dd/8316812e-5314-4d09-b53f-317b133f00c2_1__U00281_U0029.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c5/d0/e8/c5d0e867-ffbb-d435-f87b-1e805b21ccc7/192bd559-3780-45f8-b0ee-4a44fcd7f3ef_1__U00282_U0029.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/dd/b8/da/ddb8daa4-0cfb-7088-aff0-84c79a225052/cad33a07-113f-4181-8a82-998b7b4b431a_1__U00283_U0029.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

