document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector("#sidebar");
  if (menuButton && sidebar) {
    menuButton.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.openModal);
      if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    });
  });

  const saveRecord = document.querySelector("#save-record");
  if (saveRecord) {
    saveRecord.addEventListener("click", () => {
      const name = document.querySelector("#record-name");
      const feedback = document.querySelector("#form-feedback");
      if (!name.reportValidity()) return;
      feedback.textContent = `“${name.value.trim()}” is ready to be added (demo only).`;
      name.value = "";
    });
  }

  const search = document.querySelector("#employee-search");
  const table = document.querySelector("#employee-table");
  if (search && table) {
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      table.querySelectorAll("tbody tr").forEach((row) => {
        const match = row.textContent.toLowerCase().includes(query);
        row.hidden = !match;
        if (match) visible += 1;
      });
      const noResults = document.querySelector("#no-results");
      if (noResults) noResults.hidden = visible !== 0;
    });
  }

  const employeeSave = document.querySelector("#employee-save");
  if (employeeSave) {
    employeeSave.addEventListener("click", () => {
      const name = document.querySelector("#employee-fullname");
      const email = document.querySelector("#employee-email");
      const feedback = document.querySelector("#employee-feedback");
      if (!name.reportValidity() || !email.reportValidity()) return;
      feedback.textContent = `${name.value.trim()} is ready to be added (demo only).`;
      name.value = "";
      email.value = "";
    });
  }

  const settingsForm = document.querySelector("#settings-form");
  if (settingsForm) {
    settingsForm.addEventListener("submit", (event) => {
      event.preventDefault();
      document.querySelector("#settings-feedback").textContent = "Your changes have been saved locally for this demo.";
    });
  }
});