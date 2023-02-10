import { Button, HeaderContainer, Location } from './style'
import { MapPin, ShoppingCart } from 'phosphor-react/'

import logo from '../../assets/Logo.svg'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <nav>
        <Location>
          <MapPin size={24} color={defaultTheme.purple.purple} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Button>
          <ShoppingCart size={24} weight="fill" />
        </Button>
      </nav>
    </HeaderContainer>
  )
}
