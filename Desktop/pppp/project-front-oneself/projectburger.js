// 1. 获取元素（完全匹配你的HTML结构，无新增类名）
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menuList = document.querySelector('.catalogue ul');
const menuLinks = document.querySelectorAll('.catalogue ul a');

// 2. 点击汉堡包按钮，切换菜单显示/隐藏
hamburgerBtn.addEventListener('click', function() {
    // 切换active类，控制菜单显示/隐藏
    menuList.classList.toggle('active');
    
    // 切换图标：汉堡包（fa-bars）↔ 叉号（fa-times）
    const icon = this.querySelector('i');
    if (menuList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 3. 可选优化：点击菜单链接后，自动收起菜单（提升手机体验）
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuList.classList.remove('active');
        hamburgerBtn.querySelector('i').classList.remove('fa-times');
        hamburgerBtn.querySelector('i').classList.add('fa-bars');
    });
});

// 4. 可选优化：点击页面其他区域，收起菜单
document.addEventListener('click', function(e) {
    // 点击的不是导航/汉堡包/菜单时，收起菜单
    if (!document.querySelector('.catalogue').contains(e.target) && menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        hamburgerBtn.querySelector('i').classList.remove('fa-times');
        hamburgerBtn.querySelector('i').classList.add('fa-bars');
    }
});