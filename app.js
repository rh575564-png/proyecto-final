// --- BANCOS DE PREGUNTAS DINÁMICAS POR CURSO ---
const bancosPreguntas = {
    "Desarrollo Web Moderno": [
        { id: 1, tipo: "radio", texto: "1. ¿Qué lenguaje da estructura y contenido a una página web?", opciones: [{v:"css", t:"CSS"}, {v:"html", t:"HTML"}, {v:"js", t:"JavaScript"}], correcta: "html" },
        { id: 2, tipo: "radio", texto: "2. ¿Qué tecnología se ejecuta en el navegador para dar interactividad?", opciones: [{v:"sql", t:"SQL"}, {v:"javascript", t:"JavaScript"}, {v:"php", t:"PHP"}], correcta: "javascript" },
        { id: 3, tipo: "checkbox", texto: "3. Seleccione los dos archivos básicos requeridos en este proyecto web:", opciones: [{v:"html", t:".html"}, {v:"css", t:".css"}, {v:"exe", t:".exe"}], correctas: ["html", "css"] },
        { id: 4, tipo: "select", texto: "4. ¿Qué etiqueta HTML se utiliza para insertar una imagen?", opciones: [{v:"video", t:"<video>"}, {v:"correcto", t:"<img>"}, {v:"src", t:"<src>"}], correcta: "correcto" },
        { id: 5, tipo: "radio", texto: "5. ¿Qué propiedad CSS cambia el color del texto?", opciones: [{v:"bg", t:"background-color"}, {v:"correcto", t:"color"}, {v:"font", t:"font-size"}], correcta: "correcto" },
        { id: 6, tipo: "select", texto: "6. ¿Cuál es la contraseña del usuario administrador del proyecto?", opciones: [{v:"1", t:"1234"}, {v:"2", t:"admin2026"}, {v:"correcto", t:"2026"}], correcta: "correcto" }
    ],
    "Python para Principiantes": [
        { id: 1, tipo: "radio", texto: "1. ¿Cómo se imprime texto en consola en Python?", opciones: [{v:"echo", t:"echo()"}, {v:"correcto", t:"print()"}, {v:"printf", t:"printf()"}], correcta: "correcto" },
        { id: 2, tipo: "radio", texto: "2. ¿Qué símbolo se utiliza para hacer comentarios de una línea en Python?", opciones: [{v:"correcto", t:"#"}, {v:"sl", t:"//"}, {v:"ml", t:"/* */"}], correcta: "correcto" },
        { id: 3, tipo: "checkbox", texto: "3. Seleccione tipos de datos básicos en Python (Seleccione dos):", opciones: [{v:"int", t:"int (entero)"}, {v:"str", t:"str (texto)"}, {v:"tabla", t:"tabla relacional"}], correctas: ["int", "str"] },
        { id: 4, tipo: "select", texto: "4. ¿Qué función calcula la longitud de una lista o cadena en Python?", opciones: [{v:"tamaño", t:"size()"}, {v:"correcto", t:"len()"}, {v:"contar", t:"count()"}], correcta: "correcto" },
        { id: 5, tipo: "radio", texto: "5. ¿Cómo se define una función en Python?", opciones: [{v:"correcto", t:"def mi_funcion():"}, {v:"function", t:"function mi_funcion()"}, {v:"fun", t:"fun mi_funcion()"}], correcta: "correcto" },
        { id: 6, tipo: "select", texto: "6. ¿Cuál es la contraseña del usuario administrador del proyecto?", opciones: [{v:"1", t:"1234"}, {v:"2", t:"admin2026"}, {v:"correcto", t:"2026"}], correcta: "correcto" }
    ],
    "Bases de Datos SQL": [
        { id: 1, tipo: "radio", texto: "1. ¿Qué instrucción SQL se utiliza para consultar datos de una tabla?", opciones: [{v:"correcto", t:"SELECT"}, {v:"get", t:"GET"}, {v:"open", t:"OPEN"}], correcta: "correcto" },
        { id: 2, tipo: "radio", texto: "2. ¿Qué cláusula se usa para filtrar registros en SQL?", opciones: [{v:"filtrar", t:"FILTER BY"}, {v:"correcto", t:"WHERE"}, {v:"search", t:"SEARCH"}], correcta: "correcto" },
        { id: 3, tipo: "checkbox", texto: "3. Seleccione comandos para modificar o insertar datos (Seleccione dos):", opciones: [{v:"insert", t:"INSERT"}, {v:"update", t:"UPDATE"}, {v:"select", t:"SELECT"}], correctas: ["insert", "update"] },
        { id: 4, tipo: "select", texto: "4. ¿Qué sentencia elimina registros de una tabla?", opciones: [{v:"drop", t:"DROP TABLE"}, {v:"correcto", t:"DELETE FROM"}, {v:"clear", t:"CLEAR"}], correcta: "correcto" },
        { id: 5, tipo: "radio", texto: "5. ¿Qué significa la sigla SQL?", opciones: [{v:"correcto", t:"Structured Query Language"}, {v:"simple", t:"Simple Query Logic"}, {v:"system", t:"Secure Quality Line"}], correcta: "correcto" },
        { id: 6, tipo: "select", texto: "6. ¿Cuál es la contraseña del usuario administrador del proyecto?", opciones: [{v:"1", t:"1234"}, {v:"2", t:"admin2026"}, {v:"correcto", t:"2026"}], correcta: "correcto" }
    ],
    "Diseño UX/UI Esencial": [
        { id: 1, tipo: "radio", texto: "1. ¿Qué significa UI en el diseño digital?", opciones: [{v:"user", t:"User Interaction"}, {v:"correcto", t:"User Interface"}, {v:"unified", t:"Unified Integration"}], correcta: "correcto" },
        { id: 2, tipo: "radio", texto: "2. ¿Qué se busca principalmente con el diseño UX?", opciones: [{v:"correcto", t:"La experiencia y satisfacción del usuario"}, {v:"anim", t:"Animaciones 3D pesadas"}, {v:"cod", t:"Escribir código backend"}], correcta: "correcto" },
        { id: 3, tipo: "checkbox", texto: "3. Seleccione herramientas populares de prototipado UX/UI (Seleccione dos):", opciones: [{v:"figma", t:"Figma"}, {v:"xd", t:"Adobe XD"}, {v:"word", t:"Microsoft Word"}], correctas: ["figma", "xd"] },
        { id: 4, tipo: "select", texto: "4. ¿Qué es un 'Wireframe' en diseño web?", opciones: [{v:"codigo", t:"El código fuente final"}, {v:"correcto", t:"Un esquema o esqueleto visual preliminar"}, {v:"servidor", t:"Un servidor web"}], correcta: "correcto" },
        { id: 5, tipo: "radio", texto: "5. ¿Qué elemento es clave para una buena accesibilidad web?", opciones: [{v:"correcto", t:"Contraste de colores adecuado"}, {v:"letras", t:"Letras extremadamente pequeñas"}, {v:"lento", t:"Carga lenta"}], correcta: "correcto" },
        { id: 6, tipo: "select", texto: "6. ¿Cuál es la contraseña del usuario administrador del proyecto?", opciones: [{v:"1", t:"1234"}, {v:"2", t:"admin2026"}, {v:"correcto", t:"2026"}], correcta: "correcto" }
    ]
};

// --- FUNCIONALIDAD DE REGISTRO (index.html) ---
function seleccionarCurso(nombreCurso) {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
    
    const selectCurso = document.getElementById('curso-sel');
    if(selectCurso) {
        selectCurso.value = nombreCurso;
    }
}

function mostrarRegistro() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

function registrarEstudiante(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const curso = document.getElementById('curso-sel').value;

    const estudiante = {
        nombre: nombre,
        email: email,
        curso: curso,
        calificacion: 'Pendiente',
        estado: 'En curso',
        fecha: new Date().toLocaleDateString()
    };

    localStorage.setItem('estudianteActual', JSON.stringify(estudiante));

    let registros = JSON.parse(localStorage.getItem('db_registros')) || [];
    registros.push(estudiante);
    localStorage.setItem('db_registros', JSON.stringify(registros));

    window.location.href = 'curso.html';
}

// --- CARGAR PREGUNTAS DINÁMICAS (evaluacion.html) ---
function cargarPreguntasCurso() {
    const estudiante = JSON.parse(localStorage.getItem('estudianteActual'));
    const cursoActual = estudiante ? estudiante.curso : "Desarrollo Web Moderno";
    
    const tituloElem = document.getElementById('titulo-evaluacion');
    if(tituloElem) {
        tituloElem.innerText = `Evaluación: ${cursoActual}`;
    }
    
    const preguntas = bancosPreguntas[cursoActual] || bancosPreguntas["Desarrollo Web Moderno"];
    const container = document.getElementById('preguntas-container');
    if(!container) return;
    
    container.innerHTML = '';

    preguntas.forEach((p, index) => {
        let div = document.createElement('div');
        div.className = 'pregunta';
        
        let html = `<p>${p.texto}</p>`;
        
        if (p.tipo === 'radio') {
            p.opciones.forEach(op => {
                html += `<label><input type="radio" name="p${index+1}" value="${op.v}" required> ${op.t}</label><br>`;
            });
        } else if (p.tipo === 'checkbox') {
            p.opciones.forEach(op => {
                html += `<label><input type="checkbox" name="p${index+1}" value="${op.v}"> ${op.t}</label><br>`;
            });
        } else if (p.tipo === 'select') {
            html += `<select name="p${index+1}" required><option value="">-- Seleccione una opción --</option>`;
            p.opciones.forEach(op => {
                html += `<option value="${op.v}">${op.t}</option>`;
            });
            html += `</select>`;
        }
        
        div.innerHTML = html;
        container.appendChild(div);
    });
}

// --- CÁLCULO DE EVALUACIÓN (evaluacion.html) ---
function calcularEvaluacionDinamica(event) {
    event.preventDefault();
    const estudiante = JSON.parse(localStorage.getItem('estudianteActual'));
    const cursoActual = estudiante ? estudiante.curso : "Desarrollo Web Moderno";
    const preguntas = bancosPreguntas[cursoActual];

    let aciertos = 0;

    preguntas.forEach((p, index) => {
        const num = index + 1;
        if (p.tipo === 'radio') {
            const sel = document.querySelector(`input[name="p${num}"]:checked`);
            if (sel && sel.value === p.correcta) aciertos++;
        } else if (p.tipo === 'checkbox') {
            const checks = document.querySelectorAll(`input[name="p${num}"]:checked`);
            let valores = Array.from(checks).map(c => c.value);
            if (valores.length === p.correctas.length && p.correctas.every(c => valores.includes(c))) {
                aciertos++;
            }
        } else if (p.tipo === 'select') {
            const sel = document.querySelector(`select[name="p${num}"]`).value;
            if (sel === p.correcta) aciertos++;
        }
    });

    let notaFinal = Math.round((aciertos / preguntas.length) * 100);

    if (estudiante) {
        estudiante.calificacion = notaFinal;
        estudiante.estado = notaFinal >= 60 ? 'Aprobado' : 'Reprobado';
        localStorage.setItem('estudianteActual', JSON.stringify(estudiante));

        let registros = JSON.parse(localStorage.getItem('db_registros')) || [];
        if (registros.length > 0) {
            registros[registros.length - 1].calificacion = notaFinal;
            registros[registros.length - 1].estado = estudiante.estado;
            localStorage.setItem('db_registros', JSON.stringify(registros));
        }
    }

    window.location.href = 'resultado.html';
}

// --- MOSTRAR RESULTADOS Y DIPLOMA (resultado.html) ---
function mostrarResultadosFinales() {
    const estudiante = JSON.parse(localStorage.getItem('estudianteActual'));
    if (!estudiante) return;

    const textoCalificacion = document.getElementById('texto-calificacion');
    if(textoCalificacion) {
        textoCalificacion.innerText = `Calificación: ${estudiante.calificacion} / 100`;
    }
    
    const mensajeEstado = document.getElementById('mensaje-estado');
    if (mensajeEstado) {
        if (estudiante.calificacion >= 60) {
            mensajeEstado.innerText = "¡Felicitaciones! Has aprobado el curso exitosamente.";
            mensajeEstado.style.color = "#10b981";
            const diplomaSec = document.getElementById('diploma-seccion');
            if(diplomaSec) diplomaSec.style.display = 'block';
            const nomDiploma = document.getElementById('nombre-estudiante-diploma');
            if(nomDiploma) nomDiploma.innerText = estudiante.nombre;
        } else {
            mensajeEstado.innerText = "No has alcanzado el puntaje mínimo de aprobación (60 pts). Inténtalo de nuevo.";
            mensajeEstado.style.color = "#ef4444";
        }
    }
}

// --- PANEL DE ADMINISTRACIÓN (admin.html) ---
function verificarAdmin(event) {
    event.preventDefault();
    const usuario = document.getElementById('user-admin').value;
    const password = document.getElementById('pass-admin').value;

    if (usuario === 'admin' && password === '2026') {
        document.getElementById('login-admin-box').style.display = 'none';
        document.getElementById('dashboard-admin').style.display = 'block';
        cargarTablaRegistros();
    } else {
        alert('Usuario o contraseña incorrectos. Recuerde: admin / 2026');
    }
}

function cargarTablaRegistros() {
    const tbody = document.getElementById('tabla-registros');
    if(!tbody) return;
    tbody.innerHTML = '';
    
    let registros = JSON.parse(localStorage.getItem('db_registros')) || [];

    if (registros.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:15px;">No hay registros de estudiantes aún.</td></tr>`;
        return;
    }

    registros.forEach(reg => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${reg.nombre}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${reg.email}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${reg.curso}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${reg.calificacion}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: ${reg.estado === 'Aprobado' ? '#10b981' : '#64748b'};">${reg.estado}</td>
        `;
        tbody.appendChild(tr);
    });
}

function cerrarSesionAdmin() {
    document.getElementById('login-admin-box').style.display = 'block';
    document.getElementById('dashboard-admin').style.display = 'none';
    document.getElementById('user-admin').value = '';
    document.getElementById('pass-admin').value = '';
}