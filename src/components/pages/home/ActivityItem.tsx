'use client'

import IconButton from "@/components/global/IconButton";
import { format } from 'date-fns';

type Activity = {
    id: number
    location: string
    duration: number
    createdAt: Date
    updatedAt: Date
}

interface ActivityItemProps {
activity: Activity
removeActivity: (id: number) => void
}


function ActivityItem ({activity, removeActivity}: ActivityItemProps) {

    return (
      <li
      key={activity.id}
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{activity.location}</h3>
          <p className="mt-1 text-xs font-medium text-gray-600">Duration: {activity.duration}</p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt=""
            src="https://via.placeholder.com/64"
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Created At: {format(new Date(activity.createdAt), 'MM/dd/yyyy, hh:mm a')}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col">
          <dt className="text-sm font-medium text-gray-600">Location</dt>
          <dd className="text-xs text-gray-500">{activity.location}</dd>
        </div>

        <div className="flex flex-col">
          <dt className="text-sm font-medium text-gray-600">Duration</dt>
          <dd className="text-xs text-gray-500">{activity.duration}</dd>
        </div>

        <div className="flex flex-col">
          <dt className="text-sm font-medium text-gray-600">Created At</dt>
          <dd className="text-xs text-gray-500">Created At: {format(new Date(activity.createdAt), 'MM/dd/yyyy, hh:mm a')}</dd>
        </div>
      </dl>

      <div className="mt-4">
        <IconButton handleClick={() => removeActivity(activity.id)} />
      </div>
    </li>
    );
};

export default ActivityItem;