import React, { useState } from "react";
import { propertyData } from "../../data/data";
import BackButton from "../../components/backButton";

const PropertySearchTool = () => {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [filterType, setFilterType] = useState("All");

  const handleCheck = (property) => {
    setSelectedProperties((prevSelected) =>
      prevSelected.includes(property)
        ? prevSelected.filter((p) => p !== property)
        : [...prevSelected, property]
    );
  };

  const handleSearch = () => {
    setSearchQuery(search);
  };

  const filteredProperties = propertyData.filter((property) => {
    return (
      property.address.includes(searchQuery) &&
      (filterType === "All" || property.type === filterType)
    );
  });

  return (
    <div className="container my-4">
      <div className="mb-2">
        <BackButton
          props={{
            page: "/",
          }}
        />
      </div>
      <div className="flex items-center heading-1 p-4">
        <div className="image-parent overflow-hidden position-absolute border border-5 border-white d-none d-md-block">
          <img
            src="../images/propertyLogo.png"
            alt="propertyLogo"
            className="h-100 w-100 object-contain"
          />
        </div>
        <h2 className="text-center text-xl font-bold">Property Search Tool</h2>
      </div>

      <div className="row">
        <div className="offset-md-3 col-md-9">
          <h5>Search</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control rounded-1 shadow-sm"
              placeholder="Address"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn rounded-1 px-5 ms-3 shadow py-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <h5>Selected Properties</h5>
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th>Address</th>
                <th>Postcode</th>
                <th>Number of rooms</th>
                <th>Floor Area (m²)</th>
              </tr>
            </thead>
            <tbody>
              {selectedProperties.map((property) => (
                <tr key={property.address}>
                  <td>{property.address}</td>
                  <td>{property.postcode}</td>
                  <td>{property.rooms}</td>
                  <td>{property.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-3">
          <h5>Property Types</h5>
          <ul className="list-group rounded-0 ">
            {["All", ...new Set(propertyData.map((p) => p.type))].map(
              (type) => (
                <li
                  key={type}
                  className={`list-group-item border-0 ${
                    filterType === type ? "active" : ""
                  }`}
                  onClick={() => setFilterType(type)}
                  style={{ cursor: "pointer" }}
                >
                  {type}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="col-md-9">
          <h5>Search Results</h5>
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th>
                  <i className="fa-solid fa-check"></i>
                </th>
                <th>Address</th>
                <th>Postcode</th>
                <th>Property Type</th>
                <th>Number of rooms</th>
                <th>Floor Area (m²)</th>
              </tr>
            </thead>
            <tbody>
              {filteredProperties.map((property) => (
                <tr key={property.address}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedProperties.includes(property)}
                      onChange={() => handleCheck(property)}
                    />
                  </td>
                  <td>{property.address}</td>
                  <td>{property.postcode}</td>
                  <td>{property.type}</td>
                  <td>{property.rooms}</td>
                  <td>{property.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchTool;
