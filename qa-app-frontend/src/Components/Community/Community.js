import React, {useState} from "react";
import './Community.css'; //Styling for the community page
const Community = () => {
    //Sample data for posts and comments
    const [posts, setPosts] = useState([
        { id: 1, title: 'How to handle state in React?', content: 'I am new to React and wondering how to handle state effectively. Any tips?', comments: [
                { id: 1, text: 'You can use useState for local state management. For global, try Redux or Context API.' },
                { id: 2, text: 'Check out also Recoil and MobX.' }
            ]},
        { id: 2, title: 'Best practices for REST API design?', content: 'What are some of the best practices when designing RESTful APIs?', comments: [
                { id: 1, text: 'Use nouns instead of verbs in endpoint paths.' },
                { id: 2, text: 'Always version your API.' }
            ]}
    ]);

    const addComment = (postId, comment) => {
        const newPosts = posts.map(post => {
            if(post.id === postId) {
                return {...post, comments: [...post.comments, { id: post.comments.length + 1, text:comment}]};
            }
            return post;
        });
        setPosts(newPosts);
    };

    const handleCommentSubmit = (event, postId) => {
        event.preventDefault();
        const comment = event.target.comment.value.trim();
        if(comment) {
            addComment(postId, comment);
            event.target.comment.value = ''; //Reset comment input
        }
    };

    return (
        <div className="community">
            <h1>Community Forum</h1>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <div className="comments">
                        <h3>Comments:</h3>
                        {post.comments.map(comment => (
                            <p key={comment.id}>{comment.text}</p>
                         ))}
                        <form onSubmit={(e) => handleCommentSubmit(e, post.id)}>
                              <input type="text" name="comment" placeholder="Add a comment..."/>
                              <button type="submit">Comment</button>
                        </form>
                    </div>
                </div>
                ))}
        </div>
    );
};

export default Community;