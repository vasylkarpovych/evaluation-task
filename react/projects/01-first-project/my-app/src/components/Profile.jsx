import React from "react";
import "./Profile.module.css";

const Profile = () => {
  return (
    <div className="content">
      main content
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
      </div>
      <div>
        ava + discription
        {/* <img src="https://i.pinimg.com/736x/fa/09/b8/fa09b8ef55875f98d3b6e656592129d4.jpg" /> */}
      </div>
      <div>
        my posts
        <div>new post</div>
        <div className="posts">
          <div className="item">post 1</div>
          <div className="item">post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
