import React, { useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  const [rerender, setRerender] = useState(false);

  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate rerender={rerender} rerenderCallback={setRerender} />
      <hr />
      <h1>Posts</h1>
      <PostList rerender={rerender} rerenderCallback={setRerender} />
    </div>
  );
};

export default App;
