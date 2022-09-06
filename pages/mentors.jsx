import React from 'react'
import Button from '../components/button'
import PrimaryHeader from '../components/general/header'
import Mentors from '../layouts/students/views/mentors'

export default function MentorsPage() {
      return (
            <Mentors />
      )
}

MentorsPage.Info = {
  user: "student",
  title: "Explore Mentors",
  searchFilter: true,
  description: "Task Management Mentors Page"
}