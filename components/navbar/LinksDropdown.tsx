import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import { links, linksLogin } from '@/utils/links';
import SignOutLink from './SignOutLink';


export default function LinksDropdown() {

  return (
    <DropdownMenu>
      {/* trigger button */}
      <DropdownMenuTrigger asChild>        
        <Button variant="outline" className='flex gap-4 max-w[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      {/* container */}
      <DropdownMenuContent className="w-52" align='start' sideOffset={10}> 
        {/* items */}
        {links.map((link,idx) => {
            const {href, label} = link;
            return (
              <DropdownMenuItem key={idx}>
                <Link className='capitalize w-full' href={href}>{label}</Link>
              </DropdownMenuItem>
            )
          })}      
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
