/**
 * SCRIPT:SET_SCRIPT_WITH_NAME_HASH_AS_NO_LONGER_NEEDED
 *
 * 0xD21650BDA0F10841

 * 
 * Tell the code that this script can safely be removed from memory once there are no instances of it running.
 * Does the same as SET_SCRIPT_AS_NO_LONGER_NEEDED but takes an integer containing the hash of the script name instead of the name as a string.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashOfScriptName
 */
export function setScriptWithNameHashAsNoLongerNeeded(hashOfScriptName: number): void {
	const setScriptWithNameHashAsNoLongerNeeded_result = Citizen.invokeNative<void>('0xD21650BDA0F10841', hashOfScriptName);
	return setScriptWithNameHashAsNoLongerNeeded_result;
}