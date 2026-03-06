document.addEventListener("DOMContentLoaded", ()=>{
    const togglebutton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobilemenu = document.querySelector(".navbar .mobile-menu-item");
    togglebutton.addEventListener("click",()=>{
        mobilemenu.classList.toggle("active");
    });
    mobilemenu.addEventListener("click",()=>{
        mobilemenu.classList.toggle("active");
    });
});
document.addEventListener('click', function(e) {
    const togglebutton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobilemenu = document.querySelector(".navbar .mobile-menu-item");
    // 点击的不是导航/汉堡包/菜单时，收起菜单
    if (!document.querySelector('.navbar').contains(e.target) && mobilemenu.classList.contains('active')) {
        mobilemenu.classList.remove('active');
    }
});
