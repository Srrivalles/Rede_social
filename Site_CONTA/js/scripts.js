// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para criar uma bomba de tinta
function createInk() {
    const inkBackground = document.getElementById('ink-background');
    const ink = document.createElement('div');
    ink.classList.add('ink');

    // Define uma cor aleatória para a bomba de tinta
    ink.style.backgroundColor = getRandomColor();

    // Posiciona a bomba de tinta aleatoriamente na tela
    ink.style.left = `${Math.random() * 100}%`;
    ink.style.top = `${Math.random() * 100}%`;

    // Adiciona a bomba de tinta ao background
    inkBackground.appendChild(ink);

    // Remove a bomba de tinta após a animação terminar
    ink.addEventListener('animationend', () => {
        ink.remove();
    });
}

// Cria bombas de tinta continuamente
function startInkEffect() {
    setInterval(createInk, 500); // Cria uma nova bomba de tinta a cada 500ms
}

// Inicia o efeito de bombas de tinta ao carregar a página
window.onload = startInkEffect;

// Efeito de loading ao enviar o formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ativa o efeito de loading no botão
    const loginButton = document.getElementById('loginButton');
    loginButton.classList.add('loading');

    // Simula um delay de 2 segundos antes de redirecionar
    setTimeout(() => {
        loginButton.classList.remove('loading');
        window.location.href = 'perfil.html'; // Redireciona para a página de perfil
    }, 2000);
});

// Alternar entre mostrar e ocultar a senha (para o campo de senha)
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}

// Alternar entre mostrar e ocultar a senha (para o campo de confirmação de senha)
const toggleConfirmarPassword = document.getElementById('toggleConfirmarPassword');
const confirmarPasswordInput = document.getElementById('confirmarPassword');

if (toggleConfirmarPassword && confirmarPasswordInput) {
    toggleConfirmarPassword.addEventListener('click', function() {
        const type = confirmarPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmarPasswordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}
// Alterar foto de perfil
document.getElementById('uploadImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});