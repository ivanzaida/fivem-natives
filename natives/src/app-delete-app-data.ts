/**
 * APP:APP_DELETE_APP_DATA
 *
 * 0xC88197BB8F2056FE

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {boolean}  
 */
export function appDeleteAppData(name: string): boolean {
	const appDeleteAppData_result = Citizen.invokeNative<boolean>('0xC88197BB8F2056FE', name);
	return appDeleteAppData_result;
}