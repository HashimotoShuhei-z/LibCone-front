import { Button, Center, FormControl, FormErrorMessage, FormLabel, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useInternalBookMutator } from '../../usecase/internal_book/internal_book.usecase'
import { useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' // DatePicker用のCSS

const BorrowBookForm = () => {
  const { id } = useParams<{ id: string }>() // URLからbookIdを取得
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const { handleBorrow } = useInternalBookMutator()
  const [error, setError] = useState<string | null>(null) // エラーメッセージのstate

  const handleClickBorrow = async () => {
    if (!startDate || !endDate) {
      setError('開始日と返却日を選択してください')
      return
    }

    if (!id) {
      setError('無効なBook IDです')
      return
    }

    setError(null) // エラーをクリア

    // リクエストボディ作成
    const borrowReqBody = {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    }

    const success = await handleBorrow(borrowReqBody, Number(id))
    if (!success) {
      setError('借りる操作に失敗しました')
    }
  }

  return (
    <div>
      <Center>
        <VStack spacing={6} width={500}>
          {/* 開始日 */}
          <FormControl isInvalid={!!error} isRequired>
            <FormLabel fontSize="xl" fontWeight="bold">
              開始日
            </FormLabel>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="開始日を選択"
              className="chakra-input" // Chakra UIに合わせるためのスタイル
            />
          </FormControl>

          {/* 返却日 */}
          <FormControl isInvalid={!!error} isRequired>
            <FormLabel fontSize="xl" fontWeight="bold">
              返却日
            </FormLabel>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="返却日を選択"
              className="chakra-input"
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>

          {/* 借りるボタン */}
          <Button onClick={handleClickBorrow} colorScheme="blue" width="100%">
            借りる
          </Button>
        </VStack>
      </Center>
    </div>
  )
}

export default BorrowBookForm
