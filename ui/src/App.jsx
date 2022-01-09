import React from 'react'

// import DrinkList from './components/Conditions/DrinkList'
// import Profile from './components/Props/Card'
// import Gallery from './components/Props/Gallery'
// import PackingList from './components/Conditions/PackingList'
// import List from './components/Lists/List'
// import RecipeList from './components/Lists/RecipeList'
// import Poem from './components/Lists/Poem'
import Clock from './components/Pure/Clock'
import StoryTray from './components/Pure/StoryTray'

import { stories } from './data/data'

export default function App() {
  const nowTime = new Date()

  return (
    <>
      <Clock time={nowTime} />
      <StoryTray stories={stories} />
    </>
  )
}
