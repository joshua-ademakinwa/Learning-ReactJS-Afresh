// NOTE - Fragments - 25
// * The 'React.Fragment' is a tag used to pass in an empty node tag incase it is not needed
// * We can also used just an empty tag '<> </>' but this has a limitation. 
// * The Limitation is that, Passing a key attribute for arrays will be immpossible

import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo Component</p>
    </React.Fragment>
  )
}

export default FragmentDemo