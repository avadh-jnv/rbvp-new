import { createFileRoute } from "@tanstack/react-router";
import { ExhibitPage } from "@/components/exhibit-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ExhibitPage />;
}
