import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SMART_FLEE_PED
 *
 * 0xD844F5E50DAB6FF7

 * 
 * Makes a ped run away from another ped (fleeTarget).
 * 
 * distance = ped will flee this distance.
 * fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {number} safeDistance
 * @param {number} fleeTime
 * @param {boolean} preferPavements
 * @param {boolean} updateTargetToNearestHatedPed
 */
export function taskSmartFleePed(ped: PedIndex, otherPed: PedIndex, safeDistance: number, fleeTime: number, preferPavements: boolean = false, updateTargetToNearestHatedPed: boolean = false): void {
	const taskSmartFleePed_result = Citizen.invokeNative<void>('0xD844F5E50DAB6FF7', ped, otherPed, safeDistance, fleeTime, preferPavements, updateTargetToNearestHatedPed);
	return taskSmartFleePed_result;
}