document.addEventListener("DOMContentLoaded", function () {
    const listContainer = document.querySelector("#infi-list");

    // Function to add list items
    function addListItems(count = 10) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${listContainer.children.length + 1}`;
            listContainer.appendChild(listItem);
        }
    }

    // Add initial 10 list items
    addListItems();

    // Function to check if user scrolled to the bottom
    function checkScroll() {
        if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight) {
            addListItems(2); // Add 2 more items when reaching the bottom
        }
    }

    // Listen for scroll events on the list container
    listContainer.addEventListener("scroll", checkScroll);
});
