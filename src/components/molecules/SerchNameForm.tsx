import { Input } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

const SerchNameForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = (term: string) => {
    // クエリパラメータ 'name' を設定
    searchParams.set('name', term)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Input
        width="600px"
        placeholder="ワード検索"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
    </div>
  )
}

export default SerchNameForm
