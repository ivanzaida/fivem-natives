/**
 * APP:APP_GET_INT
 *
 * 0x817F2264835EDDBC

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {number}  
 */
export function appGetInt(name: string): number {
	const appGetInt_result = Citizen.invokeNative<number>('0x817F2264835EDDBC', name);
	return appGetInt_result;
}