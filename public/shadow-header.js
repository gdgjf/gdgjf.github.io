window.onscroll = () => {
    const $mainHeader = document.querySelector('.main-header');

    if (window.scrollY > 0 ) {
        $mainHeader.classList.add('shadow');
    } else {
        $mainHeader.classList.remove('shadow');
    }
}
