import { Center, Heading } from '@chakra-ui/react'
import { useInternalBookList } from '../../usecase/internal_book/internal_book.usecase'
import InternalBooksTable from '../organisms/InternalBooksTable'
import { useSearchParams } from 'react-router-dom'
import SerchNameForm from '../molecules/SerchNameForm'

export const InternalBookList = () => {
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('name') || '' //URLの中のname=部分を抽出
  // const genreId = searchParams.get('id') || ''; //URLの中のid=部分を抽出
  const { internalBooks } = useInternalBookList({ searchTerm })

  return (
    <div>
      <Center py={3}>
        <Heading>社内書籍一覧</Heading>
      </Center>
      <Center py={3}>
        <SerchNameForm />
      </Center>
      <div>
        <InternalBooksTable internalBooks={internalBooks} />
      </div>
    </div>
  )
}
export default InternalBookList
