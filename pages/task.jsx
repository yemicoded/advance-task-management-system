import React from 'react'
import Button from '../components/button'
import PrimaryHeader from '../components/general/header'
import Overview from '../layouts/students/views/overview'
import Task from '../layouts/students/views/task'

export default function TaskPage() {
      return (
            <Task />
      )
}

TaskPage.Info = {
  user: "student",
      title: "Explore Task",
  searchFilter: true,
  description: "Task Management Overview Page"
}