import React from 'react'
import Board from 'react-trello'

const Kanban = () => {
    const data = {
        lanes: [
          {
            id: 'lane1',
            title: 'To Do',
            label: "4",
            hideCardDeleteIcon: true,
            cardStyle:{cursor: "grab", padding: "20px", borderRadius: "16px", margin: "10px 0"},
            cards: [
              {id: 'Card1', title: 'Brainstorming', description: "Brainstorming brings team members' diverse experience into play. ", label: 'Low'},
              {id: 'Card2', title: 'Research', description: 'User research helps you to create an optimal product for users.', label: 'High'},
              {id: 'Card3', title: 'Wireframes', description: 'Low fidelity wireframes include the most basic content and visuals.', label: 'High'},
              {id: 'Card4', title: 'Moodboard', description: 'User research helps you to create an optimal product for users.', label: 'Low'},
            ]
          },
          {
            id: 'lane2',
            title: 'On Progress',
            label: '3',
            cardStyle:{cursor: "grab", padding: "20px", borderRadius: "16px", margin: "10px 0"},
            cards: [
                {id: 'Card1', title: 'Onboarding Illustrations', description: "Brainstorming brings team members' diverse experience into play. ", label: 'Low'},
              {id: 'Card2', title: 'Moodboard', description: 'User research helps you to create an optimal product for users.', label: 'Low'},
              {id: 'Card3', title: 'Design System', description: 'It just needs to adapt the UI from what you did before ', label: 'High'},
            ]
          },
          {
            id: 'lane3',
            title: 'Done',
            label: "2",
            cardStyle:{cursor: "grab", padding: "20px", borderRadius: "16px", margin: "10px 0"},
            cards: [
                {id: 'Card1', title: 'Mobile App Design', description: "Brainstorming brings team members' diverse experience into play. ", label: 'Completed'},
              {id: 'Card2', title: 'Design System', description: 'It just needs to adapt the UI from what you did before ', label: 'Completed'},
            ]
          }
        ]
      }
  return (
    <Board data={data} />
  )
}

export default Kanban