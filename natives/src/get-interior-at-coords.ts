import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_INTERIOR_AT_COORDS
 *
 * 0x0E171121A3A25363

 * 
 * Returns interior ID from specified coordinates. If coordinates are outside, then it returns 0.
 * 
 * Example for VB.NET
 * Dim interiorID As Integer = Native.Function.Call(Of Integer)(Hash.GET_INTERIOR_AT_COORDS, X, Y, Z)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} inCoorsX
 * @param {number} inCoorsY
 * @param {number} inCoorsZ
 * @returns {InteriorInstanceIndex}  
 */
export function getInteriorAtCoords(inCoorsX: number, inCoorsY: number, inCoorsZ: number): InteriorInstanceIndex {
	const getInteriorAtCoords_result = Citizen.invokeNative<InteriorInstanceIndex>('0x0E171121A3A25363', inCoorsX, inCoorsY, inCoorsZ);
	return getInteriorAtCoords_result;
}