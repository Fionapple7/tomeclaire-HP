gsap.timeline()
  .fromTo(".hero__catch",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
  )
  .fromTo(".hero__logo",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
    "-=0.5"
  );

const hamIcon = document.querySelector(".ham-icon");
const hamPanel = document.querySelector(".ham-menu__panel");
const hamLinks = document.querySelectorAll(".ham-menu__panel a");
let menuOpen = false;

// 開くアニメーション
//const openMenu = () => {
  //hamPanel.style.display = "flex"; // 表示切り替え（GSAPでアニメーション）

  //gsap.fromTo(hamPanel,
   // { opacity: 0, y: -30 },
    //{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
 // );

  //menuOpen = true;
//};

// 閉じるアニメーション
//const closeMenu = () => {
  //gsap.to(hamPanel, {
    //opacity: 0,
    //y: -30,
    //duration: 0.4,
   // ease: "power2.in",
   // onComplete: () => {
      //hamPanel.style.display = "none"; // 表示解除
      //menuOpen = false;
    //}
 //});
//};

// ハンバーガーアイコンをクリック
hamIcon.addEventListener("click", () => {
  console.log("ハンバーガーアイコンがクリックされました！");   
  hamPanel.style.display = 'flex';
  gsap.fromTo(hamPanel,
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  );
  console.log("display: flexになりました！");

});

// メニューリンクをクリックしたら閉じる
hamLinks.forEach(link => {
  link.addEventListener("click", () => {
    gsap.to(hamPanel, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        hamPanel.style.display = 'none';
        console.log("📴 メニューリンクがクリックされました → メニューをふわっと閉じました");
      }
    });
  });
});

const closeButton = document.querySelector('.ham-menu__close');
const menuPanel = document.querySelector('.ham-menu__panel');

closeButton.addEventListener('click', () => {
  gsap.to(menuPanel, {
    opacity: 0,
    y: -30,
    duration: 0.4,
    ease: "power2.in",
    onComplete: () => {
      menuPanel.style.display = 'none';
      console.log("❌ ×ボタンがクリックされました → メニューをふわっと非表示に");
    }
  });
});