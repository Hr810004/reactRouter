import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
function Github() {
   const data =  useLoaderData()
//   const [data, setData] = useState({});
//     useEffect(() => {
//         fetch("https://api.github.com/users/Hr810004")
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setData(data);
//             }) 
//     }, []);

  return (
    <div className="text-center text-3xl text-white bg-gray-600 m-4 p-4 ">Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Profile" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Hr810004");
    return response.json();
}