import { Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Box, Button } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { Internal_book } from '../../api/@types'
import { useNavigate } from 'react-router-dom'

interface InternalBooksTableProps {
  internalBooks: Internal_book[] | undefined
}

export const InternalBooksTable = ({ internalBooks }: InternalBooksTableProps) => {
  const navigate = useNavigate()

  // 星のアイコンを生成する関数
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating) // 整数部分の星の数
    const fractionalPart = rating % 1 // 小数点部分
    const stars = []

    // 完全な星を追加
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="gold" size="20px" />)
    }

    // 部分的な星を追加
    if (fractionalPart > 0) {
      stars.push(
        <Box
          key="partial"
          position="relative"
          width={`${fractionalPart * 20}px`} // 小数部分に応じた幅
          height="20px"
          overflow="hidden"
          display="inline-block"
        >
          <FaStar color="gold" size="20px" />
        </Box>
      )
    }

    return <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>
  }

  // 借りるボタンのクリックイベントハンドラ
  const handleBorrow = (companyBookId: number) => {
    navigate(`/internal_books/${companyBookId}/borrow`)
  }

  return (
    <TableContainer
      maxWidth="1200px" // テーブル全体の幅を固定
      overflowX="auto" // 横スクロールを有効に
      margin="0 auto" // 中央寄せ
    >
      <Table size="md" variant="striped">
        <Thead>
          <Tr>
            <Th>書影</Th>
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
              {/* 書影の画像 */}
              <Td>
                <img
                  src={internalBook.bookImage}
                  alt={internalBook.bookName}
                  style={{
                    width: '60px',
                    height: '90px',
                    objectFit: 'cover'
                  }}
                />
              </Td>

              {/* 書籍名 */}
              <Td style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <Link color="teal.500" href={`./internal_books/${internalBook.companyBookId}`}>
                  {internalBook.bookName}
                </Link>
              </Td>

              {/* 出版社 */}
              <Td>{internalBook.bookPublisher}</Td>

              {/* 著者名 */}
              <Td>{internalBook.authorName}</Td>

              {/* 平均⭐️ */}
              <Td>{renderStars(4.4)}</Td>

              {/* 貸出可 */}
              <Td>
                {internalBook.rentalInformation ? (
                  <span style={{ color: 'red' }}>× 貸出不可</span>
                ) : (
                  <Button colorScheme="teal" size="sm" onClick={() => handleBorrow(internalBook.companyBookId)}>
                    借りる
                  </Button>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default InternalBooksTable
