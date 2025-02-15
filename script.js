// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 响应式菜单切换（移动端）

const navItems = document.querySelector('.nav-items');

// 窗口resize时自动隐藏菜单
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navItems.style.display = 'flex';
    } else {
        navItems.style.display = 'none';
    }
}); 