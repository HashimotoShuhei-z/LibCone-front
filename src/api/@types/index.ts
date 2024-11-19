/* eslint-disable */
export type Login_request_body = {
  email: string;
  password: string;
}

export type Auth_token_response = {
  token: string;
}

export type User_register_request_body = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type Admin_register_request_body = User_register_request_body & {
  role?: string | undefined;
}

export type Book = {
  bookId: number;
  bookName: string;
  bookGenreName: string[];
  bookImage: string;
  bookPublisher: string;
  authorId: number;
  authorName: string;
}

export type Internal_book = Book & {
  averageReviewRate?: number | undefined;
  rentalInformation?: boolean | undefined;
}

export type External_book = {
  title: string;
  author: string;
  booksGenreName: string[];
  publisherName: string;
  itemPrice: number;
  smallImageUrl: string;
  mediumImageUrl: string;
  largeImageUrl: string;
}

export type Review = {
  userId: number;
  userName: string;
  userIcon: string;
  reviewRate: number;
  reviewTitle: string;
  reviewContent: string;
  createdAt: string;
}

export type Review_with_book = Book & Review

export type Review_create_body = {
  bookId: number;
  reviewRate: number;
  reviewTitle: string;
  reviewContent: string;
}

export type Borrow_request_body = {
  startDate: string;
  endDate: string;
}

export type Return_request_body = {
  userId: number;
  bookId: number;
}

export type Reaction_request_body = {
  userId: number;
  reviewId: number;
  stampId: number;
}

export type Purchase_request = {
  title?: string | undefined;
  itemPrice?: number | undefined;
  userId: number;
  userName: string;
  userIcon: string;
  purchaseType: '会社用' | '個人用';
  hopeDeliverAt: string;
  existInOffice: boolean;
  purchaseStatus: '未購入' | '購入申請中' | '配達中' | '配達済み' | '拒否';
}

export type Purchase_request_body = {
  isbn: string;
  purchaseType: '会社用' | '個人用';
  hopeDeliveryAt: string;
}

export type Confirm_purchase_request = {
  request_ids: number[];
}

export type Mypage = {
  userId: number;
  userName: string;
  userIcon: string;
  monthPoint: number;
  specialPoint: number;
  totalReviews: number;
}

export type Mypage_create_body = {
  userName: string;
  userIcon: string;
}

export type User_create_body = {
  userName: string;
  userIcon: string;
  monthPoint: number;
  specialPoint: number;
}

export type Reading_log = {
  bookId: number;
  bookName: string;
  bookGenreName: string[];
  bookImage: string;
  authorId: number;
  authorName: string;
  reviewId: number;
  reviewRate: number;
  reviewTitle: string;
}

export type Gift_create_body = {
  pointSendUserId: number;
  pointReceivedUserId: number;
  point: number;
}

export type GiftRequest_create_body = {
  requestUserId: number;
  receivedUserId: number;
  point?: number | undefined;
}

export type GiftRequest = {
  sendOrReceive: 'point送信' | 'point受信';
  pointSendUserId: number;
  pointReceivedUserId: number;
  point: number;
}

export type Book_create_body = {
  isbn: string;
}

export type Lending_log = {
  userId: number;
  userName: string;
  bookId: number;
  bookName: string;
  bookGenreName: string[];
  authorName: string;
  startDate: string;
  endDate: string;
  returnDate: string;
}

export type Lending_log_create_body = {
  userId: number;
  bookId: number;
  startDate: string;
  endDate: string;
  returnDate?: string | undefined;
}

export type Purchase_create_body = {
  bookRequestIds?: number[] | undefined;
}
