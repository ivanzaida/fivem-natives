/**
 * PED:GET_NUM_PED_MAKEUP_TINTS
 *
 * 0x0A4209F7407B86F6

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumPedMakeupTints(): number {
	const getNumPedMakeupTints_result = Citizen.invokeNative<number>('0x0A4209F7407B86F6', );
	return getNumPedMakeupTints_result;
}