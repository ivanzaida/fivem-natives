/**
 * SYSTEM:START_NEW_SCRIPT_WITH_NAME_HASH_AND_ARGS
 *
 * 0xC4BB298BD441BE78

 * 
 * ------------------------------------------------------------------
 * @param {number} scriptHash
 * @param {DataView} args [Ref]
 * @param {number} argCount
 * @param {number} stackSize
 * @returns {number}  
 */
export function startNewScriptWithNameHashAndArgs(scriptHash: number, args: DataView /* ptr */, argCount: number, stackSize: number): number {
	const startNewScriptWithNameHashAndArgs_result = Citizen.invokeNative<number>('0xC4BB298BD441BE78', scriptHash, args, argCount, stackSize);
	return startNewScriptWithNameHashAndArgs_result;
}