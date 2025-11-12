/**
 * SCRIPT:REQUEST_SCRIPT_WITH_NAME_HASH
 *
 * 0x625263BFD08AE230

 * 
 * Request a script program to be loaded.
 * Does the same as REQUEST_SCRIPT but takes an integer containing the hash of the script name instead of the name as a string.
 * 
 * formerly _REQUEST_STREAMED_SCRIPT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashOfScriptName
 */
export function requestScriptWithNameHash(hashOfScriptName: number): void {
	const requestScriptWithNameHash_result = Citizen.invokeNative<void>('0x625263BFD08AE230', hashOfScriptName);
	return requestScriptWithNameHash_result;
}