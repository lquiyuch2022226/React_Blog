import { useState } from 'react';
import { useEffect } from 'react';
import "./Comments.css";
import { useCommentPost } from "../../shared/hooks/useCommentPost";
import { useComments } from "../../shared/hooks/useComments";

export const Comments = ({ publiUnica }) => {
    console.log(publiUnica, 'muestra el titulo al boton')

    const [desc, setDesc] = useState("");
    const { commentPost } = useCommentPost();
    const { comments, getComments } = useComments(publiUnica.publication._id);
    console.log(publiUnica.publication._id, 'envio al hook')
    console.log(comments, 'respuesta del hook')

    useEffect(() => {
        getComments(publiUnica.publication._id);
    }, [publiUnica.publication._id]);

    const handleSubmit = async () => {
        console.log(publiUnica.publication._id, desc)
        await commentPost(publiUnica.publication._id, desc);
        getComments(publiUnica.publication._id);
    };


    return (
        <div className='all_container'>
            <div className='info_container'>
                <div className='container'>
                    <h1 className='title'>
                        <b>{publiUnica.publication.title}</b>
                    </h1>
                    <div className='post'>
                        <div className='imgContainer'>
                            <img src={publiUnica.publication.imagen} alt="" className='image' />
                        </div>

                        <div className='textContainer'>
                            <p className='postTitle'>
                                {publiUnica.publication.descript}
                            </p>
                            <h1 className='postDesc'>{publiUnica.publication.text}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container_2'>

                <div className='input_Title'>
                    <h4 className='fooder_title'>Comentarios</h4>
                    <div className='write'>
                        <textarea
                            placeholder="Escribe un comentario :)..."
                            className='input'
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <button className='button' onClick={handleSubmit}>
                            Send
                        </button>
                    </div>
                </div>

                <div>
                    <div className='comments'>
                        {comments.map((item) => (
                            <div className='comment' key={item._id}>
                                <div className='user'>
                                    <img
                                        src={'../../../public/user.png'}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className='image'
                                    />
                                </div>
                                <p className='desc'>{item.commentText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
};

