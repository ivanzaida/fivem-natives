import { PedIndex, EEnavScriptFlags, Navdata } from '@ivanzaida/structures'

/**
 * TASK:TASK_FOLLOW_NAV_MESH_TO_COORD_ADVANCED
 *
 * 0x505D1BE21E9DF7E0

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
 * @param {Navdata} navDataStruct
 * @param {number} finalHeading
 */
export function taskFollowNavMeshToCoordAdvanced(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, moveBlendRatio: number, time: number, radius: number, navFlags: EEnavScriptFlags | number, navDataStruct: Navdata, finalHeading: number = 40000): void {
	const taskFollowNavMeshToCoordAdvanced_result = Citizen.invokeNative<void>('0x505D1BE21E9DF7E0', ped, coorsX, coorsY, coorsZ, moveBlendRatio, time, radius, navFlags, navDataStruct, finalHeading);
	return taskFollowNavMeshToCoordAdvanced_result;
}