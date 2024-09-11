import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_CUSTOM_ARENA_BALL_PARAMS
 *
 * 0xDB3FE51DA96E8CCA

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 */
export function networkSetCustomArenaBallParams(networkId: NetworkIndex): void {
	const networkSetCustomArenaBallParams_result = Citizen.invokeNative<void>('0xDB3FE51DA96E8CCA', networkId);
	return networkSetCustomArenaBallParams_result;
}