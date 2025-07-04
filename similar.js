// SelectedItem.js
import { useParams, useLocation } from "react-router-dom";
import { ItemsList } from "./data";
import "./similar.css"
function SelectedItem() {
  const { id } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const itemId = query.get("itemId");

  const parentItem = ItemsList.find(i => i.id === Number(id));
  const selectedItem = parentItem?.similarItems.find(i => i.id === itemId);

  return (
    <div className="selected-item-page">
      {selectedItem ? (
        <div className="selected-card">
          <h2>{selectedItem.name}</h2>
          <img src={`/${selectedItem.image}`} alt={selectedItem.name} className="selected-img" />
          <p>{selectedItem.description}</p>
          <p>Price: ₹{selectedItem.price}</p>
          <p>⭐ Rating: {selectedItem.rating}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default SelectedItem;
