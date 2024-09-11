import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DEFENSIVE_AREA_DIRECTION
 *
 * 0x1738EA03946B4D2A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} defendFromPosX
 * @param {number} defendFromPosY
 * @param {number} defendFromPosZ
 * @param {boolean} applyToSecondaryDefensiveArea Makes this command be used with the secondary/fallback defensive area instead of the primary one
 */
export function setPedDefensiveAreaDirection(ped: PedIndex, defendFromPosX: number, defendFromPosY: number, defendFromPosZ: number, applyToSecondaryDefensiveArea: boolean = false): void {
	const setPedDefensiveAreaDirection_result = Citizen.invokeNative<void>('0x1738EA03946B4D2A', ped, defendFromPosX, defendFromPosY, defendFromPosZ, applyToSecondaryDefensiveArea);
	return setPedDefensiveAreaDirection_result;
}