import Vue from 'vue';

Vue.directive('efeito', {
    
    bind(el, binding, vnode) {

        el.addEventListener('mouseover', function() {
            el.style.transform = `scale(1.15)`;
            this.style.transition = "transform 0.5s";
        });
        el.addEventListener('mouseout', function() {
            el.style.transform = `scale(1.0)`;
            this.style.transition = "transform 0.5s";
        })
    }

});