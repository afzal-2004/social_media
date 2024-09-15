import { useState } from "react";
import axios from "axios";
export const Form = () => {
  const [data, setdata] = useState({
    Creator: "",
    Title: "",
    Message: "",
    tags: "",
    Filepath: "",
  });

  // const handleFileChange = (e) => {
  //   setdata((prevData) => ({
  //     ...prevData,
  //     Filepath: e.target.files[0],
  //   }));
  // };
  const handleData = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSendData = (e) => {
    e.preventDefault();
    console.log(data);
    try {
      axios
        .post("http://localhost:3000/memories/senddata", {
          Creator: data.Creator,
          Title: data.Title,
          Message: data.Message,
          tags: data.tags,
          Filepath: data.Filepath,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message));
      setdata({
        Creator: "",
        Title: "",
        Message: "",
        tags: "",
        Filepath: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const clearData = () => {
    setdata({
      Creator: "",
      Title: "",
      Message: "",
      tags: "",
      Filepath: "",
    });
  };
  return (
    <div className=" Formmain rounded-lg ">
      <h1>Creating An memory</h1>
      <form
        action="Sumbit"
        onSubmit={handleSendData}
        className=" flex flex-col "
      >
        <input
          type="text "
          placeholder="Creator"
          name="Creator"
          value={data.Creator}
          onChange={handleData}
        />
        <input
          type="text "
          placeholder="Title"
          name="Title"
          value={data.Title}
          onChange={handleData}
        />
        <textarea
          className=" outline-none border border-black mt-4 p-2 rounded-lg "
          maxLength={"100"}
          placeholder="Message"
          value={data.Message}
          name="Message"
          onChange={handleData}
        />
        <input
          type="text "
          placeholder="tags"
          value={data.tags}
          name="tags"
          onChange={handleData}
        />
        <input type="file" name="Filepath" onChange={handleData} />
        <button type="sumbit" className=" bg-blue-400  ">
          Sumbit
        </button>
        <button className=" bg-red-500 " onClick={clearData}>
          Clear
        </button>
      </form>
    </div>
  );
};
