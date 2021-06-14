import * as S from 'styles'

const DetailStats = pokemon => {
  return (
    <S.StatsContainer>
      <S.Hp>HP</S.Hp>
      <S.Attack>Attack</S.Attack>
      <S.Defense>Defense</S.Defense>
      <S.SpecialAttack>Special Attack</S.SpecialAttack>
      <S.SpecialDefense>Special Defense</S.SpecialDefense>
      <S.Speed>Speed</S.Speed>
    </S.StatsContainer>
  )
}

export default DetailStats
