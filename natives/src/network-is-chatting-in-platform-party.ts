import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_CHATTING_IN_PLATFORM_PARTY
 *
 * 0x8510A5D786F703DC

 * 
 * This would be nice to see if someone is in party chat, but 2 sad notes.
 * 1) It only becomes true if said person is speaking in that party at the time.
 * 2) It will never, become true unless you are in that party with said person.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsChattingInPlatformParty(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsChattingInPlatformParty_result = Citizen.invokeNative<boolean>('0x8510A5D786F703DC', gamerHandle.dataView);
	return networkIsChattingInPlatformParty_result;
}