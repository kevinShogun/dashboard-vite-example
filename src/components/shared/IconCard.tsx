import { Card, Body1Strong, Caption1Strong } from '@fluentui/react-components'
import { ArrowDown12Regular } from '@fluentui/react-icons';

interface IconCardProps {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
}

export const IconCard = ({
  icon,
  title,
  subtitle,
  color
}: IconCardProps) => {
  return (
    <Card
      className='icon-card'
    >
      <div className="flex items-center gap-2 w-32 md:w-40">
        <img src={icon} alt="icon" className="w-10 h-10" />
        <Body1Strong>{title}</Body1Strong>
      </div>
      <div className='flex items-center gap-2'>
        <Caption1Strong>{subtitle}</Caption1Strong>
        <ArrowDown12Regular
          style={{
            color: color,
            transform: color === 'green' ? "rotate(180deg)" : ""
          }} />
        <p className='text-xs font-semibold text-center'
          style={{ color: color }}
        >
          3%
        </p>
      </div>
    </Card>
  )
}
