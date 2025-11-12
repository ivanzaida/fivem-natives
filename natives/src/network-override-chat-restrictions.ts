import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_OVERRIDE_CHAT_RESTRICTIONS
 *
 * 0x38C14A8B378CBD7B

 * 
 * Could possibly bypass being muted or automatically muted
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} override
 */
export function networkOverrideChatRestrictions(player: PlayerIndex, override: boolean): void {
	const networkOverrideChatRestrictions_result = Citizen.invokeNative<void>('0x38C14A8B378CBD7B', player, override);
	return networkOverrideChatRestrictions_result;
}