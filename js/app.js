$(document).ready(function(){
    
    
    $('#profile_ripple').ripples({
        resolution: 512,
        
        dropRadius:12
    });

    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach(function(bar){

        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width= percentage+ '%';


    })

    // counter

    const counters = document.querySelectorAll('.counter');
    
    function runCounter(){
    counters.forEach(counter =>{
        counter.innerText =0;
        
        let target = +counter.dataset.count;
        
        let countIt = function(){
            let displayedCount = +counter.innerText;
            if(displayedCount < target){
                
                counter.innerText = displayedCount + 1;
                setTimeout(countIt,60);
            }
            else{
                counter.innerText=target;

            }
        }
        countIt();

    })
    }

    let counterSection = document.querySelector('.counter-wrapper');

    let options = {
        rootMargin : '0px 0px -150px 0px'
    }

    let done = 0;

    
    const sectionObserver = new IntersectionObserver(function(entries){
        
        if(entries[0].isIntersecting && done !== 1){
            done = 1;
            runCounter();
        }

    }, options)

    sectionObserver.observe(counterSection);

    // image filter

    var $wrapper = $('.portofolio-wrapper');

    //Initialize isotope

    $wrapper.isotope({
        filter : "*",
        layoutMode : 'masonry',
        animationOptions : {
            duration: 750,
            easing: 'Linear'
        }

    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        
        link.addEventListener('click',function(e){
            e.preventDefault();

            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration: 750,
                    easing: 'Linear'
                }
        
            });

            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })


    //Magnify Pop up

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled : true
        },
        zoom : {
            enable:true
        }

    });

    // Slider


    $('.slider').slick({
        arrows: false,
        autoplay: true,
        speed: 200,
        cssEase: 'linear'
    });





});