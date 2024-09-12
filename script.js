// Obtenha o modal
var modal = document.getElementById("imageModal");

// Obtenha a imagem e o elemento do modal para exibir a imagem ampliada
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

// Selecione todas as imagens da galeria
var images = document.querySelectorAll(".gallery img");

// Index da imagem atual
var currentIndex = 0;

// Função para abrir o modal com a imagem e legenda corretas
function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Adicionar evento de clique em cada imagem
images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        openModal(index);
    });
});

// Fechar modal ao clicar no botão de fechar
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fechar modal ao clicar fora da imagem
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Função para mostrar a próxima imagem
function showNext() {
    currentIndex = (currentIndex + 1) % images.length; // Avançar e voltar ao início
    openModal(currentIndex);
}

// Função para mostrar a imagem anterior
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Retroceder e voltar ao fim
    openModal(currentIndex);
}

// Botões de navegação (próximo e anterior)
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

nextBtn.onclick = function() {
    showNext();
}

prevBtn.onclick = function() {
    showPrev();
}
