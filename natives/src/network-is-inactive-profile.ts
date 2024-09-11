import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_INACTIVE_PROFILE
 *
 * 0x39C0534F522598C0

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsInactiveProfile(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsInactiveProfile_result = Citizen.invokeNative<boolean>('0x39C0534F522598C0', gamerHandle.dataView);
	return networkIsInactiveProfile_result;
}