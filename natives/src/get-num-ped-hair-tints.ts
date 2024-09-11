/**
 * PED:GET_NUM_PED_HAIR_TINTS
 *
 * 0x37A0D41DCFB52CC8

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumPedHairTints(): number {
	const getNumPedHairTints_result = Citizen.invokeNative<number>('0x37A0D41DCFB52CC8', );
	return getNumPedHairTints_result;
}