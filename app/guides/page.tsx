// app/guides/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";

const GuidesIndex = () => {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const filenames = fs.readdirSync(guidesDir);
  const guides = filenames.map((name) => ({
    slug: name.replace(/\.md$/, ""),
    title: name
      .replace(/-/g, " ")
      .replace(/\.md$/, "")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Git Guides</h1>
      <ul className="list-disc list-inside">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuidesIndex;
