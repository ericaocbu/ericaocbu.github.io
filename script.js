document.addEventListener("DOMContentLoaded", function () {
    const classesSection = document.getElementById("classes");
    const classItems = classesSection.querySelectorAll("p");

    classItems.forEach((item) => {
        item.style.opacity = 0; // start invisible
        item.style.transform = "translateX(-100px)"; // start shifted left
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease"; // smooth fade and move
    });

    function showClassesOneByOne() {
        classItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = "translateX(0)";
            }, index * 400); // 400ms delay between each
        });
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function handleScroll() {
        if (isInViewport(classesSection)) {
            showClassesOneByOne();
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
});
