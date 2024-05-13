import { useState } from 'react';
import "./Comments.css";
import { useCommentPost } from "../../shared/hooks/useCommentPost";

export const Comments = ({ publiUnica }) => {
    console.log(publiUnica, 'lo trae o no')

    const [desc, setDesc] = useState("");
    const { commentPost } = useCommentPost();

    const handleSubmit = async () => {
        console.log(publiUnica.publication._id, desc)
        await commentPost(publiUnica.publication._id, desc);
    };

    return (
        <div>
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

            <div className='container'>
                <h1 className='title'>Comments</h1>
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
        </div>
    )
};

