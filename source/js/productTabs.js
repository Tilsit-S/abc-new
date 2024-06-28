
(function () {
    const tabs =  Array.prototype.slice.apply(document.querySelectorAll('.tabs__item'));
    const content =  Array.prototype.slice.apply(document.querySelectorAll('.tabs__content-item'));
    
    document.getElementById('product-tabs').addEventListener('click', e => {
        if (e.target.classList.contains('tabs__item')) {
            let tabSelect = tabs.indexOf(e.target);
            tabs.map( item => item.classList.remove('active'));
            tabs[tabSelect].classList.add('active');
            
            content.map( content => content.classList.remove('active'));
            content[tabSelect].classList.add('active');
        }
    })
})();
