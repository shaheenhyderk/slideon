/*
 * Js for Slideon 1.0.0
 */

; (function () {
    var elements = document.querySelectorAll('.slideon.slideon-auto');
    elements.forEach(function (element) {
        var wrapper = document.createElement('label')
        wrapper.className = element.classList

        var slider = document.createElement('span')
        slider.className = 'slideon-slider'

        element.after(wrapper)
        wrapper.appendChild(element)
        element.after(slider)
    });
}());
