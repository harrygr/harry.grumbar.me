import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

type Props = {
  name: string;
  link: string;
  linkText: string;
  children: React.ReactNode;
  image: string;
};

export const Project = ({ name, children, link, linkText, image }: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="grid lg:grid-cols-8 gap-6">
        <div className="lg:col-span-3 lg:order-2">
          <div className="rounded-md overflow-hidden border border-gray-200">
            <img
              src={image}
              alt={`Thumbnail of ${name}`}
              width={576}
              height={272}
            />
          </div>
        </div>
        <div className="lg:col-span-5 sn:order-1">
          <div className="prose">{children}</div>
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="font-semibold inline-flex items-center gap-x-1 hover:text-opacity-70"
      >
        {linkText} <ExternalLinkIcon className="w-4 h-4" />
      </a>
    </div>
  );
};
