/**
 * GRAPHICS:GET_USINGSEETHROUGH
 *
 * 0x8735D1F8A7023128

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getUsingseethrough(): boolean {
	const getUsingseethrough_result = Citizen.invokeNative<boolean>('0x8735D1F8A7023128', );
	return getUsingseethrough_result;
}