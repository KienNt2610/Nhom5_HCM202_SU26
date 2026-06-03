import * as React from 'react';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface TimelineItemV2Props {
  year: string;
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
  side: 'left' | 'right';
  index: number;
}

export function TimelineItem({
  year,
  date,
  title,
  location,
  description,
  image,
  side,
  index: _index,
}: TimelineItemV2Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const isLeft = side === 'left';

  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-12 items-start relative`}>
      {/* Content */}
      <div className="w-5/12">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary/16 rounded-lg border-2 border-primary/40 p-6 cursor-pointer hover:shadow-lg hover:border-secondary transition-all duration-300"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="text-3xl font-bold text-secondary-foreground min-w-fit">{year}</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-secondary-foreground">{title}</h3>
              <p className="text-sm text-secondary-foreground mt-1">{date}</p>
            </div>
          </div>

          <p className="text-sm text-primary mb-2 font-medium flex items-center gap-2">
            <MapPin />
            {location}
          </p>

          <div
            className={cn('mt-4 pt-4 border-t border-primary/40 transition-all duration-500', {
              'max-h-200 opacity-100': isOpen,
              'max-h-1 opacity-0': !isOpen,
            })}
          >
            <p className="text-sm leading-relaxed text-primary mb-4">{description}</p>
            <img
              src={image || '/placeholder.svg'}
              alt={title}
              className="w-full rounded-md border border-primary/40 object-cover h-48"
            />
          </div>

          <button className="mt-3 text-xs font-semibold text-primary hover:text-primary transition-colors">
            {isOpen ? '- Ẩn chi tiết' : '+ Xem chi tiết'}
          </button>
        </div>
      </div>

      {/* Center dot */}
      <div className="w-2/12 flex justify-center">
        <div className="relative z-10">
          <div className="w-6 h-6 bg-primary rounded-full border-4 border-secondary shadow-md" />
          <div className="absolute inset-0 w-6 h-6 bg-primary rounded-full animate-pulse opacity-30" />
        </div>
      </div>

      {/* Image for alternating side */}
      <div className="w-5/12">
        <div className="rounded-lg overflow-hidden border-2 border-primary/40 h-64 bg-primary/16 flex items-center justify-center">
          <img src={image || '/placeholder.svg'} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
