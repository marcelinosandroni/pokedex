import * as S from './styles'
import DetailButtons from 'components/DetailButtons'
// import DetailAttributes from 'components/DetailAttributes'

const DetailBasicInformation = pokemon => {
  // console.log(pokemon)
  return (
    <S.CardInformation>
      <S.BasicInformations>Basic Information</S.BasicInformations>
      <p>{pokemon.description}</p>
      <p>Shape: {pokemon.shape}</p>
      <p>Live: {pokemon.habitat}</p>
      <S.PokeWeight>Weight: {pokemon.weight / 10} kg</S.PokeWeight>
      <S.PokeHeight>Height: {pokemon.height * 10} cm</S.PokeHeight>
      <S.PokeType>
        Type:
        {pokemon.types.map(i => (
          <S.PokeTypeImg
            key={i.type.name}
            src={`/typetags/${i.type.name}.png`}
          />
        ))}
      </S.PokeType>
      <S.PokeAbilitys>
        Abilities:
        {pokemon.abilities.map(i => (
          <DetailButtons color={pokemon.color}>{i.ability.name}</DetailButtons>
        ))}
      </S.PokeAbilitys>
    </S.CardInformation>
  )
}

export default DetailBasicInformation
