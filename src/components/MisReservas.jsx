import React from 'react'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Reservas = () => {

    const navigate = useNavigate()
    const [user, setUser] = React.useState(null)


    React.useEffect(() => {
        if (auth.currentUser) {
            console.log('Existe un usuario');
            setUser(auth.currentUser)
            console.log(user)
        } else {
            console.log('No existe un usuario');
            navigate('/login')
        }
    }, [navigate])

    const [lista, setLista] = React.useState([]);
    const [id, setId] = React.useState('');

    React.useEffect(() => {
        const obtenerDatos = async () => {
            try {
                if (user && user.email) {
                    const data = await db.collection(user.email).get();
                    const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setLista(arrayData);
                }
            } catch (error) {
                console.error(error);
            }
        };
        obtenerDatos();
    }, [user]);



    const DevolverLibro = async (elemento) => {
        setId(elemento.id);
        try {
            const usuario = user.email;
            await db.collection('Libros').doc(elemento.idlibro).update({
                Disponibilidad: true
            });

            await db.collection(usuario).doc(elemento.id).delete();
            const listaFiltrada = lista.filter(elemento => elemento.id !== id)
            setLista(listaFiltrada)
            window.location.reload();
            alert("Se ha Devuelto este libro");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <h3>Mis Libros reservados:</h3>
            <div className="card-grid">
                {lista.map((elemento) => (
                    <div className="card" key={elemento.id}>
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {elemento.Nombres}</h5>
                            <p className="card-text">Autor: {elemento.Autor}</p>
                            <p className="card-text">Descripción: {elemento.Descripcion}</p>
                            <p className="card-text">Año: {elemento.año}</p>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => DevolverLibro(elemento)} className="btn btn-dark me-2">
                                Devolver
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reservas