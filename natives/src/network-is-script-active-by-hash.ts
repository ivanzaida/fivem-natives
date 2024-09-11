/**
 * NETWORK:NETWORK_IS_SCRIPT_ACTIVE_BY_HASH
 *
 * 0x96B8D4513E0350EC

 * 
 * ------------------------------------------------------------------
 * @param {number} scriptHash
 * @param {number} instanceId
 * @param {boolean} localOnly If set the command only checks if there are any local instances of the script running, there may not be a script thread running but the code that manages the thread may still be active cleaning up
 * @param {number} positionHash
 * @returns {boolean}  
 */
export function networkIsScriptActiveByHash(scriptHash: number, instanceId: number = 1, localOnly: boolean = false, positionHash: number = 0): boolean {
	const networkIsScriptActiveByHash_result = Citizen.invokeNative<boolean>('0x96B8D4513E0350EC', scriptHash, instanceId, localOnly, positionHash);
	return networkIsScriptActiveByHash_result;
}