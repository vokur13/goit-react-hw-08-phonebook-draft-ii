import axios from 'axios';
// import { useState } from 'react';

export const UploadView = () => {
  //   const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.file.files[0]);
    const file = e.target.file.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);

    axios.post('url...', formData).then(console.log()).catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  );
};
