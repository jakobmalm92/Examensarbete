
import Link from 'next/link';

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
      services: ["Altan & trall", "Platsbyggda hyllor", "Golvläggning"]
    },
    {
      title: "Elektriker",
      description: "Elinstallationer och felsökning.",
      link: "/tjanster/elektriker",
      services: ["Belysning", "Eluttag", "Felsökning"]
    },
    {
      title: "Måleri",
      description: "Målning och tapetsering.",
      link: "/tjanster/maleri",
      services: ["Inomhusmålning", "Utomhusmålning", "Tapetsering"]
    },
    {
      title: "Rörmokare",
      description: "VVS-tjänster och reparationer.",
      link: "/tjanster/rormokare",
      services: ["Rörinstallation", "Vattenläckor", "Avloppsrensning"]
    },
    {
      title: "Takläggare",
      description: "Takreparationer och installationer.",
      link: "/tjanster/taklaggare",
      services: ["Takreparation", "Takläggning", "Takinspektion"]
    },
  ];

  return (
    <nav className="relative border-t border-b border-gray-200 dark:border-gray-700 px-6 sm:px-20 py-3 flex flex-wrap gap-6 text-sm sm:text-base">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
          services={item.services}
        />
      ))}
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
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
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
