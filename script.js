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

// 显示隐私政策弹窗
function showPrivacyPolicy() {
  const modal = document.createElement('div');
  modal.className = 'privacy-modal';
  modal.innerHTML = `
    <h2>Privacy Policy</h2>
    <div class="policy-content">
      <!-- 这里添加您的隐私政策内容 -->
      <p>Your privacy policy text goes here...</p>
      <button onclick="closePrivacyModal()">Close</button>
    </div>
  `;
  
  const overlay = document.createElement('div');
  overlay.className = 'privacy-overlay';
  
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  
  overlay.style.display = 'block';
  modal.style.display = 'block';
}

// 关闭弹窗
function closePrivacyModal() {
  document.querySelector('.privacy-modal').remove();
  document.querySelector('.privacy-overlay').remove();
} 