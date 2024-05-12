import { useState } from "react"
import toast from "react-hot-toast"
import { commentsGet as commentsGetRequest } from "../../services"

export const useComments = () => {
    const [comments, setComments] = useState([])

    const getComments = async () => {
        const commentsData = await commentsGetRequest()
        if (commentsData.error) {
            return toast.error(
                commentsData.e?.response?.data || 'Error ocurred when reading comments'
            )
        }


        return setComments({
            comments: commentsData.data.comments
        })
    }
    return {
        comments,
        getComments,
        allComments: comments?.comments,
    }
}