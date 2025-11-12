import { PedIndex, EEnavScriptFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_FOLLOW_NAV_MESH_TO_COORD
 *
 * 0xA966E518B752B92A

 * 
 * IMPORTANT NOTE : Sometimes a path may not be able to be found. This could happen because there simply isn't any way to get there, or maybe a bunch of dynamic objects have blocked the way,
 * or maybe the destination is too far away. In this case the ped will simply stand still.
 * To identify when this has happened, you can use GET_NAVMESH_ROUTE_RESULT. This will help you find situations where peds cannot get to their target.
 * 
 * If no timeout, set timeout to -1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} moveBlendRatio
 * @param {number} time
 * @param {number} radius
 * @param {EEnavScriptFlags} navFlags
 * @param {number} finalHeading
 */
export function taskFollowNavMeshToCoord(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, moveBlendRatio: number, time: number = 20000, radius: number = 0.25, navFlags: EEnavScriptFlags | number = 0, finalHeading: number = 40000): void {
	const taskFollowNavMeshToCoord_result = Citizen.invokeNative<void>('0xA966E518B752B92A', ped, coorsX, coorsY, coorsZ, moveBlendRatio, time, radius, navFlags, finalHeading);
	return taskFollowNavMeshToCoord_result;
}