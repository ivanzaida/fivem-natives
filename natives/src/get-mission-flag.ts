/**
 * MISC:GET_MISSION_FLAG
 *
 * 0x3D2EB53CF281A77E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getMissionFlag(): boolean {
	const getMissionFlag_result = Citizen.invokeNative<boolean>('0x3D2EB53CF281A77E', );
	return getMissionFlag_result;
}