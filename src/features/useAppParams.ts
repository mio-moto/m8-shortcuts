import { useParams } from 'react-router-dom'

type AppParameters = {
  screen: string
  activity: string
}

export const useAppParams = useParams<AppParameters>
