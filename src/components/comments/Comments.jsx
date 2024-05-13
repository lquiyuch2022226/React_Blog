import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import "./Comments.css";
import { useCommentPost } from "../../shared/hooks/useCommentPost";
import { useComments } from "../../shared/hooks/useComments";

export const Comments = ({ publiUnica }) => {

    const [desc, setDesc] = useState("");
    const [autor, setAutor] = useState("");
    const { commentPost } = useCommentPost();
    const { comments, getComments } = useComments(publiUnica.publication._id);

    useEffect(() => {
        getComments(publiUnica.publication._id);
    }, [publiUnica.publication._id]);

    const handleSubmit = async () => {
        console.log(publiUnica.publication._id, autor, desc)
        await commentPost(publiUnica.publication._id, autor, desc);
        getComments(publiUnica.publication._id);
        setDesc("");
        setAutor("");
        toast.success("Comentario agregado");
    };

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


    return (
        <div className='all_container'>
            <div className='container'>
                <h1 className='title'>
                    <b>{publiUnica.publication.title}</b>
                </h1>
                <div className='post'>
                    <div className='imgContainer'>
                        <img src={getImagePath(publiUnica.publication)} alt="" className='image' />
                    </div>

                    <div className='textContainer'>
                        <p className='postTitle'>
                            {publiUnica.publication.descript}
                        </p>
                        <h1 className='postDesc'>{publiUnica.publication.text}</h1>
                    </div>
                </div>
            </div>

            <div className='container_2'>
                <div className='input_Title'>
                    <h4 className='fooder_title'>Comentarios</h4>
                    <div className='write'>
                        <input
                            placeholder="Nombre Completo"
                            className='input'
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                        />
                        <textarea
                            placeholder="Escribe un comentario :)..."
                            className='input'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <button className='button' onClick={handleSubmit}>
                            Send
                        </button>
                    </div>
                </div>

                <div>
                    <div className='comments'>
                        {comments.slice().reverse().map((item) => (
                            <div className='comment' key={item._id}>
                                <div className='user'>
                                    <img
                                        src={'../../../public/user.png'}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className='image_user'
                                    />
                                </div>
                                <p className='desc'>{item.commentText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};
