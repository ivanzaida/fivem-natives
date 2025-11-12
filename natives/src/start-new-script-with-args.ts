/**
 * SYSTEM:START_NEW_SCRIPT_WITH_ARGS
 *
 * 0xB8BA7F44DF1575E1

 * 
 * return : script thread id, 0 if failed
 * Pass pointer to struct of args in p1, size of struct goes into p2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 * @param {DataView} args [Ref]
 * @param {number} argCount
 * @param {number} stackSize
 * @returns {number}  
 */
export function startNewScriptWithArgs(scriptName: string, args: DataView /* ptr */, argCount: number, stackSize: number): number {
	const startNewScriptWithArgs_result = Citizen.invokeNative<number>('0xB8BA7F44DF1575E1', scriptName, args, argCount, stackSize);
	return startNewScriptWithArgs_result;
}