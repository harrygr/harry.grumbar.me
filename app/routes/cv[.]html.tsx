import { redirect } from "@remix-run/react";

export const loader = () => {
  throw redirect("/cv", { status: 301 });
};
