/**
 * SOCIALCLUB:SC_GAMERDATA_GET_BOOL
 *
 * 0x65395D04908A6F78

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {boolean}  
 */
export function scGamerdataGetBool(name: string): boolean {
	const scGamerdataGetBool_result = Citizen.invokeNative<boolean>('0x65395D04908A6F78', name);
	return scGamerdataGetBool_result;
}