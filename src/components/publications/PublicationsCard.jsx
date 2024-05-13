import { useState } from 'react';
import { usePublication } from '../../shared/hooks/usePublication'
import { useComments } from '../../shared/hooks/useComments'
import './PublicationsCard.css'
import { Comments } from '../comments/Comments'  

export const PublicationsCard = ({ publicaciones }) => {
    const { getPublication } = usePublication();
    const { getComments } = useComments();
    const [selectedId, setSelectedId] = useState(null);

    const handleCommentClick = async (id) => {
        const publication = await getPublication(id);
        setSelectedId(publication);
        getComments(id);
    }

    if (!Array.isArray(publicaciones)) {
        return <div>No hay publicaciones disponibles</div>;
    }

    const getImagePath = (publicaciones) => {
        switch (publicaciones.title) {
            case 'Sistema de adopción de mascotas':
                return '../../../public/mascotas.jpg';

            case 'Control Académico':
                return '../../../public/academico.jpg';

            case 'Beneficios de la utilización de ReactJS':
                return '../../../public/react.jpg';

            default:
                return '../../../public/react.jpg';
        }
    };

    

    if (selectedId) {
        return <Comments publiUnica={selectedId} />
    }

    return (
        <div className="container">
            {publicaciones.map((publicacion, index) => (
                <div className="card" key={index}>
                    <div className="card__header">
                        <img src={getImagePath(publicacion)} alt="Imagen" className="card__image" />
                    </div>
                    <div className="card__body">
                        <span className="tag tag-blue">Technology</span>
                        <div className="info">
                            <h4>{publicacion.title}</h4>
                        </div>
                        <div className="text">
                            <p>{publicacion.descript}</p>
                        </div>
                        <button onClick={() => handleCommentClick(publicacion._id)} className='button_More'>Ver Más</button>
                    </div>
                    <div className="card__footer">
                        <div className="user">
                            <img src="../../../public/me.jpg" alt="user__image" className="user__image" />
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
