import "./styles.css";
import { gql, useQuery } from "@apollo/client";
import { useQuery as useQueryT } from "@tanstack/react-query";
import axios from "axios";

const spacexQ = gql`
  query {
    company {
      ceo
      coo
      cto
      cto_propulsion
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      name
      summary
      test_sites
      valuation
      vehicles
    }
  }
`;

// const getUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const getUsers = async () => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);

  return data;
};

export default function App() {
  const { data, loading, error } = useQuery(spacexQ, {
    variables: { name: "all" }
  });

  const { isLoading, error: errorRepo, data: dataRepo, isFetching } = useQueryT(
    {
      queryKey: ["todos"],
      queryFn: getUsers
    }
  );

  console.log(dataRepo, ":###data repo");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {JSON.stringify(data, loading, error)}
      <hr />
      {JSON.stringify(dataRepo)}
    </div>
  );
}
