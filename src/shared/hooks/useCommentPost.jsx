import { useState } from "react";
import { commentPost as commentPostRequest } from "../../services/api";

export const useCommentPost = () => {
    const [comment, setComment] = useState([]);
    const [error, setError] = useState(null);
    const commentPost = async (idPublication, commentText) => {
        const responseData = await commentPostRequest(idPublication, commentText)
        if (responseData.error) {
            console.log(responseData.message)
            setError(responseData.error)
        }
        setComment(responseData.data)
    }
    return {
        comment,
        error,
        commentPost,
        setComment
    }
}
