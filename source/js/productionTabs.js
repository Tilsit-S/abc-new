
(function () {
    const tabs =  Array.prototype.slice.apply(document.querySelectorAll('.tabs-block__production-tab'));
    const content =  Array.prototype.slice.apply(document.querySelectorAll('.tabs-block__production-content-item'));
    
    document.getElementById('production-tabs').addEventListener('click', e => {
        if (e.target.classList.contains('tabs-block__production-tab')) {
            let tabSelect = tabs.indexOf(e.target);
            tabs.map( item => item.classList.remove('active'));
            tabs[tabSelect].classList.add('active');
            
            content.map( content => content.classList.remove('active'));
            content[tabSelect].classList.add('active');
        }
    })
})();
