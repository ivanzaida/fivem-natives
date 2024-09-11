import { Threadid } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_THREAD_A_NETWORK_SCRIPT
 *
 * 0x98A7AD360A44F01D

 * 
 * ------------------------------------------------------------------
 * @param {Threadid} thread
 * @returns {boolean}  
 */
export function networkIsThreadANetworkScript(thread: Threadid): boolean {
	const networkIsThreadANetworkScript_result = Citizen.invokeNative<boolean>('0x98A7AD360A44F01D', thread);
	return networkIsThreadANetworkScript_result;
}