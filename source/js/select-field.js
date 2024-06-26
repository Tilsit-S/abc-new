
    const button = document.querySelector('#button');
    const content = document.querySelectorAll('#selectList')

    button.addEventListener('click', () => {
        if (content.classList.add('visually-hidden') == true) {
            menu.classList.remove('visually-hidden');
        } else {
            menu.classList.add('visually-hidden');
        }
    })
