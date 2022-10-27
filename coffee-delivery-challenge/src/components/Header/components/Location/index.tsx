import { LocationComponent } from './styles'
import LocationIcon from '../../../../assets/svg/location-icon.svg'

export function Location() {
  return (
    <LocationComponent>
      <img src={LocationIcon} alt="" />
      <span>Salvador, BA </span>
    </LocationComponent>
  )
}
