(function () { 
    
    if($('.nav').hasClass('full')){
        document.querySelector('.nav_pic_text').classList.add('show')
        document.querySelector('.nav_pic').classList.add('show')
    }    
    window.setTimeout(()=>{
        if($('.nav').hasClass('full')){
            $('.nav').removeClass('full')
            document.querySelector('.nav').addEventListener('transitionend',remove_show)

            function remove_show(){
                document.querySelector('.nav_pic_text').classList.remove('show')
                document.querySelector('.nav_pic').classList.remove('show')
                document.querySelector('.nav').removeEventListener('transitionend',remove_show)
            }
        }

    },300)

    // 展開
    document.querySelector('.ham_bar').addEventListener('click',function(){
        document.querySelector('.nav').classList.add('open')
        document.querySelector('.ham_bar').classList.add('hide')  
        document.querySelector('.nav_back').classList.add('show')               
    })
    // 縮起
    document.querySelector('.nav_back').addEventListener('click',function(){
        document.querySelector('.nav').classList.remove('open')
        document.querySelector('.ham_bar').classList.remove('hide')  
        document.querySelector('.nav_back').classList.remove('show')               
    })

    document.querySelectorAll('.nav ul li').forEach(element =>{
        element.addEventListener('click',function(){
            document.querySelector('.nav_pic_text').classList.add('show')
            document.querySelector('.nav_pic').classList.add('show')
            document.querySelector('.nav').classList.add('full')
           
            document.querySelector('.nav').addEventListener('transitionend',function(e){
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
            window.setTimeout(function(){
                document.querySelector('.phone_list').classList.remove('hidding')
            },1)
            $('.phone_bar_line').addClass('close')
        }else{
            document.querySelector('.phone_list').classList.add('hidding')
            document.querySelector('.phone_list').addEventListener('transitionend',add_hide)
            function add_hide(){
                document.querySelector('.phone_list').classList.add('hide')
                document.querySelector('.phone_list').removeEventListener('transitionend',add_hide)
            }
            
            $('.phone_bar_line').removeClass('close')
        }        
    })
    document.querySelectorAll('.phone_nav ul li').forEach(element =>{
        element.addEventListener('click',function(){
            document.querySelector('.phone_list').classList.add('full')
            document.querySelector('.phone_list').addEventListener('transitionend',function(e){
                // width動畫結束才跳頁
                console.log(e)
                if (e.propertyName === 'width'){
                    document.location.href="./page2.html"
                }
            })
        })

    })
    
})()