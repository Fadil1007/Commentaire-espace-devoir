const button = document.querySelector("button");
    button.addEventListener("click", preventSubmit, false);

    function preventSubmit(event) {
      event.preventDefault();
    }

    // verify if there's data in input fields

    button.addEventListener("click", checkData, false);

    function checkData() {
      const firstNameInput = document.getElementById("first-name");
      const lastNameInput = document.getElementById("last-name");
      const textAreaInput = document.getElementById("message");
      const errorMessage = document.getElementById("error-message");

      if (!firstNameInput.value || !lastNameInput.value || !textAreaInput.value) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }
    }
    
    button.addEventListener("click", addComment, false) 

    function addComment() {
      const firstNameInput = document.getElementById("first-name");
      const lastNameInput = document.getElementById("last-name");
      const textAreaInput = document.getElementById("message");
      const commentarySection = document.getElementById("comment-list");

      let commentaryBox = document.createElement("div");
      let borderBox = document.createElement("div");
      let nameTitle = document.createElement("h3");
      let textHolder = document.createElement("div");
      let text = document.createElement("p");

      commentaryBox.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
      borderBox.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
      nameTitle.classList.add("font-medium", "text-gray-900");
      textHolder.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");

      commentaryBox.append(borderBox);
      borderBox.append(nameTitle);
      borderBox.append(textHolder);
      textHolder.append(text);
      
      

      commentarySection.append(commentaryBox);

      console.log(firstNameInput.value)
      nameTitle.textContent = firstNameInput.value + " " + lastNameInput.value;
      text.textContent = textAreaInput.value;
    }


    button.addEventListener("click", clearInput, false);

    function clearInput() {
      const firstNameInput = document.getElementById("first-name");
      const lastNameInput = document.getElementById("last-name");
      const textAreaInput = document.getElementById("message");

      firstNameInput.value = "";
      lastNameInput.value= "";
      textAreaInput.value= "";

    }