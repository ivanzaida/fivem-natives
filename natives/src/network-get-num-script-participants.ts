/**
 * NETWORK:NETWORK_GET_NUM_SCRIPT_PARTICIPANTS
 *
 * 0x996932F6DFE01964

 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 * @param {number} instanceId
 * @param {number} positionHash
 * @returns {number}  
 */
export function networkGetNumScriptParticipants(scriptName: string, instanceId: number = 1, positionHash: number = 0): number {
	const networkGetNumScriptParticipants_result = Citizen.invokeNative<number>('0x996932F6DFE01964', scriptName, instanceId, positionHash);
	return networkGetNumScriptParticipants_result;
}