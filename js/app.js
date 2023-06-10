addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');
    const button = document.querySelector('#submit');
    const click = document.querySelector('.clk');
    const mobile = document.querySelector('.nav_mobile');
    const del = document.querySelector('.del svg');
    faqs.forEach(item => {
        item.addEventListener('click' ,(e) => {
            item.classList.toggle('active')
        })
    })

    button.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    click.addEventListener('click', () => {
        mobile.style.display = 'block';
    })

    del.addEventListener('click', () => {
        mobile.style.display = 'none';
    })
})