(function () {


    let mask = document.querySelector('.circle')
    let orgin_x = mask.offsetLeft;
    let orgin_y = mask.offsetTop;

    document.querySelector('.pic_area_sensor').addEventListener('mousemove', function (e) {
        let [x, y] = [e.offsetX, e.offsetY]
        // console.log([x,y])
        // console.log(orgin_x)

        mask.style.left = orgin_x + (x - 250) * 0.2 + "px"
        mask.style.top = orgin_y + (y - 250) * 0.2 + "px"
    })
    document.querySelector('.pic_area_sensor').addEventListener('mouseout', function () {
        // mask.style.left = orgin_x + "px"
        // mask.style.top = orgin_y + "px"

        $('.circle').animate({
            left: `${orgin_x}px`,
            top: `${orgin_y}px`,
            // transform: 'translateX(-50%)'
        }, 500);
    })
})()