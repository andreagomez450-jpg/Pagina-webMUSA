const contenedor = document.querySelector(".Testimonios");
let isDown = false;
let startX;
let scrollLeft;

if (contenedor) {
    contenedor.addEventListener('mousedown', (e) => {
        isDown = true;
        contenedor.style.cursor = 'grabbing';
        startX = e.pageX - contenedor.offsetLeft;
        scrollLeft = contenedor.scrollLeft;
    });

    contenedor.addEventListener('mouseleave', () => {
        isDown = false;
        contenedor.style.cursor = 'grab';
    });

    contenedor.addEventListener('mouseup', () => {
        isDown = false;
        contenedor.style.cursor = 'grab';
    });

    contenedor.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - contenedor.offsetLeft;
        const walk = (x - startX) * 2; 
        contenedor.scrollLeft = scrollLeft - walk;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-formulario");

    if (contenedor) {
        // 1. Crear el elemento <form>
        const form = document.createElement("form");
        form.action = "click.php";
        form.method = "post";
        form.className = "formulario-voluntariado";

        // 2. Crear el campo <input> para el correo
        const input = document.createElement("input");
        input.type = "email";
        input.name = "email";
        input.placeholder = "Ingresa tu correo electrónico";
        input.required = true;

        // 3. Crear el botón <button>
        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Enviar";

        // 4. Juntar todo metiendo el input y el botón dentro del form
        form.appendChild(input);
        form.appendChild(button);

        // 5. Insertar el formulario listo en el contenedor de la página
        contenedor.appendChild(form);

        // (Opcional) Evitar que la página se recargue al enviar
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(`¡Correo registrado con éxito: ${input.value}!`);
            input.value = "";
        });
    }
});