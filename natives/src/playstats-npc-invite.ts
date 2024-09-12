import { StringRef } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_NPC_INVITE
 *
 * 0x7BF080B6E9DA59BA

 * 
 * ------------------------------------------------------------------
 * @param {StringRef} npcNameIdentifier [Ref]
 */
export function playstatsNpcInvite(npcNameIdentifier: StringRef /* ptr */): void {
	const playstatsNpcInvite_result = Citizen.invokeNative<void>('0x7BF080B6E9DA59BA', npcNameIdentifier.dataView);
	return playstatsNpcInvite_result;
}