import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_TARGET_PED_IN_PERCEPTION_AREA
 *
 * 0xB808915F3B0D8766

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @param {number} focusAngle
 * @param {number} focusDistance
 * @param {number} peripheralAngle
 * @param {number} peripheralDistance
 * @returns {boolean}  
 */
export function isTargetPedInPerceptionArea(ped: PedIndex, targetPed: PedIndex, focusAngle: number = 1, focusDistance: number = 1, peripheralAngle: number = 1, peripheralDistance: number = 1): boolean {
	const isTargetPedInPerceptionArea_result = Citizen.invokeNative<boolean>('0xB808915F3B0D8766', ped, targetPed, focusAngle, focusDistance, peripheralAngle, peripheralDistance);
	return isTargetPedInPerceptionArea_result;
}