import axios from "axios";

const updateProductAction = (data, id, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", photo);
    formData.append("description", data.description);
    formData.append("id_category", data.id_category);
    const products = await axios.put(`http://localhost:2525/products/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = products.data;
    console.log(products);
    alert("product updated");
    setShow(false);
    window.location.reload();
    dispatch({ type: "UPDATE_PRODUCT", payload: result })
  } catch (err) {
    console.log(err);
    alert(err);
    setShow(false);
  }
};

export default updateProductAction;