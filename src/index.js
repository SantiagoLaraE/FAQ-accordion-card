const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
    item.dataset.height = item.offsetHeight;
    item.style.height = '5rem';
});

function closeAccordionItems() {
    accordionItems.forEach(item => {
        item.classList.remove('active');
        item.style.height = '5rem';
    })
}
const openFAQ = (e) => {
    const [accordionItem] = e.path.filter(item => item.tagName == 'DIV')
    .filter(item => item.classList.contains('accordion__item'));
    const itemHeight = parseInt(accordionItem.dataset.height);
    const containsActive = accordionItem.classList.contains('active')

    if (!containsActive) {
        closeAccordionItems();
        accordionItem.classList.add('active');
        accordionItem.style.height = `${itemHeight}px`;
        return
    }

    closeAccordionItems();

}   

accordionItems.forEach(item => item.addEventListener('click', openFAQ, false));