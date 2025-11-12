/**
 * SCRIPT:HAS_SCRIPT_WITH_NAME_HASH_LOADED
 *
 * 0x65F606616F48186B

 * 
 * Returns TRUE if the script program is in memory.
 * Does the same as HAS_SCRIPT_LOADED but takes an integer containing the hash of the script name instead of the name as a string.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashOfScriptName
 * @returns {boolean}  
 */
export function hasScriptWithNameHashLoaded(hashOfScriptName: number): boolean {
	const hasScriptWithNameHashLoaded_result = Citizen.invokeNative<boolean>('0x65F606616F48186B', hashOfScriptName);
	return hasScriptWithNameHashLoaded_result;
}