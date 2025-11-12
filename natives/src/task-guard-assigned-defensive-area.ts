import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_GUARD_ASSIGNED_DEFENSIVE_AREA
 *
 * 0x2CFEEE8E3E154877

 * 
 * The behaviour will be the same as TASK_STAND_GUARD, if the ped shouldn't patrol the area, set fMaxPatrolProximity to 0.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} defendPositionX
 * @param {number} defendPositionY
 * @param {number} defendPositionZ
 * @param {number} heading
 * @param {number} maxPatrolProximity
 * @param {number} timer
 */
export function taskGuardAssignedDefensiveArea(ped: PedIndex, defendPositionX: number, defendPositionY: number, defendPositionZ: number, heading: number, maxPatrolProximity: number, timer: number): void {
	const taskGuardAssignedDefensiveArea_result = Citizen.invokeNative<void>('0x2CFEEE8E3E154877', ped, defendPositionX, defendPositionY, defendPositionZ, heading, maxPatrolProximity, timer);
	return taskGuardAssignedDefensiveArea_result;
}