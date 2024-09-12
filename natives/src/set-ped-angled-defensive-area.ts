import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ANGLED_DEFENSIVE_AREA
 *
 * 0xDF2B856299BCDF13

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} vec1X
 * @param {number} vec1Y
 * @param {number} vec1Z
 * @param {number} vec2X
 * @param {number} vec2Y
 * @param {number} vec2Z
 * @param {number} rectangleWidth
 * @param {boolean} useCenterAsGoToPosition Will have the ped go to the center position rather than closest position if the cover search fails
 * @param {boolean} applyToSecondaryDefensiveArea Makes this command be used with the secondary/fallback defensive area instead of the primary one
 */
export function setPedAngledDefensiveArea(ped: PedIndex, vec1X: number, vec1Y: number, vec1Z: number, vec2X: number, vec2Y: number, vec2Z: number, rectangleWidth: number, useCenterAsGoToPosition: boolean = false, applyToSecondaryDefensiveArea: boolean = false): void {
	const setPedAngledDefensiveArea_result = Citizen.invokeNative<void>('0xDF2B856299BCDF13', ped, vec1X, vec1Y, vec1Z, vec2X, vec2Y, vec2Z, rectangleWidth, useCenterAsGoToPosition, applyToSecondaryDefensiveArea);
	return setPedAngledDefensiveArea_result;
}