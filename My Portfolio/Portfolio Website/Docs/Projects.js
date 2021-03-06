"use strict";


const listProjects =                    //Hardcoding Project Units; Easier to add more later
[
  //[Link, Animated img]
    ["https://github.com/LazJac/MyResume/tree/master/Resume%20Website","Docs/Videos/Resume_Anim.gif"]
];

/*ex  </br></br><a href="https://github.com/LazJac" target='_blank'>
                <img  onmouseenter='ProjectVideoController(true,"Videos/end.gif",this)'
                        <img src='Docs/Videos/Resume_Anim.gif'alt='projectImage'
                        onmouseenter='ZoomInEffect(true,this)'
                        onmouseleave='ZoomInEffect(false,this)'
                        style='width: 52vw;height: 13vw;object-fit: scale-down;'>
                        </a></br></br>
                        <hr style='margin-left: auto;margin-right: auto;'>;
*/
const MakePatternForProjects = function(rankItem) //Project Units's HTML pattern for each item
{
    let pattern = "</br></br><a href='" + rankItem[0] + "' target='_blank'>" +
                  "<img src='" + rankItem[1] + "'alt='projectImage'" +
                  "onmouseenter='ZoomInEffect(true,this)'" +
                  "onmouseleave='ZoomInEffect(false,this)'" +
                  " style='width: 52vw;height: 13vw;object-fit: scale-down;'></a></br></br>" +
                  "<hr style='margin-left: auto;margin-right: auto;'>";
    return pattern;
}

//CreateElementList found in AddHTML_Element.js
console.log(CreateElementList("anchor_projects", listProjects, MakePatternForProjects));
