document.addEventListener('DOMContentLoaded', function() {
    const pagetop = document.querySelector('.pagetop');
    
    // スクロールイベントの監視
    window.addEventListener('scroll', function() {
        // スクロール位置が300px以上で表示
        if (window.pageYOffset > 300) {
            pagetop.classList.add('is-show');
        } else {
            pagetop.classList.remove('is-show');
        }
    });

    // クリックイベントの設定
    pagetop.addEventListener('click', function() {
        // スムーズスクロール
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 