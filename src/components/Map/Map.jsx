import { useState } from 'react'
import './Map.css'

import L from 'leaflet'
import headphone_red from '../../assets/logos/headphone_red.svg'
import headphone_green from '../../assets/logos/headphone_green.svg'

import phone_green from '../../assets/logos/phone_green.svg'
import phone_red from '../../assets/logos/phone_red.svg'

import wallet_green from '../../assets/logos/wallet_green.svg'
import wallet_red from '../../assets/logos/wallet_red.svg'

import key_green from '../../assets/logos/key_green.svg'
import key_red from '../../assets/logos/key_red.svg'

import others_red from '../../assets/logos/others_red.svg'
import others_green from '../../assets/logos/others_green.svg'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useDisclosure } from '@chakra-ui/react'
import InfoModal from '../InfoModal/InfoModal'

export default function Map ({ data, search }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [itemData, setItemData] = useState({})

  const headphoneLost = L.icon({
    iconUrl: headphone_red,
    iconSize: [50, 50]
  })

  const headphoneFound = L.icon({
    iconUrl: headphone_green,
    iconSize: [50, 50]
  })

  const phoneLost = L.icon({
    iconUrl: phone_red,
    iconSize: [50, 50]
  })

  const phoneFound = L.icon({
    iconUrl: phone_green,
    iconSize: [50, 50]
  })

  const keyLost = L.icon({
    iconUrl: key_red,
    iconSize: [50, 50]
  })

  const keyFound = L.icon({
    iconUrl: key_green,
    iconSize: [50, 50]
  })

  const walletLost = L.icon({
    iconUrl: wallet_red,
    iconSize: [50, 50]
  })

  const walletFound = L.icon({
    iconUrl: wallet_green,
    iconSize: [50, 50]
  })

  const othersLost = L.icon({
    iconUrl: others_red,
    iconSize: [50, 50]
  })

  const othersFound = L.icon({
    iconUrl: others_green,
    iconSize: [50, 50]
  })

  const allMarkers = data
    .filter(item => {
      return search.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(search)
    })
    .map(item => (
      <Marker
        position={item.location}
        eventHandlers={{
          click: () => {
            onOpen()
            setItemData(item)
          },
          mouseover: event => event.target.openPopup()
        }}
        icon={
          item.type === 'headphone' && item.isLost
            ? headphoneLost
            : item.type === 'phone' && item.isLost
            ? phoneLost
            : item.type === 'wallet' && item.isLost
            ? walletLost
            : item.type === 'key' && item.isLost
            ? keyLost
            : item.type === 'other' && item.isLost
            ? othersLost
            : item.type === 'headphone' && !item.isLost
            ? headphoneFound
            : item.type === 'phone' && !item.isLost
            ? phoneFound
            : item.type === 'wallet' && !item.isLost
            ? walletFound
            : item.type === 'key' && !item.isLost
            ? keyFound
            : item.type === 'other' && !item.isLost
            ? othersFound
            : othersFound
        }
      >
        <Popup>{item.name}</Popup>
      </Marker>
    ))

  return (
    <div>
      <MapContainer
        style={{
          height: '80vh',
          width: '55vw',
          borderRadius: '30px',
          zIndex: '0'
        }}
        center={[33.6461, -117.8427]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {allMarkers}
      </MapContainer>
      <InfoModal
        props={itemData}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    </div>
  )
}
