
(function () {
    const tabs =  Array.prototype.slice.apply(document.querySelectorAll('.in-features__tabs-item'));
    const content =  Array.prototype.slice.apply(document.querySelectorAll('.in-features__content-item'));
    
    document.getElementById('in-features-tabs').addEventListener('click', e => {
        if (e.target.classList.contains('in-features__tabs-item')) {
            let tabSelect = tabs.indexOf(e.target);
            tabs.map( item => item.classList.remove('active'));
            tabs[tabSelect].classList.add('active');
            
            content.map( content => content.classList.remove('active'));
            content[tabSelect].classList.add('active');
        }
    })
})();
