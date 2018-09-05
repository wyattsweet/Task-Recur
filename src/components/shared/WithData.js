import { compose, graphql } from 'react-apollo'

import AllTasksQuery from '../../queries/AllTasksQuery'

const WithData = component => {
  return compose(
    graphql(AllTasksQuery, {
      options: {
        fetchPolicy: 'cache-and-network',
      },
      props: props => ({
        tasks: props.data.listTasks.items,
      }),
    }),
  )(component)
}

export default WithData
