import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Post from "./post/post";
import { fetchUsers, fetchPosts } from '../services/data.service';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const addNewPost = () => {
        console.log('add new post')
    }

    useEffect(() => {
        async function fetchData() {
            const users = await fetchUsers();
            const posts = await fetchPosts();
            return {
                users,
                posts
            }
        }
        fetchData().then((data) => {
            setUsers(data.users);
            setPosts(data.posts);
        });
    }, [])

    return (
        <div className="dashboard">
            <Header />

            <main className="app-main">
                <Sidebar numOfUsers={users.length} numOfPosts={posts.length} addNewPost={addNewPost} />

                <section className="posts-container">
                    <div className="posts custom-scroll-bar">
                        {posts.map(post => (
                            <Post post={post} key={post.id} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;
