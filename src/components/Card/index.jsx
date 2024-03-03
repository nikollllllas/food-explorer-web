import { useState } from 'react'
import theme from '../../styles/theme'
import { Button } from '../Button'
import { NumberPicker } from '../NumberPicker'

import { CardContainer, FoodTitle, Order } from './styles'
import { Heart, Pencil, CaretRight } from '@phosphor-icons/react'
import parma from '../../assets/parma.png'
import { useMediaQuery } from 'react-responsive'

export function Card({ isAdmin, isFavorite, ...rest }) {
  const [number, setNumber] = useState(0)

  const isDesktop = useMediaQuery({ minWidth: 1024})

  return (
    <CardContainer
      {...rest}
      isAdmin={isAdmin}>
      {isAdmin ? (
        <Pencil
          size={'2.4rem'}
          // onClick={handleEdit}
        />
      ) : (
        <Heart
          size={'2.4rem'}
          fill={isFavorite ? theme.COLORS.GRAY_200 : undefined}
          // onClick={handleFavorite}
        />
      )}

      <img
        src={parma}
        alt='Imagem do prato.'
        // onClick={() => handleDetails(data.id)}
      />

      <FoodTitle>
        <h2>Torradas de Parma</h2>
        <CaretRight
          size={isDesktop ? '2.4rem' : '1.4rem'}
          // onClick={() => handleDetails(data.id)}
        />
      </FoodTitle>

      {isDesktop && <p>Descrição do Prato</p>}
      <span>R$49,99</span>

      {!isAdmin && (
        <Order>
          <NumberPicker
            number={number}
            setNumber={setNumber}
          />

          <Button
            title='incluir'
            // onClick={handleInclude}
          />
        </Order>
      )}
    </CardContainer>
  )
}
