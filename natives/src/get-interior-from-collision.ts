import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_INTERIOR_FROM_COLLISION
 *
 * 0x91398220755C14BF

 * 
 * ------------------------------------------------------------------
 * @param {number} inCoorsX
 * @param {number} inCoorsY
 * @param {number} inCoorsZ
 * @returns {InteriorInstanceIndex}  
 */
export function getInteriorFromCollision(inCoorsX: number, inCoorsY: number, inCoorsZ: number): InteriorInstanceIndex {
	const getInteriorFromCollision_result = Citizen.invokeNative<InteriorInstanceIndex>('0x91398220755C14BF', inCoorsX, inCoorsY, inCoorsZ);
	return getInteriorFromCollision_result;
}