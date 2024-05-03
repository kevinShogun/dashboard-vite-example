import { Card } from '@fluentui/react-components'
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
      className=' transition duration-500 ease-in-out transform cursor-pointer hover:shadow-lg hover:scale-105 hover:rounded-lg'
    >
      <div className="flex items-center gap-2 w-32 md:w-40">
        <img src={icon} alt="icon" className="w-10 h-10" />
        <h1 className="font-semibold">{title}</h1>
      </div>
      <div className='flex items-center gap-2'>
        <p className="text-gray-800 font-semibold">{subtitle}</p>
        <ArrowDown12Regular
          style={{
            color: color,
            transform: color === 'green' ? "rotate(180deg)" : ""
          }} />
        <p className='text-xs font-semibold text-center'
          style={{
            color: color,
          }}
        >
          3%
        </p>
      </div>
    </Card>
  )
}
