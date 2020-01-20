import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

export default function Post({ path, title, description, date }) {
  return (
    <div className="post-list-wrapper">
      <Link to={path}>
        <h2 className="post-list-title">{title}</h2>
      </Link>

      <p>{description}</p>
      <small>Posted on {date}</small>
    </div>
  )
}
