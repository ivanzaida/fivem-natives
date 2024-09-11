/**
 * NETWORK:NETWORK_SET_THIS_SCRIPT_IS_NETWORK_SCRIPT
 *
 * 0xDB2434E51017FFCC

 * This must be called if the script is to be networked, before you register the broadcast data.
 * MaxNumPlayers - The maximum number of players who can participate in the script
 * InstanceId - An id that can be assigned to the script to distinguish it from other scripts of the same type running at the same time
 * 
 * ------------------------------------------------------------------
 * @param {number} maxNumPlayers
 * @param {boolean} activeInSinglePlayer
 * @param {number} instanceId
 */
export function networkSetThisScriptIsNetworkScript(maxNumPlayers: number, activeInSinglePlayer: boolean, instanceId: number = 1): void {
	const networkSetThisScriptIsNetworkScript_result = Citizen.invokeNative<void>('0xDB2434E51017FFCC', maxNumPlayers, activeInSinglePlayer, instanceId);
	return networkSetThisScriptIsNetworkScript_result;
}