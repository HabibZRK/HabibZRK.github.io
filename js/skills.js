document.addEventListener("DOMContentLoaded", () => {
    fetch('skills.json')
        .then(response => response.json())
        .then(data => {
            for (const skill in data) {
                const skillElement = document.getElementById(skill);
                if (skillElement) {
                    skillElement.innerHTML = '★'.repeat(data[skill]) + '☆'.repeat(5 - data[skill]);
                }
            }
        });
});
