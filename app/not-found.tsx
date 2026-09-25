import StaticHtml from "@/components/StaticHtml";
import { html_not_found } from "@/content/not-found";

export default function NotFound() {
  return <StaticHtml html={html_not_found} />;
}
