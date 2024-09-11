/**
 * APP:APP_GET_FLOAT
 *
 * 0x24F333D2B21DC3EC

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {number}  
 */
export function appGetFloat(name: string): number {
	const appGetFloat_result = Citizen.invokeNative<number>('0x24F333D2B21DC3EC', name);
	return appGetFloat_result;
}