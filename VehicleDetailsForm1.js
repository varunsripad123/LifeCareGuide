import React, { useState, useEffect } from 'react';
import './App.css';

const VehicleDetailsForm = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    type: '',
    make: '',
    model: '',
    year: '',
  });

  const [brands, setBrands] = useState([
    "Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen",
    "Nissan", "BMW", "Mercedes-Benz", "Audi", "Hyundai",
    "Kia", "Subaru", "Jeep", "GMC", "Lexus",
    "Porsche", "Mazda", "Cadillac", "Acura", "Infiniti"
  ]);

  const [models, setModels] = useState([]);

  // Generate an array of years from 1900 to the current year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, index) => currentYear - index);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'type') {
      setVehicleDetails({
        type: value,
        make: '',
        model: '',
        year: '',
      });
    } else if (name === 'make') {
      setVehicleDetails({
        ...vehicleDetails,
        [name]: value,
        model: '',
      });
      // Fetch models for the selected brand here
      fetchModels(value);
    } else {
      setVehicleDetails({
        ...vehicleDetails,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vehicle details submitted!');
  };

  const fetchModels = (brand) => {
    const apiKey = 'jtR0qODHvtOqaRgS2UJp3wfQc21VSFjEKqFdkkqv'; // Replace with your actual API key
    const apiUrl = `https://api.api-ninjas.com/v1/cars?make=${brand}&limit=50`;

    if (apiKey && brand) {
      fetch(apiUrl, {
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const uniqueModels = [...new Set(data.map(car => car.model))];
          setModels(uniqueModels);
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <h2 className='enter-vehicle-details'>Enter Vehicle Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Type:</label>
            <select
              className="dropdown"
              name="type"
              value={vehicleDetails.type}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Make:</label>
            <select
              className="dropdown"
              name="make"
              value={vehicleDetails.make}
              onChange={handleInputChange}
              required
              disabled={!vehicleDetails.type}
            >
              <option value="">Select Make</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Model:</label>
            <select
              className="dropdown"
              name="model"
              value={vehicleDetails.model}
              onChange={handleInputChange}
              required
              disabled={!vehicleDetails.make}
            >
              <option value="">Select Model</option>
              {models.map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Year:</label>
            <select
              name="year"
              className="dropdown"
              value={vehicleDetails.year}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Year</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VehicleDetailsForm;
