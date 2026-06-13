var maxArea = function(height) {
    let area = 0;
    for(let i = 0; i < height.length; i++) {
        for(let j = 1; j < height.length; j++){
            let lowestWater = Math.min(height[i], height[j])
            let width = j - i;
            let containerArea = lowestWater * width;
            if(containerArea > area){
            area = containerArea;
            }
        }
    }
        return area;

};