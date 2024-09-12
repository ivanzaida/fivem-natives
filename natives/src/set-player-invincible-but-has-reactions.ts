import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_INVINCIBLE_BUT_HAS_REACTIONS
 *
 * 0x6C4F5AA91D39455C

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} invincible
 */
export function setPlayerInvincibleButHasReactions(player: PlayerIndex, invincible: boolean): void {
	const setPlayerInvincibleButHasReactions_result = Citizen.invokeNative<void>('0x6C4F5AA91D39455C', player, invincible);
	return setPlayerInvincibleButHasReactions_result;
}