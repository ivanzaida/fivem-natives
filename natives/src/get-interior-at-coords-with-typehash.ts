import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_INTERIOR_AT_COORDS_WITH_TYPEHASH
 *
 * 0x98915B4A834CE874

 * 
 * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} inCoorsX
 * @param {number} inCoorsY
 * @param {number} inCoorsZ
 * @param {number} nameHash
 * @returns {InteriorInstanceIndex}  
 */
export function getInteriorAtCoordsWithTypehash(inCoorsX: number, inCoorsY: number, inCoorsZ: number, nameHash: number): InteriorInstanceIndex {
	const getInteriorAtCoordsWithTypehash_result = Citizen.invokeNative<InteriorInstanceIndex>('0x98915B4A834CE874', inCoorsX, inCoorsY, inCoorsZ, nameHash);
	return getInteriorAtCoordsWithTypehash_result;
}