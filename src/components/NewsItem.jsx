import React, { Component } from "react";

export default class NewsItem extends Component {  

  render() {
    let { imageUrl, title, description, newsUrl , date} = this.props;    
    const dUrl =
      "https://th.bing.com/th/id/OIP.fmZdo6kLTCGENw6l_NvogwHaHD?rs=1&pid=ImgDetMain";
    return (
      <div className="mx-3 my-3 rounded border border-gray-700 p-2 w-72 h-98 relative hover:border-white hover:scale-105">
        <img
          src={imageUrl ? imageUrl : dUrl}
          alt="Imagine the situation by your own :)"
          className="h-44 w-full"
        />
        <p className="font-semibold mt-2" id="title">
          {title
            ? title.length > 90
              ? title.slice(0, 87) + "..."
              : title
            : ""}
        </p>
        <p className="text-sm mb-9 text-gray-400" id="description">
          {description
            ? description.length > 75
              ? description.slice(0, 72) + "..."
              : description
            : "Click Read more"}
        </p>
        <p className="text-xs text-yellow-400 absolute bottom-1 border rounded-full p-1">{date.split("T").reverse().join(" ").split("Z").join("")}</p>
        <a
          className="bg-orange-700 text-white rounded p-1 absolute right-1 bottom-1"
          href={newsUrl}
          target="_blank"
        >
          Read more...
        </a>
      </div>
    );
  }
}
