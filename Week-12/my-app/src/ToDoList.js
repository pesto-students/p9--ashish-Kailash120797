import React, { useState } from "react";

function TodoList() {
  const [activity, setactivity] = useState("");
  const [ListData, setListData] = useState([]);
  function addActivity() {
    setListData([...ListData, activity]);
    setactivity("");
  }
  function removeActivity(i) {
    const updatedListData = ListData.filter((ele, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }
  return (
    <>
      <div className="container">
        <div className="header">TodoList</div>
        <input
          type="text"
          placeholder="add Activity"
          value={activity}
          onChange={(e) => setactivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List:{")"}</p>
        {ListData !== [] &&
          ListData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="ListData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>Remove</button>
                  </div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default TodoList;
