import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

interface IPageHeader {
  heading: string;
  linkTitle: string;
  href: any;
}

export default function PageHeader({ heading, linkTitle, href }: IPageHeader) {
  return (
    <div className="flex justify-between items-center py-4 mb-4">
      <Heading title={heading} />
      <Link
        className="text-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2 mb-2 space-x-3"
        href={href}
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
