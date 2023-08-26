const today = new Date();
const hours = today.getHours().toString().padStart(2, "0");
const minutes = today.getMinutes().toString().padStart(2, "0");

const actualTime = `${hours}:${minutes}`;

type TActions =
  | "added to Favorites"
  | "added to Likes"
  | "added to Dislikes"
  | "removed from Favorites";

type TLog = {
  time: string;
  image: string;
  action: string;
};

export const createLog = (imageId: string, action: TActions) => {
  let logs: TLog[] = JSON.parse(localStorage.getItem("logs") || "[]");

  if (!Array.isArray(logs)) {
    logs = [];
  }

  const log = {
    time: actualTime,
    image: imageId,
    action: action,
  };

  logs.push(log);

  localStorage.setItem("logs", JSON.stringify(logs));
};
