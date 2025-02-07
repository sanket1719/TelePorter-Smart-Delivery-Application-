/*
const handleDeliveryLogin = async () => {
    const response = await fetch("http://localhost:8080/api/deliveryperson/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: deliveryEmail, password: deliveryPassword }),
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Login successful:", data.personnelId);
        // Store personnelId in session/local storage
    } else {
        console.error("Error:", data.error);
    }
};
*/