import React from 'react'
import './Profile.css'
import CalendarHeatmap from 'react-calendar-heatmap';
const Profile = () => {
  return (
    <div className='test'>
      <CalendarHeatmap
        values={[
          { date: '2016-01-01', count: 1 },
          { date: '2016-01-03', count: 100 },
          { date: '2016-01-06', count: 2 },
          // ...and so on
        ]}
        // className='abc'
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-1`;
        }}
      />
    </div>
  )
}

export default Profile
