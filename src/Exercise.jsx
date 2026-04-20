import React from 'react'
import UserCard from './UserCard'

function Exercise() {
  return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard name="John Doe" email="[EMAIL_ADDRESS]" street="123 Main St" city="New York"/>
          <UserCard name="Jane Smith" email="[EMAIL_ADDRESS]" street="456 Elm St" city="Los Angeles"/>
          <UserCard name="Bob Johnson" email="[EMAIL_ADDRESS]" street="789 Oak St" city="Chicago"/>
        </div>
      </div>
    </>
  )
}

export default Exercise