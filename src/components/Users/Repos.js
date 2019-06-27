import React from "react";

export default function Repos({ name, created, url }) {
  return (
    <div className="repo">
    
      <p>
        {name} <br />
      </p>
      <a href={url}>{url}</a> <br /> <br />
    </div>
  );
}
