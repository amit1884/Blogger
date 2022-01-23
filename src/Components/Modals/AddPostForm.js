import Cookies from "js-cookie";
import React, { useState } from "react";
import swal from "sweetalert";
import Card from "../Card";
import Backdrop from "./Backdrop";

function AddPostForm(props) {
  const { b_id, setOpen, setPostAdded } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const AddPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title || description) {
      const accessToken = Cookies.get("accessToken");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + accessToken);
      myHeaders.append("Content-Type", "application/json");

      let fdata = {
        kind: "blogger#post",
        blog: {
          id: b_id,
        },
        title: title,
        content: description,
      };
      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(fdata),
      };
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}${b_id}/posts`,
          requestOptions
        );
        const data = await response.json();
        console.log(data);
        setPostAdded(true);
        setOpen(false);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        swal({
          icon: "warning",
          title: err?.message,
        });
      }
    } else {
      console.log("All Fields are required !");
      swal({
        icon: "warning",
        title: "All Fields are required !!",
      });
      setLoading(false);
    }
  };
  return (
    <Backdrop>
      <Card>
        <h2 className="text-primary">
          <u>Add Form</u>
        </h2>
        <button className="btn-close" onClick={() => setOpen(false)}>
          X
        </button>
        <form className="post-form" onSubmit={AddPost}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <br />
            <br />
            <textarea
              id="desc"
              placeholder="Content...."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button className="btn-action btn-add">
              {loading ? "Loading.." : "Submit"}
            </button>
          </div>
        </form>
      </Card>
    </Backdrop>
  );
}

export default AddPostForm;
