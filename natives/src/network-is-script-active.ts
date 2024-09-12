/**
 * NETWORK:NETWORK_IS_SCRIPT_ACTIVE
 *
 * 0x99F8FC8A6D8E20C0

 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 * @param {number} instanceId
 * @param {boolean} localOnly If set the command only checks if there are any local instances of the script running, there may not be a script thread running but the code that manages the thread may still be active cleaning up
 * @param {number} positionHash
 * @returns {boolean}  
 */
export function networkIsScriptActive(scriptName: string, instanceId: number = 1, localOnly: boolean = false, positionHash: number = 0): boolean {
	const networkIsScriptActive_result = Citizen.invokeNative<boolean>('0x99F8FC8A6D8E20C0', scriptName, instanceId, localOnly, positionHash);
	return networkIsScriptActive_result;
}