import React, { useState } from "react";
import './Community.css'; // Styling for the community page
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Community = () => {
    // Sample data for posts and comments
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'How do I achieve an ISTQB® certification?',
            content: 'I am a software tester and I want to get an ISTQB® certification. What is the process?',
            comments: [
                { id: 1, text: 'You must successfully pass an official ISTQB® exam for the certification you wish to achieve.' },
                { id: 2, text: 'You can prepare for the exam by studying the ISTQB® syllabus and taking practice tests.' }
            ]
        },
        {
            id: 2,
            title: 'Best practices for REST API design?',
            content: 'What are some of the best practices when designing RESTful APIs?',
            comments: [
                { id: 1, text: 'Use nouns instead of verbs in endpoint paths.' },
                { id: 2, text: 'Always version your API.' }
            ]
        },
        {
            id: 3,
            title: 'Playwright vs Selenium: Which One to Choose for Your Test Automation.',
            content: 'I am looking to automate my tests. Which tool should I go for, Playwright or Selenium?',
            comments: [
                { id: 1, text: 'Playwright has limited community support, but it has many modern features.' },
                { id: 2, text: 'Selenium has been around for a long time and has a large community.' }
            ]
        },
        {
            id: 4,
            title: 'Best practices for performance testing?',
            content: 'What are some best practices for performance testing in software development?',
            comments: [
                { id: 1, text: 'Performance tuning' },
                { id: 2, text: 'A test-driven model not only necessitates testing early, but it also means testing often – very often.' }
            ]
        }
    ]);

    const addComment = (postId, comment) => {
        const newPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, comments: [...post.comments, { id: post.comments.length + 1, text: comment }] };
            }
            return post;
        });
        setPosts(newPosts);
    };

    const deleteComment = (postId, commentId) => {
        const newPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, comments: post.comments.filter(comment => comment.id !== commentId) };
            }
            return post;
        });
        setPosts(newPosts);
    };

    const handleCommentSubmit = (event, postId) => {
        event.preventDefault();
        const comment = event.target.comment.value.trim();
        if (comment) {
            addComment(postId, comment);
            event.target.comment.value = ''; // Reset comment input
        }
    };

    return (
        <div className="community">
            <h1>Community Forum</h1>
            <div className="posts-container">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <div className="comments">
                            <h3>Comments:</h3>
                            {post.comments.map(comment => (
                                <div key={comment.id} className="comment">
                                    <i className="fas fa-user"></i>
                                    <p>{comment.text}</p>
                                    <button onClick={() => deleteComment(post.id, comment.id)} className="delete-button">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            ))}
                            <form onSubmit={(e) => handleCommentSubmit(e, post.id)}>
                                <input type="text" name="comment" placeholder="Add a comment..." />
                                <button type="submit">Comment</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
