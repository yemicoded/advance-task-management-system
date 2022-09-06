import React from 'react'
import Overview from '../layouts/students/views/overview'

export default function OverviewPage() {
  return(
    <Overview/>
  )
}

OverviewPage.Info = {
  user: "student",
  title: "Overview",
  searchFilter: false,
  description: "Task Management Overview Page"
}