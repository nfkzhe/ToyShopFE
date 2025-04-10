import React from 'react';

const BlogPost = ({ post }) => {
    return (
        <div className="post-item style-bottom-info layout-02">
            <div className="thumbnail">
                <a href="#" className="link-to-post">
                    <img src={post.image} width="370" height="270" alt="" />
                </a>
                <div className="post-date">
                    <span className="date">{post.date}</span>
                    <span className="month">{post.month}</span>
                </div>
            </div>
            <div className="post-content">
                <h4 className="post-name">
                    <a href="#" className="linktopost">
                        {post.title}
                    </a>
                </h4>
                <div className="post-meta">
                    <a href="#" className="post-meta__item author">
                        <img src={post.authorImage} width="28" height="28" alt="" />
                        <span>{post.author}</span>
                    </a>
                    <a href="#" className="post-meta__item btn liked-count">
                        {post.likes}
                        <span className="biolife-icon icon-comment"></span>
                    </a>
                    <a href="#" className="post-meta__item btn comment-count">
                        {post.comments}
                        <span className="biolife-icon icon-like"></span>
                    </a>
                </div>
                <p className="excerpt">{post.excerpt}</p>
                <div className="group-buttons">
                    <a href="#" className="btn readmore">
                        continue reading
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
