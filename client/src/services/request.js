import axios from "axios";

// API des métiers

export default function getJobs() {
  return axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSrrzr4qmE855dEVlmRwG4wydKF3N6ZZ22tBrxITR9iYql2b5X_Hp8igMiu3mPAtl4MAa5IGY9wNta/pub?gid=1185293439&single=true&output=csv"
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
