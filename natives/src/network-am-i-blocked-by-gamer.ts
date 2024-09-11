import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_AM_I_BLOCKED_BY_GAMER
 *
 * 0x48888A41791BFEF1

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkAmIBlockedByGamer(gamer: GamerHandle /* ptr */): boolean {
	const networkAmIBlockedByGamer_result = Citizen.invokeNative<boolean>('0x48888A41791BFEF1', gamer.dataView);
	return networkAmIBlockedByGamer_result;
}