/**
 * MISC:GET_BITS_IN_RANGE
 *
 * 0x8B5B2BE72A7C0CF6

 * 
 * ------------------------------------------------------------------
 * @param {number} variableToRead
 * @param {number} startBit
 * @param {number} endBit
 * @returns {number}  
 */
export function getBitsInRange(variableToRead: number, startBit: number, endBit: number): number {
	const getBitsInRange_result = Citizen.invokeNative<number>('0x8B5B2BE72A7C0CF6', variableToRead, startBit, endBit);
	return getBitsInRange_result;
}