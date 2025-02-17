const translations = {
    en: {
        home: "Home",
        contact: "Contact",
        language: "Language",
        slogan: "Games Create Joy for Life",
        our_games: "Our Games",
        contact_us: "Contact Us",
        about_title: "About Us",
        about_text: "We will create better gaming experiences and thank you for your support!",
        privacy_policy: "Privacy Policy",
        privacy_title: "Privacy Policy",
        back_home: "Back to Home",
        // 添加所有其他翻译...
    },
    zh: {
        home: "首页",
        contact: "业务联络",
        language: "语言",
        slogan: "游戏创造生活乐趣",
        our_games: "我们的游戏",
        contact_us: "联系我们",
        about_title: "关于我们",
        about_text: "我们会创造更好的游戏体验，感谢你们的陪伴！",
        privacy_policy: "隐私政策",
        privacy_title: "隐私政策",
        back_home: "返回首页",
        // 中文翻译...
    },
    ja: {
        home: "ホーム",
        contact: "お問い合わせ",
        language: "言語",
        slogan: "ゲームが人生に喜びを",
        our_games: "私たちのゲーム",
        contact_us: "お問い合わせ",
        about_title: "私たちについて",
        about_text: "より良いゲーム体験を創造し、皆さんのご支援に感謝します！",
        privacy_policy: "プライバシーポリシー",
        privacy_title: "プライバシーポリシー",
        back_home: "ホームに戻る",
        // 日文翻译...
    }
};

let currentLang = 'zh';

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLang][key];
    });
}

document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = link.getAttribute('data-lang');
        updateLanguage();
    });
}); 