import Post from "./Post"
import './PostList.css';
const PostList = () =>
{
    return(
        <div className='post-list'>
            <Post  imageUrl="https://via.placeholder.com/300" title="Sample Post 1" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            <Post  imageUrl="https://via.placeholder.com/300" title="Sample Post 1" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            <Post  imageUrl="https://via.placeholder.com/300" title="Sample Post 1" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
        
    )
}

export default PostList;