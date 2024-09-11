import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SPHERE_DEFENSIVE_AREA
 *
 * 0xBB4D4E549F8E6E8C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} centreZ
 * @param {number} radius
 * @param {boolean} useCenterAsGoToPosition Will have the ped go to the center position rather than closest position if the cover search fails
 * @param {boolean} applyToSecondaryDefensiveArea Makes this command be used with the secondary/fallback defensive area instead of the primary one
 */
export function setPedSphereDefensiveArea(ped: PedIndex, centreX: number, centreY: number, centreZ: number, radius: number, useCenterAsGoToPosition: boolean = false, applyToSecondaryDefensiveArea: boolean = false): void {
	const setPedSphereDefensiveArea_result = Citizen.invokeNative<void>('0xBB4D4E549F8E6E8C', ped, centreX, centreY, centreZ, radius, useCenterAsGoToPosition, applyToSecondaryDefensiveArea);
	return setPedSphereDefensiveArea_result;
}