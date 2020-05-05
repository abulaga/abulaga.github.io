(function () {
    // 按鈕事件
    var current_page = 0;
    $('#btn_next').click(function () {
        switch (current_page) {
            case 0:
                $('.hardcover_front').addClass('turn');
                current_page++;
                break;
            case 1:
                $('#page1').addClass('turn')
                current_page++;
                break;
            case 2:
                $('#page2').addClass('turn')
                current_page++;
                break;
            case 3:
                $('#page3').addClass('turn')
                current_page++;
                break;
            // case 4:
            //     $('#page4').addClass('turn')
            //     current_page++;
            //     break;
            // case 5:
            //     $('#page5').addClass('turn')
            //     current_page++;
            //     break;
        }

    })
    $('#btn_perv').click(function () {
        switch (current_page) {
            case 1:
                $('.hardcover_front').removeClass('turn');
                current_page--;
                break;
            case 2:
                $('#page1').removeClass('turn')
                current_page--;
                break;
            case 3:
                $('#page2').removeClass('turn')
                current_page--;
                break;
            case 4:
                $('#page3').removeClass('turn')
                current_page--;
                break;
            // case 5:
            //     $('#page4').removeClass('turn')
            //     current_page--;
            //     break;
            // case 6:
            //     $('#page5').removeClass('turn')
            //     current_page--;
            //     break;
        }
    })

    
    // window.setTimeout((begin_event),1000)

    function begin_event(){
        $('.text_block').removeClass('begin');
        $('.text_block > p').removeClass('begin');
        $('.hardcover_front').addClass('turn');

        
        // $('.bookspace').removeClass('begin')
        $('.bookspace').addClass('end')
        window.setTimeout(function(){$('.bookspace').removeClass('end begin')
    },2000)
        current_page++;
    }    

    
    // **************下一頁***************
    document.querySelector('.hardcover_back').addEventListener('click',function(){                
        switch (current_page) {
            case 0:
                $('.hardcover_front').addClass('turn');
                current_page++;
                break;
            case 1:
                $('#page1').addClass('turn')
                document.getElementById(`text_block${current_page}`).classList.add('hide')
                current_page++;
                document.getElementById(`text_block${current_page}`).classList.remove('hide')
                break;
            case 2:
                $('#page2').addClass('turn')
                document.getElementById(`text_block${current_page}`).classList.add('hide')
                current_page++;
                document.getElementById(`text_block${current_page}`).classList.remove('hide')
                break;
            case 3:
                $('#page3').addClass('turn')
                document.getElementById(`text_block${current_page}`).classList.add('hide')
                current_page++;
                document.getElementById(`text_block${current_page}`).classList.remove('hide')
                break;
            // case 4:
            //     $('#page4').addClass('turn')
            //     document.getElementById(`text_block${current_page}`).classList.add('hide')
            //     current_page++;
            //     document.getElementById(`text_block${current_page}`).classList.remove('hide')
            //     break;
            // case 5:
            //     $('#page5').addClass('turn')
            //     current_page++;
            //     break;
        }        
    })
    // **************上一頁***************
    document.querySelector('.hardcover_front').addEventListener('click',function(){
        switch (current_page) {
            case 1:
                $('.hardcover_front').removeClass('turn');
                current_page--;
                break;
            case 2:
                $('#page1').removeClass('turn')            
                document.getElementById(`text_block${current_page}`).classList.add('hide')
                current_page--;
                window.setTimeout(function(){
                    document.getElementById(`text_block${current_page}`).classList.remove('hide')
                },500)
                
                break;
            case 3:
                $('#page2').removeClass('turn')            
                document.getElementById(`text_block${current_page}`).classList.add('hide')
                current_page--;
                document.getElementById(`text_block${current_page}`).classList.remove('hide')
                break;
            case 4:
                $('#page3').removeClass('turn')            
                document.getElementById(`text_block${current_page}`).classList.add('hide')
                current_page--;
                document.getElementById(`text_block${current_page}`).classList.remove('hide')
                break;
            // case 5:
            //     $('#page4').removeClass('turn')            
            //     document.getElementById(`text_block${current_page}`).classList.add('hide')
            //     current_page--;
            //     document.getElementById(`text_block${current_page}`).classList.remove('hide')
            //     break;
            // case 6:
            //     $('#page5').removeClass('turn')
            //     current_page--;
            //     break;
        } 
    })

    // *************NAVBAR相關*******************
    // 展開
    document.querySelector('.ham_bar').addEventListener('click',function(){
        document.querySelector('nav').classList.add('open')
        document.querySelector('.ham_bar').classList.add('hide')  
        document.querySelector('.nav_back').classList.add('show')               
    })
    // 縮起
    document.querySelector('.nav_back').addEventListener('click',function(){
        document.querySelector('nav').classList.remove('open')
        document.querySelector('.ham_bar').classList.remove('hide')  
        document.querySelector('.nav_back').classList.remove('show')               
    })

    document.querySelectorAll('nav ul li').forEach(element =>{
        element.addEventListener('click',function(){
            document.querySelector('nav').classList.add('full')
            document.querySelector('nav').addEventListener('transitionend',function(e){
                // width動畫結束才跳頁
                if (e.propertyName === 'width'){
                    document.location.href="./page2.html"
                }
            })
        })

    }) 
    //手機板NAV
    document.querySelector('.phone_ham_bar').addEventListener('click',function(){
        if($('.phone_list').hasClass("hide")){
            document.querySelector('.phone_list').classList.remove('hide')
            $('.phone_bar_line').addClass('close')
        }else{
            document.querySelector('.phone_list').classList.add('hide')
            $('.phone_bar_line').removeClass('close')
        }        
    })
    
})()