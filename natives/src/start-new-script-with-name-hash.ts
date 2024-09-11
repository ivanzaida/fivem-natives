/**
 * SYSTEM:START_NEW_SCRIPT_WITH_NAME_HASH
 *
 * 0xEB1C67C3A5333A92

 * 
 * ------------------------------------------------------------------
 * @param {number} scriptHash
 * @param {number} stackSize
 * @returns {number}  
 */
export function startNewScriptWithNameHash(scriptHash: number, stackSize: number): number {
	const startNewScriptWithNameHash_result = Citizen.invokeNative<number>('0xEB1C67C3A5333A92', scriptHash, stackSize);
	return startNewScriptWithNameHash_result;
}