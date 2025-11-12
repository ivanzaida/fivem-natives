/**
 * GRAPHICS:GET_IS_HIDEF
 *
 * 0xC003EE4BA64FE66C

 * 
 * false = Any resolution < 1280x720
 * true = Any resolution >= 1280x720
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsHidef(): boolean {
	const getIsHidef_result = Citizen.invokeNative<boolean>('0xC003EE4BA64FE66C', );
	return getIsHidef_result;
}