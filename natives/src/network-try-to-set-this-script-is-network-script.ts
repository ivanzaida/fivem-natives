/**
 * NETWORK:NETWORK_TRY_TO_SET_THIS_SCRIPT_IS_NETWORK_SCRIPT
 *
 * 0x0384E096E4BE6261

 * 
 * Works in the same way as NETWORK_SET_THIS_SCRIPT_IS_NETWORK_SCRIPT but returns FALSE if it fails.
 * An example of a reason for failing would be if the command is called for an object brain and there is already a networked object brain at the same coordinates.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} maxNumPlayers
 * @param {boolean} activeInSinglePlayer
 * @param {number} instanceId
 * @returns {boolean}  
 */
export function networkTryToSetThisScriptIsNetworkScript(maxNumPlayers: number, activeInSinglePlayer: boolean, instanceId: number = 1): boolean {
	const networkTryToSetThisScriptIsNetworkScript_result = Citizen.invokeNative<boolean>('0x0384E096E4BE6261', maxNumPlayers, activeInSinglePlayer, instanceId);
	return networkTryToSetThisScriptIsNetworkScript_result;
}