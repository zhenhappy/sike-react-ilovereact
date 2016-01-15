// Logo动画
function animateLogo() {
  TweenMax.fromTo("#react-logo",2,
    { // from
      css: {
        y: "-30px",
      }
    },{ // to
      css: {
        y: "30px",
      },
      repeat: -1, // 永久重复动画的选项
      yoyo: true, // 反转、重新运行动画的选项
      ease: Power2.easeInOut
    }
  );
}
// Android机器人动画
function animateRobot() {
  var t = new TimelineMax({repeat: -1});
  t.to("#android-robot",0.5,{rotation: "-45deg"})
   .to("#android-robot",0.3,{rotation: "-55deg"})
   .to("#android-robot",0.3,{rotation: "-35deg"})
   .to("#android-robot",0.3,{rotation: "-45deg"});
}
// 更新侧边栏原点
function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.getAttribute('href'));
    var sectionTop = section.getBoundingClientRect().top  + ( window.pageYOffset || section.scrollTop )  - ( section.clientTop  || 0 )
    var sectionBottom = section.getBoundingClientRect().left + ( window.pageXOffset || section.scrollLeft ) - ( section.clientLeft || 0 );

    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}
window.onload = function() {
  animateLogo();
  animateRobot();
};
// // 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  // ...
  updateSliderControl();
}
// // 当页面首次加载的时候更新 slider
window.onload = function() {
  // ...
  updateSliderControl();
};
