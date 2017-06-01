(function($){
    $.fn.extend({
        jqueryScrollAnimate:function(obj){
            return this.each(function(){
                var selector=$(this);
                var direction=obj.direction?obj.direction:true;
                var animated=obj.animated?obj.animated:'.ani';
                var distance=obj.distance?obj.distance:selector.height();
                $(animated).each(function(index,item){
                    $(item).css({
                        visibility:"hidden"
                    })
                });
                
                function animateStart(obj){
                    var child=obj.find(animated);
                    child.each(function(index,item){
                        var name=$(item).attr('animate-effect');
                        var time=$(item).attr('animate-duration');
                        var delay=$(item).attr('animate-delay');
                        $(item).addClass(name).addClass('animated').css({
                            'visibility': 'visible',
                            'animation-duration':time,
                            'animation-delay':delay
                        })
                    })
                }
                function animateClear(obj){
                    var child=obj.find(animated);
                    child.each(function(index,item){
                        var name=$(item).attr('animate-effect');
                        var time=$(item).attr('animate-duration');
                        var delay=$(item).attr('animate-delay');
                        $(item).removeClass(name).removeClass('animated').css({
                            'visibility': 'hidden',
                            'animation-duration':'',
                            'animation-delay':''
                        })
                    })
                }
                $(window).scroll(function(){
                    var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    selector.each(function(index,item){
                        var offsetTop=$(item).offset().top;
                        if(scrollTop+distance>offsetTop){
                            console.log(true)
                            animateStart($(item))
                        }else{
                            if(direction){
                                animateClear($(item))
                            }
                        }
                    })
                })
            })
        }
    })
})(jQuery)    