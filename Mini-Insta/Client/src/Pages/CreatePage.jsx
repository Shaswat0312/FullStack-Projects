import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post("http://localhost:8000/create", formData);

      navigate("/feed"); // Redirect after successful post
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <label>Post Image</label>
        <input type="file" name="image" accept="image/*" required />

        <label>Enter Caption</label>
        <input
          type="text"
          name="caption"
          placeholder="Enter Your Caption"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePage;