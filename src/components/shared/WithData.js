import { compose, graphql } from 'react-apollo'

import AllTasksQuery from '../../queries/AllTasksQuery'
import CreateTask from '../../queries/CreateTask'
import CreateTaskSub from '../../queries/CreateTaskSubscription'
import DeactivateTask from '../../queries/DeactivateTask'
import UpdateTask from '../../queries/UpdateTask'

import { generateUniqId } from '../../helpers/utils'

const WithData = component => {
  return compose(
    graphql(AllTasksQuery, {
      options: {
        fetchPolicy: 'cache-and-network',
      },
      props: props => ({
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

    graphql(DeactivateTask, {
      props: (props) => ({
        onDelete: (task) => props.mutate({
          variables: { id: task.id },
          optimisticResponse: {
            updateTask: {
              ...task,
              active: false,
            }
          }
        })
      })
    }),

    graphql(UpdateTask, {
      props: props => ({
        onUpdate: (task) => props.mutate({
          variables: {id: task.id, title: task.title, recurring: task.recurring},
          optimisticResponse: {
            updateTask: {
              id: task.id,
              title: task.title,
              active: true,
              recurring: task.recurring,
              __typename: 'Task'
            }
          } 
        })
      })
    }),

    graphql(CreateTask, {
      props: props => ({
        onCreate: title => props.mutate({
          variables: { title },
          optimisticResponse: {
            createTask: {
              id: generateUniqId(),
              title,
              active: true,
              __typename: 'Task'
            }
          } 
        })
      })
    })
  )(component)
}

export default WithData
