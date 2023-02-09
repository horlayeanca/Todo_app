window.addEventListener("load", () => {
  const form = document.querySelector("#new-task");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("please input some task");
      return;
    } else {
      console.log("success");
    }
  });
});
