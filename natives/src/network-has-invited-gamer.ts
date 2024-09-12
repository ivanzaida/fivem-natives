import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_INVITED_GAMER
 *
 * 0x0E58BC7A6579889B

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkHasInvitedGamer(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkHasInvitedGamer_result = Citizen.invokeNative<boolean>('0x0E58BC7A6579889B', gamerHandle.dataView);
	return networkHasInvitedGamer_result;
}