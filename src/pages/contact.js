import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <h2>Entre em contato</h2>
      <form>
        <input
          style={{ margin: "10px 0", padding: ".5rem", width: "100%" }}
          type="text"
          placeholder="email"
          required
        />
        <input
          style={{ margin: "10px 0", padding: ".5rem", width: "100%" }}
          type="text"
          placeholder="name"
          required
        />
        <textarea
          style={{ margin: "10px 0", padding: ".5rem", width: "100%" }}
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="message"
        />

        <input
          style={{ width: "100%", border: 0, padding: "2px" }}
          type="submit"
          value="Enviar"
        />
      </form>
    </Layout>
  )
}
