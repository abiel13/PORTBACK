"use server";

import axios from "axios";

export async function getSkills() {
  try {
    const response = await axios.get(
      "https://portfolio-server-zdzh.onrender.com/api/v1/skills",
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
