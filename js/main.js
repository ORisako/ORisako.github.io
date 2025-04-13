//ヘッダーとフッターの共通化
const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "/include/header.html", true);
includeHeader.onreadystatechange = function () {
  if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHTML = includeHeader.responseText;
    const header = document.querySelector("#header");
    header.insertAdjacentHTML("afterbegin", headerHTML);
    
    // ヘッダーのインクルード完了後にメニューの開閉処理を設定
    setupMenuToggle();
  }
};
includeHeader.send();

const includeFooter = new XMLHttpRequest();
includeFooter.open("GET", "/include/footer.html", true);
includeFooter.onreadystatechange = function () {
  if (includeFooter.readyState === 4 && includeFooter.status === 200) {
    const footerHTML = includeFooter.responseText;
    const footer = document.querySelector("#footer");
    footer.insertAdjacentHTML("afterbegin", footerHTML);
  }
};
includeFooter.send();

//メニューの開閉
function setupMenuToggle() {
    const logoWrapper = document.querySelector('.g-nav__logo__wrapper');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const closeButton = document.querySelector('.navbar-toggler-pc');
    const gNav = document.querySelector('.g-nav');
    const navText = document.querySelector('.g-nav__txt');

    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
        }
        const html = document.documentElement;
        if (html.classList.contains('js_toggle_open')) {
            html.classList.remove('js_toggle_open');
            navbarCollapse.classList.remove('show');
            navText.textContent = 'Open';
        } else {
            html.classList.add('js_toggle_open');
            setTimeout(() => {
                navbarCollapse.classList.add('show');
            }, 200);
            navText.textContent = 'Close';
        }
    }

    // メニュー外のクリックを検知
    document.addEventListener('click', function(e) {
        const html = document.documentElement;
        if (html.classList.contains('js_toggle_open') && 
            !gNav.contains(e.target) && 
            e.target !== logoWrapper) {
            toggleMenu();
        }
    });

    if (logoWrapper) {
        logoWrapper.addEventListener('click', toggleMenu);
    }

    if (closeButton) {
        closeButton.addEventListener('click', toggleMenu);
    }
}

// ページトップボタンの機能
document.addEventListener('DOMContentLoaded', function() {
    const pagetop = document.querySelector('.pagetop');
    if (pagetop) {
        pagetop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

