import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Post from './post/post';
import { fetchUsers, fetchPosts, saveNewPost } from '../services/data.service';
import Popup from '../popup/popup';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newPostContent, setNewPostContent] = useState('');
    const [isMessage, setIsMessage] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const closePopup = (e) => {
        if (
          e.target.className === 'bg-overlay active' ||
          e.target.id === 'popup-close-btn' ||
          e.target.className === 'line'
        )
            setIsPopupOpen(!isPopupOpen);
    };

    const handleTextareaChange = (e) => {
        setNewPostContent(e.target.value);
    };

    const addNewPost = () => {
        if (newPostContent.length === 0) return;
        setIsMessage(true);

        // create a new post
        const lastPost = posts[posts.length - 1];
        const newPost = {
            body: newPostContent,
            id: lastPost.id + 1,
            title: newPostContent.slice(0, 30),
            userId: lastPost.userId,
        };
        // simulate save post on backend
        saveNewPost(newPost).then((res) => console.log(res));

        // save a new post to the state
        setPosts([...posts, newPost]);

        // close popup, hide message, clear textarea
        setTimeout(() => {
            setIsPopupOpen(false);
            setIsMessage(false);
            setNewPostContent('');
        }, 1500);
    };

    useEffect(() => {
        async function fetchData() {
            const users = await fetchUsers();
            const posts = await fetchPosts();
            return {
                users,
                posts,
            };
        }
        fetchData().then((data) => {
            setUsers(data.users);
            setPosts(data.posts);
        });
    }, []);

    return (
      <div className="dashboard">
          <Header />

          <main className="app-main">
              <Sidebar
                numOfUsers={users.length}
                numOfPosts={posts.length}
                openPopup={openPopup}
              />

              <section className="posts-container">
                  <div className="posts custom-scroll-bar">
                      {posts.map((post) => (
                        <Post post={post} key={post.id} />
                      ))}
                  </div>
              </section>
          </main>

          <Popup
            isPopupOpen={isPopupOpen}
            closePopup={closePopup}
            newPostContent={newPostContent}
            addNewPost={addNewPost}
            handleTextareaChange={handleTextareaChange}
            isMessage={isMessage}
          />
      </div>
    );
};

export default Dashboard;
