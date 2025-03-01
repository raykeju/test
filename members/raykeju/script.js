document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabContainer = document.querySelector('.tab-container');
    const iframes = document.querySelectorAll('.itch iframe');
    const heightOffset = 100;

    function updateHeight() {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            tabContainer.style.height = (activeTab.scrollHeight + heightOffset) + "px";
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Get the target content
            const target = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(target);

            // Fade out current active content
            const currentActiveContent = document.querySelector('.tab-content.active');
            if (currentActiveContent) {
                currentActiveContent.style.opacity = 0;
                setTimeout(() => {
                    currentActiveContent.classList.remove('active');
                    currentActiveContent.style.display = "none"; // Hide it properly

                    // Now make the target content visible
                    targetContent.style.display = "block"; 
                    requestAnimationFrame(() => {
                        targetContent.style.opacity = 1;
                        targetContent.classList.add('active');
                        updateHeight();
                    });
                }, 300);
            } else {
                targetContent.style.display = "block";
                requestAnimationFrame(() => {
                    targetContent.style.opacity = 1;
                    targetContent.classList.add('active');
                    updateHeight();
                });
            }

            // Set active tab
            tab.classList.add('active');
        });
    });

    // Ensure the correct height on page load
    window.addEventListener('load', () => {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            activeTab.style.display = "block"; // Ensure it's visible at the start
            activeTab.style.opacity = 1;
            updateHeight();
        }
    });

    // Fade in iframe content when loaded
    iframes.forEach(iframe => {
        iframe.onload = function () {
            iframe.style.opacity = "1";
            iframe.style.transform = "translateY(0)";
        };
    });
});


