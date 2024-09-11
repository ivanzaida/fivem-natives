/**
 * SCRIPT:DOES_SCRIPT_EXIST
 *
 * 0x61AD5054653814F5

 * 
 * ------------------------------------------------------------------
 * @param {string} scriptname
 * @returns {boolean}  
 */
export function doesScriptExist(scriptname: string): boolean {
	const doesScriptExist_result = Citizen.invokeNative<boolean>('0x61AD5054653814F5', scriptname);
	return doesScriptExist_result;
}