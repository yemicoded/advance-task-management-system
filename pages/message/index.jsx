import reat from 'react'
import { clx } from '../../helpers/clx'
import Message from '../../layouts/students/views/message'

export default function MessagePage() {
      return (
            <Message />
      )
}


MessagePage.Info = {
  user: "student",
  title: "Message",
  searchFilter:false,
  description: "Task Management Message Page"
}