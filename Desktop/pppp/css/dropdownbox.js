const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const answer = item.querySelector('.faq-answer');

    item.addEventListener('click', () => {
        const isExpanded = item.classList.contains('active');

        // 先收起所有条目
        faqItems.forEach(otherItem => {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            otherItem.classList.remove('active');
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.padding = '0 20px';
            otherAnswer.style.margin = "0px";
        });

        // 再展开当前条目（如果原本是收起状态）
        if (!isExpanded) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '0px 20px';
            answer.style.margin = "10px";
        }
    });
});