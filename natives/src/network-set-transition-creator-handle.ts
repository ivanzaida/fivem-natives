import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_TRANSITION_CREATOR_HANDLE
 *
 * 0x5B4AC3576C9F22EA

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 */
export function networkSetTransitionCreatorHandle(gamerHandle: GamerHandle /* ptr */): void {
	const networkSetTransitionCreatorHandle_result = Citizen.invokeNative<void>('0x5B4AC3576C9F22EA', gamerHandle.dataView);
	return networkSetTransitionCreatorHandle_result;
}