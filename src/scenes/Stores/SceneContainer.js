import React from 'react'
import Container from 'app/components/Container'
import Loading from 'app/components/Loading'
import colors from 'app/theme/colors'
export default ({ loading, error, children }) => {
  return (
    <Container>
      <Loading backgrounColor={'rgba(97, 47, 116, 0.8)'} loading={loading} />
      {!loading ? children : null}
    </Container>
  )
}
