import React from "react";
import "./AddItem.css";
function AddItem({id,toggleFlag}) {
  
  const addItem = async()=>{
    const name=document.getElementById("name");
    const price=document.getElementById("price");
    const description=document.getElementById("description");
    const imageLink=document.getElementById("image");
    const category=document.getElementById("category");

    if(!name.value||!price.value||!description.value||!imageLink.value||!category.value){
      return "Required";
    }
    const response = await fetch("http://localhost:3000/addProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sellerId:id,
        name: name.value,
        price: price.value,
        description:description.value,
        image:imageLink.value,
        category:category.value,
      }),
    });
  
    const json = await response.json();

    name.value=price.value=description.value=imageLink.value=category.value="";
    return json.message;
  }
  const handleSubmit = async()=>{
      const submit=await addItem();
      toggleFlag();
      console.log(submit);
  }

  return (
    <table className="addItemPage" border={"2px"}>
    <tbody>
      <tr className="inputTag">
        <td>Name</td>
        <td>
          <input type="text" placeholder="Product Name" id="name" required />
        </td>
      </tr>

      <tr className="inputTag">
        <td>Price</td>
        <td>
          <input type="number" placeholder="Price" id="price" />
        </td>
      </tr>

      <tr className="inputTag">
        <td>Description</td>
        <td>
          <input type="text" placeholder="Description" id="description" />
        </td>
      </tr>

      <tr className="inputTag">
        <td>Image</td>
        <td>
          <input type="text" placeholder="Image Link" id="image" />
        </td>
      </tr>

      <tr className="inputTag">
        <td>Category</td>
        <td>
          <input type="text" placeholder="Category" id="category" />
        </td>
      </tr>
      <tr className="inputTag">
        <td colSpan={2}>
          <button type="submit" id="submit" onClick={()=>handleSubmit()}>
            Add Item
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  );
}

export default AddItem;
