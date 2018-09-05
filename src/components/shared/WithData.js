import { compose, graphql } from 'react-apollo'

import AllTasksQuery from '../../queries/AllTasksQuery'
import CreateTaskSub from '../../queries/CreateTaskSubscription'

const WithData = component => {
  return compose(
    graphql(AllTasksQuery, {
      options: {
        fetchPolicy: 'cache-and-network',
      },
      props: props => ({
        tasks: props.data.listTasks.items,
        data: props.data,
        subscribeToNewTasks: params => {
          props.data.subscribeToMore({
            document: CreateTaskSub,
            updateQuery: (prev, {subscriptionData: { data: { onCreateTask } }}) => {
              return ({
                ...prev,
                listTasks: {
                  ...prev.listTasks,
                  items: [onCreateTask, ...prev.listTasks.items]
                } 
              })
            }
          })
        }
      }),
    }),
  )(component)
}

export default WithData
