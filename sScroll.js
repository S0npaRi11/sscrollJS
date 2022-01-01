const elements = document.querySelectorAll('[sscroll]');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {scrollObserverCallback(entry, entry.isIntersecting)})
})


// observe all eolements
elements.forEach(element => scrollObserver.observe(element))

// scroll observer callback
const scrollObserverCallback = (ele, isIntersecting) => {

    const elementAnimation = new Animation(ele)

    if(isIntersecting) elementAnimation.fadeIn()
    else elementAnimation.fadeOut()

    /**
     * NEXT: 
     * 1. Get all sscroll attribute values
     * 2. Apply animation based on sscroll-anim attribute
     * 3. Pass in other values like, sscroll-duration, sscroll-easing, sscroll-iteration, etc
     * 4. This callback will have a swith statement which will apply animation based on 
     *    sscroll-anim attribute
     * 5. Move this project on js bundler
     */
}


// Animations
class Animation{
    constructor(ele){
        this.element = ele.target

        this.getAttributes()
    }

    getAttributes(){
        this.duration = parseInt(this.element.getAttribute('sscroll-duration')) || 600 
        this.easing = this.element.getAttribute('sscroll-easing') || 'ease-in-out'
        this.iteration = 1 // won't change this
    }

    fadeIn(){
        this.element.animate([
            {opacity: 0},
            {opacity: 1}
        ],{
            duration: this.duration,
            easing: this.easing
        })
    }

    fadeOut(){
        this.element.animate([
            {opacity: 1},
            {opacity: 0}
        ],
        { 
            duration: this.duration,
            easing: this.easing
        })
    }
}