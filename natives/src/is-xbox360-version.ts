/**
 * MISC:IS_XBOX360_VERSION
 *
 * 0x1226C55CA7D2269A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isXbox360Version(): boolean {
	const isXbox360Version_result = Citizen.invokeNative<boolean>('0x1226C55CA7D2269A', );
	return isXbox360Version_result;
}