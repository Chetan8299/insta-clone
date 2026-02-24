import { useContext } from "react";
import { PostContext } from "../context/postContext"
import { getFeed } from "../services/post.api";

export const usePost = () => {
    const { loading, setLoading, post, setPost, feed, setFeed } = useContext(PostContext);

    const handleGetFeed = async () => {
        setLoading(true);
        try {
            const data = await getFeed();
            setFeed(data.feed)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return { loading, post, feed, handleGetFeed }
}