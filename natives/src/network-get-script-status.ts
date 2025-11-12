import { ENetworkScriptState } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_SCRIPT_STATUS
 *
 * 0xDFF16B5B12604EFF

 * 
 * You must wait for this to return NETSCRIPT_PLAYING before the script is allowed to continue. This is called before
 * the broadcast variables are registered
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ENetworkScriptState}  
 */
export function networkGetScriptStatus(): ENetworkScriptState {
	const networkGetScriptStatus_result = Citizen.invokeNative<ENetworkScriptState>('0xDFF16B5B12604EFF', );
	return networkGetScriptStatus_result;
}