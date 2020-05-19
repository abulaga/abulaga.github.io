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
// console.log('window' + $(window).height())
// console.log( $('.gap .gap2').offset().top)
// console.log($('#section3 .gap .gap2').offset().top)

(function () {

    // NEWS換頁
    var page_btns = $('#section5 .pagination_area li')
    var news_pages = $('#section5 .news_area .page')
    var current_news_page = 1
    console.log(news_pages)
    page_btns.click(function () {
        switch (this.dataset.btn) {
            case 'pre':
                if (current_news_page == 1) {
                    break;
                } else {
                    current_news_page--
                    page_btns.removeClass('now')
                    $(`#section5 .pagination_area li:nth-of-type(${current_news_page + 1})`).addClass('now')
                    news_pages.removeClass('now')
                    $(`#section5 .news_area .page${current_news_page}`).addClass('now')
                }
                break;
            case '1':
                page_btns.removeClass('now')
                $('#section5 .pagination_area li:nth-of-type(2)').addClass('now')
                news_pages.removeClass('now')
                $('#section5 .news_area .page1').addClass('now')
                current_news_page = 1
                break;
            case '2':
                page_btns.removeClass('now')
                $('#section5 .pagination_area li:nth-of-type(3)').addClass('now')
                news_pages.removeClass('now')
                $('#section5 .news_area .page2').addClass('now')
                current_news_page = 2
                break;
            case '3':
                page_btns.removeClass('now')
                $('#section5 .pagination_area li:nth-of-type(4)').addClass('now')
                news_pages.removeClass('now')
                $('#section5 .news_area .page3').addClass('now')
                current_news_page = 3
                break;
            case 'next':
                if (current_news_page == 3) {
                    break;
                } else {
                    current_news_page++
                    page_btns.removeClass('now')
                    $(`#section5 .pagination_area li:nth-of-type(${current_news_page + 1})`).addClass('now')
                    news_pages.removeClass('now')
                    $(`#section5 .news_area .page${current_news_page}`).addClass('now')
                }
                break;
        }
    })


    var btn_num
    $('#section5 .btn_container').click(function(){
        // console.log(this.dataset.btn_num)
        btn_num = this.dataset.btn_num
    })
    $('#news_modal').on('show.bs.modal', function () {
        console.log(btn_num)
        $(this).find('.news_type').text( document.querySelector(`#section5 .${btn_num} .type`).innerText)
        console.log(document.querySelector(`#section5 .${btn_num} .type`).innerText)
    })

    //意見送出按鈕
    $('#suggest_submit').click(function(){
        alert('感謝您提供的寶貴意見\n'  + '我們將會盡快回復')
    })
})()
