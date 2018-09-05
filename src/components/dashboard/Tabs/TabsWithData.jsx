import { compose, graphql } from 'react-apollo'

import AllTasksQuery from '../../../queries/AllTasksQuery'
import Tabs from '../Tabs'

const TabsWithData = compose(
  graphql(AllTasksQuery, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
      tasks: props.data.listTasks.items
    })
  }),
)(Tabs)

export default TabsWithData
