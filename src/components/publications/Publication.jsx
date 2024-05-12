import { useNavigate } from "react-router-dom";
import { PublicationCard } from "./PublicationCard";

export const Publications = ({publications}) => {
    const navigate  = useNavigate()

    const handleNavigateToPublication = (id) => {
        navigate(`/publication/${id}`)
    }

    return(
        <div className="">
           {publications.map((c) => (
                <PublicationCard
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    text={c.text}
                    verMas={c.verMas}
                    imagen={c.imagen}
                    navigateToPublication Handler={handleNavigateToPublication}
                />
            ))}
        </div>
    )
}