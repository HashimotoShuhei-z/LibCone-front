import { Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { Internal_book } from '../../api/@types'

interface InternalBooksTableProps {
  internalBooks: Internal_book[] | undefined
}

export const InternalBooksTable = ({ internalBooks }: InternalBooksTableProps) => {
  return (
    <TableContainer>
      <Table size="md">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>書籍名</Th>
            <Th>出版社</Th>
            <Th>著者名</Th>
            <Th>平均⭐️</Th>
            <Th>貸出可</Th>
          </Tr>
        </Thead>
        <Tbody>
          {internalBooks?.map((internalBook) => (
            <Tr key={internalBook.companyBookId}>
              <Td>{internalBook.bookImage}</Td>
              <Td>
                <Link color="teal.500" href={`./internal_books/${internalBook.companyBookId}`}>
                  {internalBook.bookName}
                </Link>
              </Td>
              <Td>{internalBook.bookPublisher}</Td>
              <Td>{internalBook.authorName}</Td>
              <Td>{internalBook.averageReviewRate}</Td>
              <Td>{internalBook.rentalInformation}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
export default InternalBooksTable
