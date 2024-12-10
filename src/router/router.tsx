import { Route, Routes } from 'react-router-dom'
import InternalBookList from '../components/pages/InternalBookList'
import BorrowBookPage from '../components/pages/BorrowBookPage'

export const Router = () => {
  return (
    <Routes>
      <Route path="/internal_books" element={<InternalBookList />} />
      <Route path="/internal_books/:id/borrow" element={<BorrowBookPage />} />
    </Routes>
  )
}
export default Router
