

import { BadgeType } from '@/types/enums/BadgeType';
import { MdOutlineAccessTime } from 'react-icons/md';
import { CiViewTimeline } from "react-icons/ci";

function DateBadge({ children, type }:{ children: React.ReactNode, type?: BadgeType} ) {
  const getIcon = (iconType?: string) => {
    switch(iconType) {
      case BadgeType.DATE:
        return <MdOutlineAccessTime />
      case BadgeType.DATE:
        return <CiViewTimeline />
      default:
        return <CiViewTimeline />
    }
  }

  return (
    <span className="bg-gray-100 text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
      <span className="mr-1">{getIcon(type)}</span>
      <span>
       {children}
      </span>
    </span>
  )
}

export default DateBadge;