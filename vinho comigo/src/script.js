const nao = document.getElementById("nao");

const sim = document.getElementById("sim");

var position = 0;

var isAnimating = false;



nao.addEventListener("mouseover", animateNao);

nao.addEventListener("click", animateNao);

function animateNao(){
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        nao.style.transform = `translate(0px, ${position}px)`;
        nao.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
}

sim.addEventListener("click", function(){
    window.location.href='https://youtu.be/RQ3XP78JFM4?t=56'
})