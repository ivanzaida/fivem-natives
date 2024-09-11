/**
 * NETWORK:NETWORK_GET_THIS_SCRIPT_IS_NETWORK_SCRIPT
 *
 * 0xE8DB952A4BA8F328

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGetThisScriptIsNetworkScript(): boolean {
	const networkGetThisScriptIsNetworkScript_result = Citizen.invokeNative<boolean>('0xE8DB952A4BA8F328', );
	return networkGetThisScriptIsNetworkScript_result;
}