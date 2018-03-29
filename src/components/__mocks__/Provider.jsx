import context from '../testFixture';

export const MyContext = ({
  Consumer(props) {
    return props.children(context)
  } 
})
