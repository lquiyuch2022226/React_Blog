import "./Comments.css";

export const Comments = ({ publiUnica }) => {
    console.log(publiUnica, 'lo trae o no')

    return (
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
            <button className={'button'}>Comentar</button>
          </div>
        </div>
      </div>
    );
};
