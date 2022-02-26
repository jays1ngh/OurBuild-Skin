const preSiteBtn = document.querySelector(".btn-pre-site");
const onSiteBtn = document.querySelector(".btn-on-site");
const preSiteContent = document.querySelector(".pre-site-content");
const onSiteContent = document.querySelector(".on-site-content");

preSiteBtn.addEventListener('click', () => {
    preSiteContent.classList.toggle('pre-site-content-active');
    onSiteContent.classList.remove('on-site-content-active');
})

onSiteBtn.addEventListener('click', () => {
    onSiteContent.classList.toggle('on-site-content-active');
    preSiteContent.classList.remove('pre-site-content-active');
})