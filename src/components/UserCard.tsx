import React from "react";

import type { User } from "@/types/User";
import { InfoItem } from "@/components/InfoItem";

import {
  IoLocationOutline,
  IoMail,
  IoBusiness,
  IoCallOutline,
  IoGlobeOutline,
} from "react-icons/io5";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-300/50 h-[520px] flex flex-col">
      <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl p-4 mb-6 border border-gray-200/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <h3 className=" text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-200 truncate group-hover:overflow-visible group-hover:whitespace-normal">
            {user.name}
          </h3>
          <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            @{user.username}
          </span>
        </div>
      </div>

      <div className="flex-grow">
        <div className="space-y-3">
          <InfoItem
            color="slate"
            icon={<IoMail />}
            header="Email"
            data={user.email}
            href={`mailto:${user.email}`}
          />

          <InfoItem
            color="slate"
            icon={<IoLocationOutline />}
            header="City"
            data={user.address.city}
          />

          <InfoItem
            color="slate"
            icon={<IoBusiness />}
            header="Company"
            data={user.company.name}
          />

          <InfoItem
            color="slate"
            icon={<IoCallOutline />}
            header="Phone"
            data={user.phone}
            href={`tel:${user.phone}`}
          />

          <InfoItem
            color="blue"
            icon={<IoGlobeOutline />}
            header="Website"
            data={user.website}
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  );
};
