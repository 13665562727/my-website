document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('表单已提交，我们将尽快与您联系。');
            form.reset();
        });
    });
});