import React from "react";

function CateItem({ item, selectCateID}) {
    return (
        <a
          href="#"
          className={`nav-link text-uppercase fs-6 ${item._id === selectCateID ? "active" : ""}`}
          id={"nav-"+item.CateName}
          data-bs-toggle="tab"
          data-bs-target={"#nav-"+item.CateName}
        >
          {item.CateName}
        </a>
      );
}

export default CateItem;