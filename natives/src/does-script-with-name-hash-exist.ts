/**
 * SCRIPT:DOES_SCRIPT_WITH_NAME_HASH_EXIST
 *
 * 0x5ADE92AC7A2490B6

 * 
 * Returns TRUE if the script file can be found on disc
 * Does the same as DOES_SCRIPT_EXIST but takes an integer containing the hash of the script name instead of the name as a string.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashOfScriptName
 * @returns {boolean}  
 */
export function doesScriptWithNameHashExist(hashOfScriptName: number): boolean {
	const doesScriptWithNameHashExist_result = Citizen.invokeNative<boolean>('0x5ADE92AC7A2490B6', hashOfScriptName);
	return doesScriptWithNameHashExist_result;
}