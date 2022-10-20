import React from 'react'
import Link from 'next/link'

export default function PageNotFound() {
  return (
    <div>
      <h1> Page Not Found!!!</h1>
      <h3> 페이지가 없습니다. </h3>
      <Link href="/">홈으로 돌아가기 </Link>
    </div>
  )
}
