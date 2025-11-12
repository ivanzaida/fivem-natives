import { EPedType, PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_RANDOM_PED_AT_COORD
 *
 * 0xFA4D35AD36BDA1FE

 * 
 * Gets a random ped in the x/y/zRadius near the x/y/z coordinates passed.
 * 
 * Ped Types:
 * Any = -1
 * Player = 1
 * Male = 4
 * Female = 5
 * Cop = 6
 * Human = 26
 * SWAT = 27
 * Animal = 28
 * Army = 29
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} locateDimensionsX
 * @param {number} locateDimensionsY
 * @param {number} locateDimensionsZ
 * @param {EPedType} exclusionPedType
 * @returns {PedIndex}  
 */
export function getRandomPedAtCoord(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, locateDimensionsX: number, locateDimensionsY: number, locateDimensionsZ: number, exclusionPedType: EPedType | number = 1): PedIndex {
	const getRandomPedAtCoord_result = Citizen.invokeNative<PedIndex>('0xFA4D35AD36BDA1FE', centreCoorsX, centreCoorsY, centreCoorsZ, locateDimensionsX, locateDimensionsY, locateDimensionsZ, exclusionPedType);
	return getRandomPedAtCoord_result;
}