import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_STEALTH_PERCEPTION_MODIFIER
 *
 * 0x048D90B19F701DC3

 * 
 * Modify how easy AI can see the player when stealthed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} stealthPerceptionModifier
 */
export function setPlayerStealthPerceptionModifier(player: PlayerIndex, stealthPerceptionModifier: number): void {
	const setPlayerStealthPerceptionModifier_result = Citizen.invokeNative<void>('0x048D90B19F701DC3', player, stealthPerceptionModifier);
	return setPlayerStealthPerceptionModifier_result;
}