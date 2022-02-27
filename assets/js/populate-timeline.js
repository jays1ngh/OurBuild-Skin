fetch('timeline.json')
    .then(response => response.json())
    .then(data => {

        let output = "";

        for(let timelinedata of data){


            output += `            
                
                    <li class="timeline-post">
                        <span class="timeline-date">${timelinedata.date}</span>
                        <div class="timeline-dot"></div>
                        <i class="icon ${timelinedata.icon}"></i>
                    <div class="wrap-timeline-content"> 
                        <div class="timeline-content">
                            <h2 class="timeline-title">
                                ${timelinedata.timelineTitle}
                            </h2>
                            <div class="timeline-details">
                                <h3>${timelinedata.timelineDetails}
                                </h3>
                            </div> <!-- div-timeline-details-->
                            <div class="timeline-more-text">
                                <p>
                                ${timelinedata.timelineMoreText}
                                </p>
                            </div> <!-- div-more-text -->
                            <p class="timeline-more">More</p>
                        </div> <!-- div-timeline-content-->
                    </div> <!-- div-wrap-timeline-content-->
                    </li>                
            
            `; 
        }

        
        const moduleTimelineUl = document.querySelector(".module-timeline-ul");
        moduleTimelineUl.innerHTML = output;
        
        // Show more text and adds animation to More
        const timelineMoreTextDivs = document.querySelectorAll(".timeline-more-text");
        const timelineMoreButtons = document.querySelectorAll(".timeline-more");


        timelineMoreButtons.forEach(function (timelineMoreButton){

        timelineMoreButton.addEventListener("click", function(){
        // Animate more icon
        timelineMoreButton.classList.toggle('timeline-more-icon');

        // Toggle more/less
        timelineMoreButton.textContent == "More" ? timelineMoreButton.textContent
        = "Less" : timelineMoreButton.textContent = "More";

        // Show more content by clicking more
        timelineMoreButton.previousElementSibling.classList.toggle('timeline-more-text-display');

        if (timelineMoreButton.previousElementSibling.style.maxHeight) {
            timelineMoreButton.previousElementSibling.style.maxHeight = null;
        } else {
            timelineMoreButton.previousElementSibling.style.maxHeight = "fit-content";
        }

    });
    
});

});