'use client'

import IconButton from "@/components/global/IconButton";
import { useState } from "react";

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
        <h2>{activity.location}</h2>
        <p>{activity.duration}</p>
        <p>{activity.createdAt.toLocaleString('GB')}</p>
        <IconButton handleClick={() => {removeActivity(activity.id)}}/>
      </li>
    );
};

export default ActivityItem;