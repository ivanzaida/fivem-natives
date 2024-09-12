import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DEFENSIVE_AREA_ATTACHED_TO_PED
 *
 * 0xE0C92005A30D227B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {number} vec1X
 * @param {number} vec1Y
 * @param {number} vec1Z
 * @param {number} vec2X
 * @param {number} vec2Y
 * @param {number} vec2Z
 * @param {number} rectangleWidth
 * @param {boolean} orientateWithPed
 * @param {boolean} applyToSecondaryDefensiveArea Makes this command be used with the secondary/fallback defensive area instead of the primary one
 */
export function setPedDefensiveAreaAttachedToPed(ped: PedIndex, otherPed: PedIndex, vec1X: number, vec1Y: number, vec1Z: number, vec2X: number, vec2Y: number, vec2Z: number, rectangleWidth: number, orientateWithPed: boolean, applyToSecondaryDefensiveArea: boolean = false): void {
	const setPedDefensiveAreaAttachedToPed_result = Citizen.invokeNative<void>('0xE0C92005A30D227B', ped, otherPed, vec1X, vec1Y, vec1Z, vec2X, vec2Y, vec2Z, rectangleWidth, orientateWithPed, applyToSecondaryDefensiveArea);
	return setPedDefensiveAreaAttachedToPed_result;
}