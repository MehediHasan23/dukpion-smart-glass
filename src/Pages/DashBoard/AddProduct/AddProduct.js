import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://boiling-caverns-07920.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          alert("uploaded successfully");
          reset();
        }
      });
  };
  return (
    <div className=" add-container ">
      <h3 className="text-center text-dark text-white fw-bold">Add A Product</h3>
      <div className="data-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title */}
          <input
            {...register("name")}
            placeholder="add a Title"
            className="p-2 m-2 w-50 text-center"
            required
          />

          {/* price */}
          <input
            {...register("price")}
            placeholder="Charge"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* img  */}
          <input
            {...register("img")}
            placeholder="Enter A Valid Image Url"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* Rating */}
          <input
            {...register("rating")}
            placeholder="Rating"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* rating count  */}
          <input
            {...register("ratingCount")}
            placeholder="Total Count"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* variant */}
          <input
            {...register("variant")}
            placeholder="okla/gucci"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* modelNumber  */}
          <input
            {...register("modelNumber")}
            placeholder="DKE04453/model number"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* frameMaterial  */}
          <input
            {...register("frameMaterial")}
            placeholder="Frame Material"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* Size  */}
          <input
            {...register("Size")}
            placeholder="52-16-140 mm/size"
            className="p-2 m-2 w-50 text-center "
            required
          />
          {/* frameAttribution  */}
          <input
            {...register("frameAttribution")}
            placeholder="Frame Attribution"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* description  */}
          <input
            {...register("desc")}
            placeholder="Write a short note"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* lensFunction  */}
          <input
            {...register("lensFunction")}
            placeholder="Lens Function"
            className="p-2 m-2 w-50 text-center "
            required
          />

          <input
            type="submit"
            value="Add Product"
            className="fw-bold  text-muted p-2 m-2 w-50"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
