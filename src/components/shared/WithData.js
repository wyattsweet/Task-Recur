import { compose, graphql } from 'react-apollo'

import AllTasksQuery from '../../queries/AllTasksQuery'
import CreateTaskSub from '../../queries/CreateTaskSubscription'
import DeleteTaskMutation from '../../queries/DeleteTask'

const WithData = component => {
  return compose(
    graphql(AllTasksQuery, {
      options: {
        fetchPolicy: 'cache-and-network',
      },
      props: props => ({
        tasks: props.data.listTasks.items,
        data: props.data,
        subscribeToNewTasks: () => {
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
            },
          })
        }
      }),
    }),

    graphql(DeleteTaskMutation, {
      props: (props) => ({
        onDelete: (task) => props.mutate({
          variables: { id: task.id },
          optimisticResponse: () => ({ deletePost: { ...task }})
        })
      })
    })
  )(component)
}

export default WithData
