import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", //backend url
  headers: { "Content-Type": "application/json" },
});

//connect with backend apis
//Register Vendor
export const registerVendor = async (vendorData) => {
  try {
    const response = await API.post("/vendors/register", vendorData);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering vendor:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const registerDeliveryPerson = async (deliveryPersonData) => {
  try {
    const response = await API.post("/register", deliveryPersonData);
    alert(response.data);
  } catch (error) {
    console.error("Error registering delivery person:", error);
    alert("Error registering delivery person");
  }
};

export const createDeliveryRequest = async (deliveryData) => {
  try {
    const response = await API.post("/create", deliveryData);
    alert(response.data); // Success message
  } catch (error) {
    console.error("Error creating delivery request:", error);
    alert("Error submitting request");
  }
};

export const fetchDeliveryRequests = async () => {
  try {
    const response = await API.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching delivery requests:", error);
    return [];
  }
};

export const getAvailableDeliveries = async () => {
  try {
    const response = await API.get("/available");
    return response.data;
  } catch (error) {
    console.error("Error fetching deliveries:", error);
    return [];
  }
};

export const acceptDelivery = async (deliveryId, deliveryPersonId) => {
  try {
    const response = await API.post(
      `/accept/${deliveryId}/${deliveryPersonId}`
    );
    alert(response.data);
  } catch (error) {
    console.error("Error accepting delivery:", error);
    alert("Failed to accept delivery");
  }
};

export default API;
