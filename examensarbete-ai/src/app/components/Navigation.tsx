'use client'
import Link from 'next/link'
import { useState } from 'react'

interface NavItemType {
  title: string
  description: string
  link: string
  services: string[]
}

export default function Navigation() {
  const navItems: NavItemType[] = [
    {
      title: 'Snickare',
      description: 'Bygg och renovering',
      link: '/services/carpenter', // Här ändrar vi till '/services/carpenter'
      services: ['Altan & Trall', 'Platsbyggda hyllor', 'Golvläggning'],
    },
    {
      title: 'Elektriker',
      description: 'Elinstallationer och felsökning.',
      link: '/services/electrician', // Här ändrar vi till '/services/electrician'
      services: ['Belysning', 'Eluttag', 'Felsökning'],
    },
    {
      title: 'Måleri',
      description: 'Målning och tapetsering.',
      link: '/services/painter', // Här ändrar vi till '/services/painter'
      services: ['Inomhusmålning', 'Utomhusmålning', 'Tapetsering'],
    },
    {
      title: 'Rörmokare',
      description: 'VVS-tjänster och reparationer.',
      link: '/services/plumber', // Här ändrar vi till '/services/plumber'
      services: ['Rörinstallation', 'Vattenläckor', 'Avloppsrensning'],
    },
    {
      title: 'Takläggare',
      description: 'Takreparationer och installationer.',
      link: '/services/roofer', // Här ändrar vi till '/services/roofer'
      services: ['Takreparation', 'Takläggning', 'Takinspektion'],
    },
  ]

  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center space-x-8">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
      </div>
    </nav>
  )
}

interface NavItemProps {
  title: string
  description: string
  link: string
  services: string[]
}

function NavItem({ title, link, services }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link}
        className="block px-4 py-2 font-semibold text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
      >
        {title}
      </Link>

      {isOpen && (
        <div className="absolute left-0 mt-2 flex flex-col bg-white dark:bg-zinc-800 text-black dark:text-white shadow-lg rounded-xl p-4 min-w-[200px] z-50">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`${link}#${service.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md px-3 py-2 text-sm"
            >
              {service}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
