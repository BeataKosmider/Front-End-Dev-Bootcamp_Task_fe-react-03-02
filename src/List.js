import React from "react";

function List({ listItems, isOrdered }) {
  let TagName;

  if (isOrdered) {
    TagName = "ol";
  } else {
    TagName = "ul";
  }

  return (
    <TagName>
      {listItems.map((li, key) => (
        <li key={key}>{li}</li>
      ))}
    </TagName>
  );
}

export default List;
