import React from "react"
import { Link } from "gatsby"
import "./styles.scss"
import Tag from "../Tag"

export default function Post({ path, title, description, date, tags }) {
  console.log(tags)

  return (
    <Link to={path}>
      <div className="post-list-wrapper">
        <h2 className="post-list-title">{title}</h2>

        <p>{description}</p>
        {tags.map(item => (
          <Tag key={item} tag={item} />
        ))}
        <small style={{ float: "right" }}>Posted on {date}</small>
      </div>
    </Link>
  )
}
