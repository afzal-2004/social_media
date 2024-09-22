import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const Form = () => {
  const [data, setdata] = useState({
    Creator: "",
    Title: "",
    Message: "",
    tags: "",
  });
  const [File, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleData = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSendData = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(File);
    const formdata = new FormData();
    formdata.append("File", File);
    formdata.append("Creator", data.Creator);
    formdata.append("Title", data.Title);
    formdata.append("Message", data.Message);
    formdata.append("tags", data.tags);
    try {
      axios
        .post("http://localhost:3000/memories/senddata", formdata)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message));
      setdata({
        Creator: "",
        Title: "",
        Message: "",
        tags: "",
      });
      setFile(null);
      toast.success("  Succefully Post Your Data  ");
    } catch (error) {
      console.log(error);
      toast.error("All Field Are  Required");
    }
  };
  const clearData = () => {
    setdata({
      Creator: "",
      Title: "",
      Message: "",
      tags: "",
      File: null,
    });
  };
  return (
    <div className=" Formmain rounded-lg ">
      <h1 className="text-[20px]  text-center font-semibold">
        Creating An memory
      </h1>
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
        <input type="file" name="Filepath" onChange={handleFileChange} />
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
