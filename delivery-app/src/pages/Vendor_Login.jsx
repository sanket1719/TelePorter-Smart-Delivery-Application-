/*
const handleVendorLogin = async () => {
    const response = await fetch("http://localhost:8080/api/vendors/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: vendorEmail, password: vendorPassword }),
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Login successful:", data.vendorId);
        // Store vendorId in session/local storage
    } else {
        console.error("Error:", data.error);
    }
};
*/