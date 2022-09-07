import reat from 'react'
import { clx } from '../helpers/clx'
import Message from '../layouts/students/views/message'
import Settings from '../layouts/students/views/settings'

export default function MessagePage({
      classname,
      children
}) {
      const classes = clx(
            "",
            classname
      )
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