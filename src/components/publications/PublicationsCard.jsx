import { useState } from 'react';
import { usePublication } from '../../shared/hooks/usePublication'
import { useComments } from '../../shared/hooks/useComments'
import './PublicationsCard.css'
import {Comments} from '../comments/Comments'

export const PublicationsCard = ({ publicaciones }) => {
    const { getPublication } = usePublication();
    const { getComments } = useComments();
    const [selectedId, setSelectedId] = useState(null);

    const handleCommentClick = async (id) => {
        const publication = await getPublication(id);
        setSelectedId(publication);
        console.log(id, 'boton comentarios')
        getComments(id);
    }

    if (!Array.isArray(publicaciones)) {
        return <div>No hay publicaciones disponibles</div>;
    }

    if (selectedId) {
        return <Comments publiUnica={selectedId} />
    }

    return (
        <div className="container">
            {publicaciones.map((publicacion, index) => (
                <div className="card" key={index}>
                    <div className="card__header">
                        <img src={publicacion.imagen} alt="Imagen" className="card__image" />
                    </div>
                    <div className="card__body">
                        <span className="tag tag-blue">Technology</span>
                        <div className="info">
                            <h4>{publicacion.title}</h4>
                        </div>
                        <div className="text">
                            <p>{publicacion.descript}</p>
                        </div>
                        <button onClick={() => handleCommentClick(publicacion._id)} >Comentarios</button>
                    </div>
                    <div className="card__footer">
                        <div className="user">
                            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image"/>
                                <div className="user__info">
                                    <h5>Luis Quiyuch</h5>
                                </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
