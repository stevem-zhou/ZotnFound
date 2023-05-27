import './ResultsBar.css'
import ResultCard from '../ResultCard/ResultCard'
import { Box } from '@chakra-ui/react'
export default function ResultsBar ({ data, search }) {
  const allResults = data
    .filter(item => {
      return search.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(search)
    })
    .map(item => {
      return <ResultCard props={item} />
    })

  return (
    <Box paddingX='5px' width='20vw' height='80vh' overflowY='scroll'>
      {allResults}
    </Box>
  )
}
