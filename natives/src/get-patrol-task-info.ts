import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * TASK:GET_PATROL_TASK_INFO
 *
 * 0x4CC29C988AA182D9

 * 
 * The values it returns should be only checked if the function returns true. The function returns TRUE when the ped has the patrol task as his active task.
 * If the ped is patrolling, the function returns true. If the ped then engages in combat the function will return false until he resumes his patrol task
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} timeLeftAtNode [Ref]
 * @param {IntRef} nodeId [Ref]
 * @returns {boolean}  
 */
export function getPatrolTaskInfo(ped: PedIndex, timeLeftAtNode: IntRef /* ptr */, nodeId: IntRef /* ptr */): boolean {
	const getPatrolTaskInfo_result = Citizen.invokeNative<boolean>('0x4CC29C988AA182D9', ped, timeLeftAtNode.dataView, nodeId.dataView);
	return getPatrolTaskInfo_result;
}