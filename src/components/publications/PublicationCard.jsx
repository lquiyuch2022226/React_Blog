/* eslint-disable react/prop-types */

const imageUrl = 'https://static.vecteezy.com/system/resources/previews/013/125/488/non_2x/default-avatar-profile-icon-social-media-user-sign-symbol-vector.jpg'

const PublicationImg = ({ url }) => {
    return (
        <div className="">
            <img src={url ? url : imageUrl} width='100%' height='100%' alt="Default avatar" />
        </div>
    )
}

export const PublicationCard = ({
    title,
    id,
    text,
    imagen,
    verMas,
    navigateToPublicationHandler
}) => {
    const handleNavigate = () => {
        navigateToPublicationHandler(id)
    }

    return (
        <div className="channels-card" onClick={handleNavigate}>
            <PublicationImg url={imagen} />
            <span className="">{title}</span>
            <span className="">{text}</span>
            <span className="" style={{ color: 'red' }}>{verMas}</span>
        </div>
    )
}