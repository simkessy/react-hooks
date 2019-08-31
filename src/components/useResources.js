import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  // Called on load
  useEffect(
    () => {
      (async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources(response.data);
      })(resource);
    },
    // if any of the vals in this array change, the method get's called
    // Very similar to componentDidUpdate(prevProp) prevprop.val === props.val
    // If there's no change, don't run method
    [resource]
  );

  return resources;
};

export default useResources;
