document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const browseButton = document.getElementById("arq");
    const cancelButton = document.getElementById("Cancelar");
    const dropArea = document.querySelector(".drop-area");

    browseButton.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                dropArea.innerHTML = ""; // Limpa o conteúdo anterior
                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.maxWidth = "100%";
                img.style.maxHeight = "150px"; 
                img.style.objectFit = "contain";
                img.style.borderRadius = "10px";
                dropArea.appendChild(img);

                // 🔥 Esconde o botão "Browse Files"
                browseButton.style.display = "none";
            };

            reader.readAsDataURL(file);
        } else {
            console.error("Nenhum arquivo foi selecionado!");
        }
    });

    cancelButton.addEventListener("click", function () {
        fileInput.value = ""; // Reseta o input
        dropArea.innerHTML = "<h3>Drop file or browse</h3><p>Format: .jpeg ou .png & Max file size: 2 MB</p>"; // Restaura o texto original
        browseButton.style.display = "block"; // 🔥 Mostra o botão novamente
    });
});
