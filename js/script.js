const listaUsuarios = document.getElementById('listaUsuarios')


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no ha sido exitosa')
        }

        return response.json()
    })
    .then(usuarios => {
        const usuariosNuevosDatos = usuarios.map(usuario => {
            return {
                ...usuario,
                age: Math.floor(Math.random()*100),
                img: `../assets/img/${usuario.id}.jpeg`,
            }
        })

        for (const usuario of usuariosNuevosDatos) {
            const { name, age, username, img, phone, email, company, address } = usuario
            const { street, suite, city } = address
    
            const mostrarDatos = `
            <div class=conjunto >
                <li class="primero" >
                    <div class="imagen">
                        <img src="${img}" alt="" />
                    </div>
                    <div class="datos">
                        <p><span>Nombre:</span>${name}</p>
                        <p><span>Edad:</span>${age}</p>
                        <p><span>Username:</span>${username}</p>
                        <p><span>Teléfono:</span>${phone}</p>
                        <p><span>Email:</span>${email}</p>
                    </div>
                </li>
                <li class="segundo">
                    <p><span>Compañía:</span>${company.name}</p>
                    <p><span>Dirección:</span>${street}, ${suite}, ${city}
                </li>
            </div>`
            listaUsuarios.innerHTML += mostrarDatos
        }
    })
    .catch(error => {
        console.error(error)
        listaUsuarios.innerHTML = "Error al cargar los datos."
    })
