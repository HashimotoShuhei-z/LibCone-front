import useAspidaSWR from '@aspida/swr'
import { useApiClient } from '../common'
import { Borrow_request_body, Internal_book, Review } from '../../api/@types'
import { useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

// 社内書籍の一覧を取得するカスタムフック
type UseInternalBookListProps = {
  searchTerm?: string
  genreId?: number
}

type UseInternalBookList = {
  internalBooks: Internal_book[] | undefined
}

export const useInternalBookList = (props: UseInternalBookListProps): UseInternalBookList => {
  const client = useApiClient()
  const { data: internalBooks, mutate } = useAspidaSWR(client.internal_books, {
    query: {
      book_name: props.searchTerm,
      book_genre_id: props.genreId
    }
  })
  // searchTerm が変わったときにデータをリフェッチする
  useEffect(() => {
    mutate() // キャッシュを無視してリフェッチする
  }, [props.searchTerm, props.genreId])

  return {
    internalBooks
  }
}

// 社内書籍の詳細を取得するカスタムフック
type UseInternalBookItemProps = {
  id: number
}

type UseInternalBookItem = {
  internalBook:
    | {
        book?: Internal_book | undefined
        reviews?: Review[] | undefined
      }
    | undefined
}

export const useInternalBookItem = (props: UseInternalBookItemProps): UseInternalBookItem => {
  const client = useApiClient()
  const { data: internalBook } = useAspidaSWR(client.internal_books._book_id(props.id))

  return {
    internalBook
  }
}

type InternalBookMutator = {
  handleBorrow: (borrowReqBody: Borrow_request_body, bookId: number) => Promise<boolean>
}

export const useInternalBookMutator = (): InternalBookMutator => {
  const client = useApiClient()
  const toast = useToast()

  //口コミグループを作成
  const handleBorrow = async (borrowReqBody: Borrow_request_body, bookId: number) => {
    const result = await client.books._book_id(bookId).borrow.post({ body: borrowReqBody })
    if (result.status === 201) {
      toast({
        title: '本を借りました',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      return true
    }

    toast({
      title: '失敗しました',
      status: 'error',
      duration: 9000,
      isClosable: true
    })
    return false
  }

  return {
    handleBorrow
  }
}
