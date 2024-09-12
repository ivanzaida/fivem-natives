/**
 * SCRIPT:GET_THIS_SCRIPT_NAME
 *
 * 0x1AF90EB93E0012D6

 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getThisScriptName(): string {
	const getThisScriptName_result = Citizen.invokeNative<string>('0x1AF90EB93E0012D6', );
	return getThisScriptName_result;
}