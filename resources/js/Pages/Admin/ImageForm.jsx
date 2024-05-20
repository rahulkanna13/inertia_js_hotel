// resources/js/Pages/Admin/ImageForm.jsx

import React from 'react';
import { useForm } from '@inertiajs/react';

const ImageForm = ({ hotel }) => {
  const { data, setData, post, errors, reset } = useForm({
    image: null,
  });

  const handleImageChange = (event) => {
    setData('image', event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', data.image);

    post(route('admin.uploadImage', hotel.id), formData, {
      onSuccess: () => {
        reset(); // Clear form fields on successful submission
      },
    });
  };

  return (
    <div>
      <h1>Add Images for {hotel.name}</h1>

      {errors.image && (
        <div className="alert alert-danger" role="alert">
          {errors.image}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Select Image:</label>
          <input type="file" name="image" className="form-control" accept="image/*" onChange={handleImageChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageForm;
