import { IntRef, EPedType } from '@ivanzaida/structures'

/**
 * PED:GET_CLOSEST_PED
 *
 * 0x02E029D1D9614563

 * 
 * Gets the closest ped in a radius.
 * 
 * Ped Types:
 * Any ped = -1
 * Player = 1
 * Male = 4
 * Female = 5
 * Cop = 6
 * Human = 26
 * SWAT = 27
 * Animal = 28
 * Army = 29
 * 
 * ------------------
 * P4 P5 P7 P8
 * 1  0  x  x  = return nearest walking Ped
 * 1  x  0  x  = return nearest walking Ped
 * x  1  1  x  = return Ped you are using
 * 0  0  x  x  = no effect
 * 0  x  0  x  = no effect
 * 
 * x = can be 1 or 0. Does not have any obvious changes.
 * 
 * This function does not return ped who is:
 * 1. Standing still
 * 2. Driving
 * 3. Fleeing
 * 4. Attacking
 * 
 * This function only work if the ped is:
 * 1. walking normally.
 * 2. waiting to cross a road.
 * 
 * Note: PED::GET_PED_NEARBY_PEDS works for more peds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} range
 * @param {boolean} scanRandomPeds
 * @param {boolean} scanMissionPeds
 * @param {IntRef} closestPed [Ref]
 * @param {boolean} checkPlayerPeds
 * @param {boolean} returnPedsWithScriptedTasks
 * @param {EPedType} exclusionPedType
 * @returns {boolean}  
 */
export function getClosestPed(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, range: number, scanRandomPeds: boolean, scanMissionPeds: boolean, closestPed: IntRef /* ptr */, checkPlayerPeds: boolean = false, returnPedsWithScriptedTasks: boolean = false, exclusionPedType: EPedType | number = 1): boolean {
	const getClosestPed_result = Citizen.invokeNative<boolean>('0x02E029D1D9614563', centreCoorsX, centreCoorsY, centreCoorsZ, range, scanRandomPeds, scanMissionPeds, closestPed.dataView, checkPlayerPeds, returnPedsWithScriptedTasks, exclusionPedType);
	return getClosestPed_result;
}