export const fetchData = async (endpoint = "") => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return endpoint ? null : [];
  }
};

export const fetchBlogs = () => fetchData(); // Fetch all blogs
export const fetchBlogById = (id) => fetchData(id); // Fetch blog by ID

// Function to send messages to Together AI API
export const sendMessageToAI = async (message) => {
  try {
    const response = await fetch("https://api.together.xyz/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AI_CHAT_BOT_KEY}`,
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.1",
        prompt: message,
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    if (data?.choices?.length > 0) {
      return data.choices[0].text.trim(); // AI's response
    } else {
      return "Sorry, I didn't understand that.";
    }
  } catch (error) {
    console.error("Error fetching AI response", error.message);
    return "Error fetching AI response.";
  }
};

