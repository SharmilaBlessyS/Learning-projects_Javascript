let imgBox = document.querySelector('.imgs');
let imgWrap = document.querySelector('.img-wrap');
let OrginalImg = document.getElementById('originalImg');
let line = document.getElementById('line');
OrginalImg.style.width = imgBox.offsetWidth + "px";
let leftSpace = imgBox.offsetLeft;



// Add event listener for mousemove on imgBox
imgBox.onmousemove = function(e) {
    // Calculate boxWidth relative to leftSpace
    var boxWidth = (e.pageX - leftSpace) + "px";
    
    // Set width style for imgWrap
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}