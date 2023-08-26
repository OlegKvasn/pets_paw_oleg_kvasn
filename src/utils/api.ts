export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetchWithToken = (url: string, token: string) =>
  fetch(url, {
    headers: {
      "x-api-key":
        "live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y",
    },
  }).then((res) => res.json());
