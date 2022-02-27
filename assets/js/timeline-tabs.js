const tabList = document.querySelector('[role="timeline-tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTimelineTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabContent);

})
    

let tabFocus = 0;
function changeTimelineTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }
    // if the right key is pushed, move to the next tab on the right
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    // if the left key is pushed, move to the next tab on the left
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length -1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
    
}

function changeTabContent(e) {
    const targetTab = e.target;
    const targetContent = targetTab.getAttribute("aria-controls");
    
    const timelineTabContainer = targetTab.parentNode;
    const timelineContainer = timelineTabContainer.parentNode;
    const timelineTabContents = timelineContainer.querySelectorAll('.timeline-tab-content')

    console.log(timelineTabContents);
    timelineTabContents.forEach((timelineTabContent) => timelineTabContent.setAttribute("hidden", true));
    timelineContainer.querySelector([`#${targetContent}`]).removeAttribute('hidden');


}