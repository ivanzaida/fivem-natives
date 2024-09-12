/**
 * MISC:IS_PS3_VERSION
 *
 * 0x0BA1A956D36B210F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPs3Version(): boolean {
	const isPs3Version_result = Citizen.invokeNative<boolean>('0x0BA1A956D36B210F', );
	return isPs3Version_result;
}