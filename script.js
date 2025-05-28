
document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll(".horizontal-accordion .panel");
    const isMobile = window.innerWidth < 768;

    panels.forEach(panel => {
        const activate = () => {
            if (!panel.classList.contains("active")) {
                panels.forEach(p => p.classList.remove("active"));
                panel.classList.add("active");
            }
        };

        if (isMobile) {
            panel.addEventListener("click", activate);
        } else {
            panel.addEventListener("mouseenter", activate);
        }
    });
});
