import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import React, {useState, useEffect} from 'react';

const Profile = () => {

const [postLists, setPostList] = useState([]);
const postsCollectionRef = collection(db, "posts");

const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  

  getPosts();
}, [deletePost]);

  return (
    <div className="profilePage">
        <div>
            <h1>The critic: {auth.currentUser?.email}</h1>
            <h2 className="critique">The Critique:</h2>
        </div>
      {postLists.map((post) => {
        return (

        
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            
          </div>
        );
      })}
    </div>
  )
}

export default Profile;