import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_GUARD_SPHERE_DEFENSIVE_AREA
 *
 * 0x9B1FD51B92E0C07E

 * 
 * The behaviour will be the same as TASK_STAND_GUARD, but will only patrol inside the defensive area and inside fMaxPatrolProximity, if the ped shouldn't patrol the area, set fMaxPatrolProximity to 0.0
 * The area is specified using vAreaCentre and fAreaRadius the same format as SET_PED_SPHERE_DEFENSIVE_AREA.
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
 * @param {number} areaStartX
 * @param {number} areaStartY
 * @param {number} areaStartZ
 * @param {number} areaRadius
 */
export function taskGuardSphereDefensiveArea(ped: PedIndex, defendPositionX: number, defendPositionY: number, defendPositionZ: number, heading: number, maxPatrolProximity: number, timer: number, areaStartX: number, areaStartY: number, areaStartZ: number, areaRadius: number): void {
	const taskGuardSphereDefensiveArea_result = Citizen.invokeNative<void>('0x9B1FD51B92E0C07E', ped, defendPositionX, defendPositionY, defendPositionZ, heading, maxPatrolProximity, timer, areaStartX, areaStartY, areaStartZ, areaRadius);
	return taskGuardSphereDefensiveArea_result;
}