import {
  FileClock,
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Rss,
  Search,
  Settings,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import Link from 'next/link'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'All Blogs',
    url: '/blog',
    icon: Rss,
  },
  {
    title: 'Recently Added Blogs',
    url: '/recent-blog',
    icon: FileClock,
  },
  {
    title: 'Search',
    url: '/search',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
]

const socialLinks = [
  {
    title: 'Github',
    url: 'https://www.github.com/nachatra-sharma',
    icon: Github,
  },
  {
    title: 'Linkedin',
    url: 'https://www.github.com/nachatra-sharma',
    icon: Linkedin,
  },
  {
    title: 'Instagram',
    url: 'https://www.github.com/nachatra-sharma',
    icon: Instagram,
  },
  {
    title: 'Email',
    url: 'https://www.github.com/nachatra-sharma',
    icon: Mail,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-gray-800">
      <SidebarContent className="bg-[#030711] border-blue-950">
        <SidebarGroup className="justify-between h-[100vh] text-white">
          <SidebarGroupLabel className="text-white">
            Personal Website
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* social links */}
              {socialLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} target="_blank">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarFooter>
            <SidebarMenu>
              <p className="text-sm">Developed by Nachatra Sharma</p>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
