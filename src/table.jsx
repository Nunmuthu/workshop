import { useEffect, useState } from "react";

function Table() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const generateHead = (singleObj) => {
    // console.log(singleObj);
    let keys = Object.keys(singleObj);
    return keys.map((each, index) => <th key={"th" + index}>{each}</th>);
  };

  const generateData = (singleObj) => {
    // console.log(singleObj);
    let values = Object.values(singleObj);
    return values.map((each, index) => <td key={"td" + index}>{each}</td>);
  };

  const generateBody = (data) => {
    return data.map((each) => <tr>{generateData(each)}</tr>);
  };
  
  return (
    <div>
      {comments.length > 0 ? (
        <table>
          <thead>
            <tr>{generateHead(comments[0])}</tr>
          </thead>
          <tbody>{generateBody(comments)}</tbody>
        </table>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default Table;
