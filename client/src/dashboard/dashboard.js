import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Post from './post/post';
import { fetchUsers, fetchPosts, saveNewPost } from '../services/data.service';
import Popup from '../popup/popup';
import { ButtonName, PopupMessages } from '../utils/constants';

const Dashboard = () => {
    const { CREATE_POST, DELETE_POST, EDIT_POST } = ButtonName;
    const { CREATE_POST_MSG, DELETE_POST_MSG, EDIT_POST_MSG } = PopupMessages;

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const [usersById, setUsersById] = useState({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newPostContent, setNewPostContent] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupBtnName, setPopupBtnName] = useState('button');
    const [isDashboard, setIsDashboard] = useState(false);

    const openPopup = (post, btnName) => {
        setIsPopupOpen(!isPopupOpen);
        setSelectedPost(post);
        setPopupBtnName(btnName);
        if (post) {
            setNewPostContent(post.body);
        } else {
            setNewPostContent('');
        }
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

    const handleClickPopupBtn = (popupBtnName) => {
        if (popupBtnName === CREATE_POST) addNewPost();
        if (popupBtnName === EDIT_POST) editPost();
        if (popupBtnName === DELETE_POST) deletePost();
    };

    const addNewPost = () => {
        if (newPostContent.length === 0) return;

        // create a new post
        const lastPost = posts[posts.length - 1];
        const newPost = {
            body: newPostContent,
            id: lastPost.id + 1,
            title: newPostContent.slice(0, 30),
            userId: lastPost.userId,
        };
        // simulate saving post on the backend
        saveNewPost(newPost).then((res) => console.log(res));
        setPopupMessage(CREATE_POST_MSG);

        // set a new post to the state
        setFilteredPosts([...posts, newPost]);

        // close popup, hide message, clear textarea
        cleanPopup();
    };

    const editPost = () => {
        // allows edit post body
        const updatedPosts = posts.map((post) => {
            if (post.id === selectedPost.id) {
                return { ...post, body: newPostContent };
            } else {
                return post;
            }
        });
        setPopupMessage(EDIT_POST_MSG);

        // update state for posts
        setFilteredPosts(updatedPosts);

        // close popup, hide message, clear textarea
        cleanPopup();
    };

    const deletePost = () => {
        const updatedPosts = posts.filter((post) => post.id !== selectedPost.id);
        setPopupMessage(DELETE_POST_MSG);

        // update state for posts
        setFilteredPosts(updatedPosts);

        // close popup, hide message, clear textarea
        cleanPopup();
    };

    const cleanPopup = () => {
        setTimeout(() => {
            setIsPopupOpen(false);
            setPopupMessage('');
            setNewPostContent('');
        }, 1500);
    };

    const processUsers = (users) => {
        const usersObj = {};
        users.forEach((user) => {
            usersObj[user.id] = user;
        });
        setUsersById(usersObj);
    };

    const filterPostsByUserName = (e) => {
        if (parseInt(e.target.value) === 0) return;
        const updatedPosts = posts.filter(
          (post) => post.userId === parseInt(e.target.value)
        );
        setFilteredPosts(updatedPosts);
    };

    const sortPosts = (e) => {
        let updatedPosts = [...posts];
        switch (parseInt(e.target.value)) {
            case 0:
                return;
            case 1:
                // sort by A-Z
                updatedPosts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 2:
                // sort by Z-A
                updatedPosts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 3:
                // sort by word count from more words to less
                updatedPosts.sort(
                  (a, b) => b.body.split(' ').length - a.body.split(' ').length
                );
                break;
            default:
                return;
        }
        setFilteredPosts([...updatedPosts]);
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
            if (data.users.length > 0 && data.posts.length > 0) {
                processUsers(data.users);
                setUsers(data.users);
                setPosts(data.posts);
                setFilteredPosts(data.posts);
                setIsDashboard(true);
            }
        });
    }, []);

    return isDashboard ? (
      <div className="dashboard">
          <Header
            users={users}
            filterPostsByUserName={filterPostsByUserName}
            sortPosts={sortPosts}
          />

          <main className="app-main">
              <Sidebar
                numOfUsers={users.length}
                numOfPosts={filteredPosts.length}
                openPopup={openPopup}
              />

              <section className="posts-container">
                  <div className="posts custom-scroll-bar">
                      {filteredPosts.map((post) => (
                        <Post
                          post={post}
                          userName={usersById[post.userId].name}
                          key={post.id}
                          openPopup={openPopup}
                        />
                      ))}
                  </div>
              </section>
          </main>

          <Popup
            isPopupOpen={isPopupOpen}
            closePopup={closePopup}
            newPostContent={newPostContent}
            handleClickPopupBtn={handleClickPopupBtn}
            handleTextareaChange={handleTextareaChange}
            popupMessage={popupMessage}
            popupBtnName={popupBtnName}
          />
      </div>
    ) : (
      <div>Something wrong. Please, try again later.</div>
    );
};

export default Dashboard;
