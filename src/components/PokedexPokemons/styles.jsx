import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  background: #e84848;
  border: 5px solid #393939;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: ${({theme}) => theme.space(1)};
  gap: ${({theme}) => theme.space(1)};
`
