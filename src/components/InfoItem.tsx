import React from 'react';
import { INFO_ITEM_COLORS, DEFAULT_COLOR, type ColorVariant } from '@/constants/colors';

interface InfoItemProps {
  color: ColorVariant;
  icon: React.ReactNode;
  header: string;
  data: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const InfoItem: React.FC<InfoItemProps> = ({
  color,
  icon,
  header,
  data,
  href,
  target,
  rel,
  onClick
}) => {
  const getColorClasses = (color: ColorVariant) => {
    return INFO_ITEM_COLORS[color] || INFO_ITEM_COLORS[DEFAULT_COLOR];
  };

  const colors = getColorClasses(color);

  const renderContent = () => (
    <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50/50">
      <div className={`flex-shrink-0 w-8 h-8 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
        <div className={`w-4 h-4 ${colors.textColor}`}>
          {icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide cursor-default">{header}</p>
        {href ? (
          <a 
            href={href}
            target={target}
            rel={rel}
            className={`text-sm font-medium ${colors.textColor} truncate block`}
            onClick={onClick}
          >
            {data}
          </a>
        ) : (
          <p 
            className={`text-sm font-medium ${colors.textColor} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={onClick}
          >
            {data}
          </p>
        )}
      </div>
    </div>
  );

  return renderContent();
};
