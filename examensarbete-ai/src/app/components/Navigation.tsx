import Link from "next/link";

interface NavItemType {
  title: string;
  description: string;
  link: string;
  services: string[];
}

export default function Navigation() {
  const navItems: NavItemType[] = [
    {
      title: "Snickare",
      description: "Bygg och renovering",
      link: "/tjanster/snickare",
      services: ["Altan & trall", "Platsbyggda hyllor", "Golvläggning"],
    },
    {
      title: "Elektriker",
      description: "Elinstallationer och felsökning.",
      link: "/tjanster/elektriker",
      services: ["Belysning", "Eluttag", "Felsökning"],
    },
    {
      title: "Måleri",
      description: "Målning och tapetsering.",
      link: "/tjanster/maleri",
      services: ["Inomhusmålning", "Utomhusmålning", "Tapetsering"],
    },
    {
      title: "Rörmokare",
      description: "VVS-tjänster och reparationer.",
      link: "/tjanster/rormokare",
      services: ["Rörinstallation", "Vattenläckor", "Avloppsrensning"],
    },
    {
      title: "Takläggare",
      description: "Takreparationer och installationer.",
      link: "/tjanster/taklaggare",
      services: ["Takreparation", "Takläggning", "Takinspektion"],
    },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  title: string;
  description: string;
  link: string;
  services: string[];
}

function NavItem({ title, description, link, services }: NavItemProps) {
  return (
    <div className="relative group">
      <Link href={link} className="block hover:text-blue-600 transition">
        <p className="font-medium text-gray-800 dark:text-white">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </Link>
      <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 space-y-2 hidden group-hover:block z-50">
        {services.map((service, index) => (
          <p key={index} className="text-sm text-gray-800 dark:text-white">
            {service}
          </p>
        ))}
      </div>
    </div>
  );
}
