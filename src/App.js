import "./App.css";
import useFetch from "./api/store";

function clickButton() {
  fetch("http://localhost:3000/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      author: "Darwin",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function App() {
  const storeData = useFetch("http://localhost:3000/posts");
  console.log("TypeOf : ", typeof storeData);
  var rows = [];

  if (storeData != null) {
    storeData.forEach((element) => {
      rows.push(
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>{element.title}</td>
          <td>{element.author}</td>
        </tr>
      );
    });
  }

  return (
    <div className="App">
      {console.log(storeData)}
      <header className="App-header">
        <div>Hello How are you?</div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <div>
          <br />
          <br />
          <button onClick={clickButton}>
            Click to update part of the data
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
