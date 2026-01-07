import { redirect } from "react-router";

export const loader = () => {
  throw redirect("/cv", { status: 301 });
};
