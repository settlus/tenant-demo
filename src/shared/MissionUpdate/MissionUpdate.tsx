import { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'

import { MissionContext } from '../../store/mission_context'

type PropType = {
  updatedMission: number
  children: React.ReactNode
}

export default function MissionUpdate({ updatedMission, children }: PropType): React.ReactElement {
  const { mission, handleMission } = useContext(MissionContext)
  useEffect(() => {
    if (mission < updatedMission) {
      toast.success(
        updatedMission === 5 ? 'All missions complete!' : `Mission ${updatedMission} complete!`
      )
      handleMission(updatedMission)
    }
  }, [])

  return <>{children}</>
}
