import { Route, Routes } from "react-router-dom";
import { Publications } from "../publications/Publication";

export const Content = ({publications, getPublications}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="publications" element={<Publications publications={publications}/>}/>
            </Routes>
        </div>
    )
}   