import { Route, Routes } from 'react-router-dom'
import InternalBookList from '../components/pages/InternalBookList'

export const Router = () => {
  return (
    <Routes>
      <Route path="/internal_books" element={<InternalBookList />} />
    </Routes>
  )
}
export default Router
