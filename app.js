const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function ()
{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function displayInfo(infoName)
{
    var loreInfo = document.getElementById("lore");
    var mapInfo = document.getElementById("map");
    var monstersInfo = document.getElementById("monsters");
    var characterInfo = document.getElementById("character");

    switch (infoName)
    {
        case "lore":
            loreInfo.style.display = "block";
            mapInfo.style.display = "none";
            monstersInfo.style.display = "none";
            characterInfo.style.display = "none";
            break;

        case "map":
            loreInfo.style.display = "none";
            mapInfo.style.display = "block";
            monstersInfo.style.display = "none";
            characterInfo.style.display = "none";
            break;

        case "monsters":
            loreInfo.style.display = "none";
            mapInfo.style.display = "none";
            monstersInfo.style.display = "block";
            characterInfo.style.display = "none";
            break;

        case "character":
            loreInfo.style.display = "none";
            mapInfo.style.display = "none";
            monstersInfo.style.display = "none";
            characterInfo.style.display = "block";
            break;
    }
}

/*gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        markers: true,
        onEnter : function() {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1}, {autoAlpha: 0, overwrite: "auto"});
        },
        onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0},
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "black",
                    overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, {autoAlpha: 1}, {autoAlpha: 0, overwrite: "auto"});
        }
    });
});*/