import React from 'react'
import Icon from './icon'
import { Section } from './styled/wrappers'
import { H1 } from './styled/typographies'

const icons = [
  {
    icon: 'icon-map-signs',
    title: 'Senderismo',
    link: '#'
  },
  {
    icon: 'icon-lemon-o',
    title: 'Recogida de frutos silvestres',
    link: '#'
  },
  {
    icon: 'icon-cutlery',
    title: 'Cocina ecologica creativa',
    link: '#'
  },
  {
    icon: 'icon-pagelines',
    title: 'Fitoterapia',
    link: '#'
  },
  {
    icon: 'icon-leaf',
    title: 'Detox',
    link: '#'
  },
  {
    icon: 'icon-heartbeat',
    title: 'Holistica',
    link: '#'
  },
  {
    icon: 'icon-moon-o',
    title: 'Contemplación de astros',
    link: '#'
  },
  {
    icon: 'icon-official',
    title: 'Cine y musica',
    link: '#'
  },
]

class Icons extends React.Component {

  render() {
    return (
      <Section>
        <H1>Nuestros Intereses y Hobbies</H1>
        <div className="icons-wrapper">
          {icons.map((icon,id) =>
            <Icon
              href={icon.link}
              className={icon.icon}
              icon_title={icon.title}
              key={id}
            />
          )}
        </div>
      </Section>
    )
  }
}

export default Icons
