// app/guides/[slug]/page.jsx

import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const filenames = fs.readdirSync(guidesDir);

  return filenames.map((name) => ({
    slug: name.replace(/\.md$/, ""),
  }));
}

interface GuidePageProps {
  params: {
    slug: string;
  };
}

const GuidePage = ({ params }: GuidePageProps) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", "guides", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <div className="prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{fileContents}</ReactMarkdown>
    </div>
  );
};

export default GuidePage;
