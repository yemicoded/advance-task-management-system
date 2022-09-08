import reat from 'react'
import { clx } from '../helpers/clx'
import Settings from '../layouts/students/views/settings'

export default function SettingsPage() {
      return (
            <Settings />
      )
}


SettingsPage.Info = {
  user: "student",
  title: "Settings",
  searchFilter:false,
  description: "Task Management Settings Page"
}