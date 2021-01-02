var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);
  
  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }
  
  if (text) {
    newElement.textContent = text;
  }
  
  return newElement;
};

var addVideo = function(introIndex){
  watchLater.push(introIndex)
}

var watchList = function() {
  elWatchLater.innerHTML = ``;
  var elwatchLaterFragment = document.createDocumentFragment();
  watchLater.forEach(function (watch, index){
    var elWarchLaterItem = elRecommendedTemplet.cloneNode(true);
    
    $_(`.btn-later-js`, elWarchLaterItem).dataset.watchId = index;
    $_(`.recomended-time`, elWarchLaterItem).textContent = watch.time;
    $_(`.recomended-time`, elWarchLaterItem).datetime = watch.time;
    $_(`.recomended-img`, elWarchLaterItem).src = watch.img;
    $_(`.recomended-img`, elWarchLaterItem).width = `250`;
    $_(`.recomended-img`, elWarchLaterItem).height = `150`;
    $_(`.recomended-img`, elWarchLaterItem).srcset = `${watch.img} 1x, ${watch.retina} 2x`;
    $_(`.recomended-title`, elWarchLaterItem).textContent = watch.title;
    $_(`.recomended-views`, elWarchLaterItem).textContent = watch.views;
    $_(`.recomended-ago`, elWarchLaterItem).textContent = watch.ago;
    $_(`.recomended-name`, elWarchLaterItem).textContent = watch.name;
    
    elwatchLaterFragment.appendChild(elWarchLaterItem);
    
  });
  elWatchLater.appendChild(elwatchLaterFragment);
}

var elHeaderButton = document.querySelector(`.site-header__btn`)
var elMenu = document.querySelector(`.site-menu`)
elHeaderButton.addEventListener(`click`, function(){
  elMenu.classList.toggle(`site-menu--open`)
})

var introArray = [
  {
    time:`07:36`,
    img:`img/video-img-1.png`,
    retina:`img/video-img-1@2x.png`,
    title:`Astronomy Or Astrology`,
    views:`240k views`,
    ago:`4 months ago`,
    name:`Food & Drink`,
    introId: `a1`
  },
  {
    time:`02:19`,
    img:`img/video-img-2.png`,
    retina:`img/video-img-2@2x.png`,
    title:`Advertising Outdoors`,
    views:`13k views`,
    ago:`15 days ago`,
    name:`Food & Drink`,
    introId: `a2`
  },
  {
    time:`09:15`,
    img:`img/video-img-3.png`,
    retina:`img/video-img-3@2x.png`,
    title:`Radio Astronomy`,
    views:`1k views`,
    ago:`11 monts ago`,
    name:`Food & Drink`,
    introId: `a3`
  },
  {
    time:`03:40`,
    img:`img/video-img-4.png`,
    retina:`img/video-img-4@2x.png`,
    title:`A Good Autoresponder`,
    views:`45k views`,
    ago:`3 months ago`,
    name:`Food & Drink`,
    introId: `a4`
  },
  {
    time:`04:15`,
    img:`img/video-img-5.png`,
    retina:`img/video-img-5@2x.png`,
    title:`Baby Monitor Technology`,
    views:`80k views`,
    ago:`3 days ago`,
    name:`Dollie Blair`,
    introId: `a5`
  },
  {
    time:`04:15`,
    img:`img/imege-6.png`,
    retina:`img/imege-6@2x.png`,
    title:`A Brief History Of Creation`,
    views:`80k views`,
    ago:`3 days ago`,
    name:`Dollie Blair`,
    introId:`a6` 
  }
];
var recomendedBig = [
  {
    time:`07:36`,
    img:`img/recommend-img-1.png`,
    retina:`img/recommend-img-1@2x.png`,
    title:`Astronomy Or Astrology`,
    views:`240k views`,
    ago:`4 months ago`,
    name:`Food & Drink`,
    recomendedBigId: `b1`
  },
  {
    time:`07:36`,
    img:`img/recommend-img-2.png`,
    retina:`img/recommend-img-2@2x.png`,
    title:`Astronomy Or Astrology`,
    views:`240k views`,
    ago:`4 months ago`,
    name:`Food & Drink`,
    recomendedBigId: `b2`
  },
  {
    time:`07:36`,
    img:`img/recommend-img-3.png`,
    retina:`img/recommend-img-3@2x.png`,
    title:`Astronomy Or Astrology`,
    views:`240k views`,
    ago:`4 months ago`,
    name:`Food & Drink`,
    recomendedBigId: `b3`
  }
]
var recomendedArray = [
  {
    time:`07:36`,
    img:`img/Cover.png`,
    retina:`img/Cover@2x.png`,
    title:`Astronomy Or Astrology`,
    views:`240k views`,
    ago:`4 months ago`,
    name:`Food & Drink`,
    recomendedId: `c1`
    
  },
  {
    time:`02:19`,
    img:`img/cherry.png`,
    retina:`img/cherry@2x.png`,
    title:`Advertising Outdoors`,
    views:`13k views`,
    ago:`15 days ago`,
    name:`Food & Drink`,
    recomendedId: `c2`
  },
  {
    time:`09:15`,
    img:`img/spagety.png`,
    retina:`img/spagety@2x.png`,
    title:`Radio Astronomy`,
    views:`1k views`,
    ago:`11 monts ago`,
    name:`Food & Drink`,
    recomendedId: `c3`
  },
  {
    time:`03:40`,
    img:`img/mandarin.png`,
    retina:`img/mandarin@2x.png`,
    title:`A Good Autoresponder`,
    views:`45k views`,
    ago:`3 months ago`,
    name:`Food & Drink`,
    recomendedId: `c4`
  },
  {
    time:`04:15`,
    img:`img/cake.png`,
    retina:`img/cake@2x.png`,
    title:`Baby Monitor Technology`,
    views:`80k views`,
    ago:`3 days ago`,
    name:`Dollie Blair`,
    recomendedId: `c5`
  },
  {
    time:`04:15`,
    img:`img/Cover.png`,
    retina:`img/Cover@2x.png`,
    title:`A Brief History Of Creation`,
    views:`80k views`,
    ago:`3 days ago`,
    name:`Dollie Blair`,
    recomendedId: `c6`
  }
];
var watchLater = []



var elMainLists = $$_(`.site-content__list`);
var elIntroList = $_(`.intro-js`);
var elRecommendedListBig = $_(`.recomended-big-js`);
var elRecommendedList = $_(`.recomended-js`);
var elWatchLater = $_(`.watch-later-js`);
var elRecommendedTemplet = $_(`.recomended-templete`).content;

elIntroList.innerHTML = ``;
var elIntroFragment = document.createDocumentFragment();
introArray.forEach(function (intro, index){
  var elIntroItem = elRecommendedTemplet.cloneNode(true);
  
  $_(`.btn-later-js`, elIntroItem).dataset.mainId = intro.introId;
  $_(`.recomended-time`, elIntroItem).textContent = intro.time;
  $_(`.recomended-time`, elIntroItem).datetime = intro.time;
  $_(`.recomended-img`, elIntroItem).src = intro.img;
  $_(`.recomended-img`, elIntroItem).width = `250`;
  $_(`.recomended-img`, elIntroItem).height = `150`;
  $_(`.recomended-img`, elIntroItem).srcset = `${intro.img} 1x, ${intro.retina} 2x`;
  $_(`.recomended-title`, elIntroItem).textContent = intro.title;
  $_(`.recomended-views`, elIntroItem).textContent = intro.views;
  $_(`.recomended-ago`, elIntroItem).textContent = intro.ago;
  $_(`.recomended-name`, elIntroItem).textContent = intro.name;
  
  elIntroFragment.appendChild(elIntroItem);
});
elIntroList.appendChild(elIntroFragment);

elRecommendedListBig.innerHTML = ``;
var elRecommendedFragmentbig = document.createDocumentFragment();
recomendedBig.forEach(function (reco, index){
  var elRecoItem = elRecommendedTemplet.cloneNode(true);
  
  $_(`.btn-later-js`, elRecoItem).dataset.recoId = reco.recomendedBigId;
  $_(`.recomended-time`, elRecoItem).textContent = reco.time;
  $_(`.recomended-time`, elRecoItem).datetime = reco.time;
  $_(`.recomended-img`, elRecoItem).src = reco.img;
  $_(`.recomended-img`, elRecoItem).classList.add(`content-item__img-big`);
  $_(`.recomended-img`, elRecoItem).width = `540`;
  $_(`.recomended-img`, elRecoItem).height = `250`;
  $_(`.recomended-img`, elRecoItem).srcset = `${reco.img} 1x, ${reco.retina} 2x`;
  $_(`.recomended-title`, elRecoItem).textContent = reco.title;
  $_(`.recomended-views`, elRecoItem).textContent = reco.views;
  $_(`.recomended-ago`, elRecoItem).textContent = reco.ago;
  $_(`.recomended-name`, elRecoItem).textContent = reco.name;
  
  elRecommendedFragmentbig.appendChild(elRecoItem)
})
elRecommendedListBig.appendChild(elRecommendedFragmentbig);



elRecommendedList.innerHTML = ``;
var elRecommendedFragment = document.createDocumentFragment();
recomendedArray.forEach(function (recomended, index){
  var elRecommendedItem = elRecommendedTemplet.cloneNode(true);
  
  $_(`.btn-later-js`, elRecommendedItem).dataset.dataId = recomended.recomendedId;
  $_(`.recomended-time`, elRecommendedItem).textContent = recomended.time;
  $_(`.recomended-time`, elRecommendedItem).datetime = recomended.time;
  $_(`.recomended-img`, elRecommendedItem).src = recomended.img;
  $_(`.recomended-img`, elRecommendedItem).width = `250`;
  $_(`.recomended-img`, elRecommendedItem).height = `150`;
  $_(`.recomended-img`, elRecommendedItem).srcset = `${recomended.img} 1x, ${recomended.retina} 2x`;
  $_(`.recomended-title`, elRecommendedItem).textContent = recomended.title;
  $_(`.recomended-views`, elRecommendedItem).textContent = recomended.views;
  $_(`.recomended-ago`, elRecommendedItem).textContent = recomended.ago;
  $_(`.recomended-name`, elRecommendedItem).textContent = recomended.name;
  
  elRecommendedFragment.appendChild(elRecommendedItem);
});
elRecommendedList.appendChild(elRecommendedFragment);

watchList()



elIntroList.addEventListener(`click`, function(evt) {
  if (evt.target.matches(`.btn-later-js`)) {
    var elId = evt.target.dataset.mainId;
    introArray.forEach(function (intro, index){
      if (intro.introId === elId) {
        watchLater.push(intro)
        watchList() 
      }
    })
  }
})

elRecommendedListBig.addEventListener(`click`, function(evt) {
  if (evt.target.matches(`.btn-later-js`)) {
    var elId = (evt.target.dataset.recoId);
    recomendedBig.forEach(function (recoBig, index){
      if (recoBig.recomendedBigId === elId){
        watchLater.push(recoBig)
        watchList()
      }
    })
  }
})


elRecommendedList.addEventListener(`click`, function(evt) {
  if (evt.target.matches(`.btn-later-js`)) {
    var elId = (evt.target.dataset.dataId);
    recomendedArray.forEach(function (recocha, index){
      if (recocha.recomendedId === elId){
        watchLater.push(recocha)
        watchList()
      }
    })
  }
})
