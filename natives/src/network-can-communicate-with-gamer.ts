import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_COMMUNICATE_WITH_GAMER
 *
 * 0xC9D8BDF3564325CA

 * 
 * Communication checks with a gamer handle
 * NETWORK_CAN_COMMUNICATE_WITH_GAMER encompasses all. Use this in
 * script to determine whether we should show the voice icon or not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkCanCommunicateWithGamer(gamer: GamerHandle /* ptr */): boolean {
	const networkCanCommunicateWithGamer_result = Citizen.invokeNative<boolean>('0xC9D8BDF3564325CA', gamer.dataView);
	return networkCanCommunicateWithGamer_result;
}