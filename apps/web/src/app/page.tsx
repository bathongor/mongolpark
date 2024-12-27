import { add as addNumbers } from '@mongolpark/sample-lib'
import React from 'react'

export default function Home() {
  return <div>{addNumbers(4, 6)}</div>
}
