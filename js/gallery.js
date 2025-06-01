function filterGallery(category) {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "inline-block";
    } else {
      img.style.display = "none";
    }
  });
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

function closeModal() {
  modal.style.display = "none";
}
const form = document.getElementById("upload-form");
const imageInput = document.getElementById("image-input");
const categorySelect = document.getElementById("image-category");
const previewContainer = document.getElementById("preview-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const file = imageInput.files[0];
  const category = categorySelect.value;

  if (!file) {
    alert("Будь ласка, виберіть файл");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.createElement("img");
    img.src = e.target.result;
    img.classList.add(category);
    img.alt = "Нове фото";
    previewContainer.appendChild(img);

    // Також додаємо в основну галерею
    document.querySelector(".gallery").appendChild(img.cloneNode());
  };
  reader.readAsDataURL(file);

  // Скидання форми
  form.reset();
});