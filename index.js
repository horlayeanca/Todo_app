window.addEventListener("load", () => {
  const form = document.querySelector("#new-task");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  let icon = document.getElementById("icon");

  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      icon.src = "moon.png";
    } else {
      icon.src = "sun.png";
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("please input some task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    //task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    const task_check_el = document.createElement("button");
    task_check_el.classList.add("check");
    task_check_el.innerHTML = "check";

    const task_img_el = document.createElement("img");
    task_img_el.classList.add("img");
    task_img_el.src = "check-mark.png";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_actions_el.appendChild(task_check_el);
    task_actions_el.appendChild(task_img_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });

    task_check_el.addEventListener("click", () => {
      if (
        task_check_el.innerText.toLocaleLowerCase() == "check" ||
        task_check_el.checked == true
      ) {
        task_img_el.style.display = "block";
        task_check_el.innerText = "Completed";
      } else {
        task_img_el.style.display = "none";
        task_check_el.innerText = "Check";
      }
    });
  });
});
