document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-button').addEventListener('click', function() {
        document.querySelector('.sidebar').style.display = 'block';
    });

    document.querySelector('.sidebar li a').addEventListener('click', function() {
        document.querySelector('.sidebar').style.display = 'none';
    });
});
