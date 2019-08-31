import React from "react";
import useResources from "./useResources";

// export default class ResourceList extends Component {
//   state = { resource: [] };

//   // It doens't get recalled on re-render, ONLY on first mount
//   async componentDidMount() {
//     this._fetchData();
//   }

//   // Gets called whenever we use setState > Which called componentDidUpdate > which calls setState > etc
//   // Use prevProps to test for chanage
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) this._fetchData();
//   }

//   async _fetchData() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );

//     this.setState({ resource: response.data });
//   }

//   render() {
//     return <div>{this.state.resource.length}</div>;
//   }
// }

// You can extract this into it's own functions and resource in components

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
