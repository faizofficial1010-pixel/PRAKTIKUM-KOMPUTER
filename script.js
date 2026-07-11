document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      projectItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";

          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, 100);
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";

          setTimeout(() => {
            item.classList.add("hidden");
          }, 250);
        }
      });
    });
  });

  projectItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 150);
  });
});