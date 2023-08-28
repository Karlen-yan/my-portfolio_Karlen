export const sendContactForm = async data =>{


  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
       cache: "force-cache",
    });
  
    if (!response.ok) {
      const errorMessage = `Failed to send message (Status ${response.status})`;
      throw new Error(errorMessage);
    }
  
    return response.json();
  } catch (error) {
    console.error("Network error or other issue:", error);
    throw error;
  }
  }