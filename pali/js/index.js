// function resize_event(){
//     // console.log("123")
//     // console.log(document.querySelector('.gap .gap2').dataset.laxTranslateY)
//     // console.log(document.querySelector('.gap .gap2').offsetHeight)
//     // console.log($('.gap .gap2').style)

//     let div_y = $('.gap .gap2').offset().top
//     let div_hieght =document.querySelector('.gap .gap2').offsetHeight
//     let scrollY = window.scrollY
//     let window_n = $(window).height()
//     console.log(document.querySelector('.gap .gap2').style.transform)
//     // console.log('div_hieght:' + div_hieght)
//     // console.log('div_y:' + div_y)
//     // console.log('height' +  $(window).height())
//     // console.log( window.screenTop)
//     let test =  `0 -${div_hieght *1 }, ${div_hieght + div_y - scrollY } -${div_hieght *1 },  ${div_hieght + div_y - scrollY +window_n} -${div_hieght *1 }`
//    console.log('test' + test)
//     document.querySelector('.gap .gap2').dataset.laxTranslateY = 
//     `0 -${div_hieght *1 }, ${div_hieght + div_y - scrollY } -${div_hieght *1 },  ${div_hieght + div_y - scrollY +window_n} -${div_hieght *1 }`
//     // getInfo()
//     console.log( document.querySelector('.gap .gap2').dataset.laxTranslateY)
//     // offsetLeft
//     // document.querySelector('.gap .gap2').style.transform = ''
//     // lax_setup() 
// }
console.log('window' + $(window).height())
console.log( $('.gap .gap2').offset().top)
console.log($('#section3 .gap .gap2').offset().top)
