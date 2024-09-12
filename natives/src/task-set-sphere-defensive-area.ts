import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SET_SPHERE_DEFENSIVE_AREA
 *
 * 0xD5A6D66C06D8ADB4

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} centreZ
 * @param {number} radius
 */
export function taskSetSphereDefensiveArea(ped: PedIndex, centreX: number, centreY: number, centreZ: number, radius: number): void {
	const taskSetSphereDefensiveArea_result = Citizen.invokeNative<void>('0xD5A6D66C06D8ADB4', ped, centreX, centreY, centreZ, radius);
	return taskSetSphereDefensiveArea_result;
}