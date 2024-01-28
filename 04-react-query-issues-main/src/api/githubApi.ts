import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    // Authorization: `Bearer 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`,
  },
});
