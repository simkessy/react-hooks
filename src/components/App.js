import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./userList";

const App = () => {
  // You don't have to do constructor super anymore
  // state = {
  //   resource: "posts"
  // };

  // Converted to use hooks
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource}></ResourceList>
    </div>
  );
};

export default App;
