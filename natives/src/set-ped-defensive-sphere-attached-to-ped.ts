import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DEFENSIVE_SPHERE_ATTACHED_TO_PED
 *
 * 0x98EEF9ADA73BD5B2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} centreZ
 * @param {number} radius
 * @param {boolean} applyToSecondaryDefensiveArea Makes this command be used with the secondary/fallback defensive area instead of the primary one
 */
export function setPedDefensiveSphereAttachedToPed(ped: PedIndex, otherPed: PedIndex, centreX: number, centreY: number, centreZ: number, radius: number, applyToSecondaryDefensiveArea: boolean = false): void {
	const setPedDefensiveSphereAttachedToPed_result = Citizen.invokeNative<void>('0x98EEF9ADA73BD5B2', ped, otherPed, centreX, centreY, centreZ, radius, applyToSecondaryDefensiveArea);
	return setPedDefensiveSphereAttachedToPed_result;
}