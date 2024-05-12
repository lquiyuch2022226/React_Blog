export const PublicationsCard = ({publicaciones}) => {
    console.log(publicaciones);

    if (!Array.isArray(publicaciones)) {
        return <div>No hay publicaciones disponibles</div>;
    }

    return (
        <div className="post">
            {publicaciones.map((publicacion, index) => (
                <div className="card" key={index}>
                    <div className="image">
                        <img src={publicacion.imagen} alt="Imagen" />
                    </div>
                    <div className="info">
                        <label>Titulo</label>
                        <div>{publicacion.title}</div>
                    </div>
                    <div className="text">
                        <label>Descripción</label>
                        <div>{publicacion.text}</div>
                    </div>
                    <button>Comentarios</button>
                </div>
            ))}
        </div>
      );
}