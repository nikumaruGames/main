// 添加语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 语言数据
    const i18n = {
        en: {
            home: "Home",
            contact: "Contact",
            language: "Language",
            slogan: "Games Create Joy for Life",
            about_title: "About Us",
            about_text: "We create joyful gaming experiences",
            our_games: "Our Games",
            contact_us: "Contact Us",
            colorsort_title: "Color Sort",
            colorsort_desc: "Sort colorful blocks create beautiful patterns. Challenge yourself relax offline",
            roadblast_title: "Road Blast",
            roadblast_desc: "Build bridges for cars to cross the ocean in this challenging puzzle game.",
            download: "Download",
            category_puzzle: "Puzzle",
            category_action: "Action",
            coming_soon: "Coming Soon",
            coming_desc: "New game in development",
            category_coming: "Coming Soon",
            social_media: "Social Media",
            copyright: "© 2025 NikumaruGames All rights reserved."
        },
        zh: {
            home: "首页",
            contact: "业务联络",
            language: "语言",
            slogan: "游戏创造生活乐趣",
            about_title: "关于我们",
            about_text: "我们致力于创造带来欢乐的游戏体验",
            our_games: "我们的游戏",
            contact_us: "联系我们",
            colorsort_title: "颜色排序拼图",
            colorsort_desc: "给彩色方块排序，让它们看起来更和谐",
            roadblast_title: "造了个桥",
            roadblast_desc: "一个充满挑战性的益智游戏，建造桥梁让汽车渡过海洋。",
            download: "立即下载",
            category_puzzle: "益智",
            category_action: "动作",
            coming_soon: "敬请期待",
            coming_desc: "全新游戏正在开发中",
            category_coming: "即将推出",
            social_media: "社交媒体",
            copyright: "© 2025 NikumaruGames All rights reserved."
        },
        ja: {
            home: "ホーム",
            contact: "お問い合わせ",
            language: "言語",
            slogan: "ゲームが人生に喜びを",
            about_title: "私たちについて",
            about_text: "楽しいゲーム体験を創造します",
            our_games: "私たちのゲーム",
            contact_us: "お問い合わせ",
            colorsort_title: "カラーパズル",
            colorsort_desc: "カラフルなブロックを並べると美しい模様が生まれます。オフラインでリラックスして自分に挑戦してみよう",
            roadblast_title: "ロードブラスト",
            roadblast_desc: "この挑戦的なパズルゲームで、車が海を渡るための橋を作ろう。",
            download: "ダウンロード",
            category_puzzle: "パズル",
            category_action: "アクション",
            coming_soon: "近日公開",
            coming_desc: "新作ゲーム開発中",
            category_coming: "近日公開",
            social_media: "ソーシャルメディア",
            copyright: "© 2025 NikumaruGames All rights reserved."
        }
    };

    // 更新页面语言
    function updateLanguage(lang) {
        // 更新所有带data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            el.textContent = i18n[lang][key] || key;
        });
        
        // 更新html标签的lang属性
        document.documentElement.lang = lang;
        
        // 保存到本地存储
        localStorage.setItem('preferredLang', lang);
    }

    // 绑定语言切换事件
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });

    // 初始化语言
    const getBrowserLang = () => {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) { // 所有中文变体
            return 'zh';
        } else if (browserLang.startsWith('ja')) { // 日语
            return 'ja';
        } else { // 其他情况默认英文
            return 'en';
        }
    };
    
    const savedLang = localStorage.getItem('preferredLang') || getBrowserLang();
    updateLanguage(savedLang);

    const bgm = document.getElementById('bgm');
    let isFirstInteraction = true;

    // 用户首次交互后播放音乐
    document.addEventListener('click', function handleFirstInteraction() {
        if (isFirstInteraction) {
            bgm.play().catch(e => console.log('自动播放失败:', e));
            isFirstInteraction = false;
            document.removeEventListener('click', handleFirstInteraction);
        }
    }, { once: true });

    // 尝试自动播放（需要服务器环境）
    bgm.play().catch(() => {
        // 如果自动播放失败，显示提示
        const playHint = document.createElement('div');
        playHint.textContent = 'Click anywhere to play music';
        playHint.style.cssText = `
            position: fixed;
            bottom: 70px;
            right: 20px;
            background: rgba(0,255,136,0.2);
            padding: 8px 15px;
            border-radius: 20px;
            backdrop-filter: blur(5px);
            color: var(--accent);
            font-size: 0.9rem;
            z-index: 9999;
        `;
        document.body.appendChild(playHint);
        setTimeout(() => playHint.remove(), 5000);
    });

    // 添加音乐控制按钮（可选）
    const musicToggle = document.createElement('button');
    musicToggle.id = 'music-toggle';
    musicToggle.textContent = '🎵';
    document.body.appendChild(musicToggle);

    musicToggle.addEventListener('click', () => {
        if (bgm.paused) {
            bgm.play();
            musicToggle.textContent = '🔊';
        } else {
            bgm.pause();
            musicToggle.textContent = '🔇';
        }
    });

    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
    #music-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0,255,136,0.2);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        backdrop-filter: blur(5px);
        color: var(--accent);
        z-index: 9999;
        transition: all 0.3s ease;
    }
    #music-toggle:hover {
        transform: scale(1.2);
        background: rgba(0,255,136,0.3);
    }
    `;
    document.head.appendChild(style);

    // 在DOMContentLoaded事件监听器中添加
    document.addEventListener('click', function(e) {
        // 排除音乐控制按钮的点击
        if (!e.target.closest('#music-toggle')) {
            const clickSound = document.getElementById('clickSound');
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
        }
    });

    // 添加全局点击效果
    const clickStyle = document.createElement('style');
    clickStyle.textContent = `
    body {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="%2300ff88" opacity="0.5"/></svg>') 12 12, auto;
    }

    .click-effect {
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(0,255,136,0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: clickScale 0.5s ease-out;
    }

    @keyframes clickScale {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
    }
    `;
    document.head.appendChild(clickStyle);

    document.addEventListener('click', function(e) {
        const effect = document.createElement('div');
        effect.className = 'click-effect';
        effect.style.left = `${e.pageX - 10}px`;
        effect.style.top = `${e.pageY - 10}px`;
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 500);
    });

    // 添加移动端菜单切换
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        const navItems = document.querySelector('.nav-items');
        const isVisible = navItems.classList.contains('active');
        if (isVisible) {
            navItems.classList.remove('active');
        } else {
            navItems.classList.add('active');
        }
        this.textContent = isVisible ? '☰' : '✕';
    });
    
    // 点击菜单项后自动关闭
    document.querySelectorAll('.nav-items a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-items').style.display = 'none';
                document.querySelector('.hamburger-menu').textContent = '☰';
            }
        });
    });

    // 窗口resize时重置菜单状态
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            document.querySelector('.nav-items').classList.remove('active');
            document.querySelector('.hamburger-menu').textContent = '☰';
        }
    });
}); 