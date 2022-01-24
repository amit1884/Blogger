import Cookies from "js-cookie";
import React, { useState } from "react";
import swal from "sweetalert";
import Card from "../Card";
import Backdrop from "./Backdrop";

function AddPostForm(props) {
  const { b_id, setOpen, setPostAdded, type, data } = props;
  const [title, setTitle] = useState(data?.title ? data.title : "");
  const [description, setDescription] = useState(
    data?.content ? data?.content : ""
  );
  const [loading, setLoading] = useState(false);
  const AddPost = async () => {
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

  const EditPost = async () => {
    if (title && description) {
      let editData = {
        kind: "blogger#post",
        id: data?.id,
        blog: {
          id: data?.blog.id,
        },
        url: data?.url,
        selfLink: data?.selfLink,
        title: title,
        content: description,
      };

      const accessToken = Cookies.get("accessToken");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + accessToken);
      myHeaders.append("Content-Type", "application/json");
      console.log(editData);

      let requestOptions = {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(editData),
      };

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}${data?.blog.id}/posts/${data?.id}`,
          requestOptions
        );
        setLoading(false);

        if (response.ok) {
          setOpen(false);
          setPostAdded(true);
        } else {
          swal({
            icon: "warning",
            title: "Update Failure",
          });
        }
      } catch (err) {
        console.log(err);
        swal({
          icon: "warning",
          title: "Something Went Wrong",
        });
      }
    } else {
      swal({
        icon: "warning",
        title: "All Fields are required !",
      });
      setLoading(false);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (type === "ADD") AddPost();
    else EditPost();
  };
  return (
    <Backdrop>
      <Card>
        <h2 className="text-primary">
          <u>{type === "EDIT" ? "Edit Form" : "Add Form"}</u>
        </h2>
        <button className="btn-close" onClick={() => setOpen(false)}>
          X
        </button>
        <form className="post-form" onSubmit={submitHandler}>
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
