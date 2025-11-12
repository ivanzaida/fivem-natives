import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_AUTO_GIVE_PARACHUTE_WHEN_ENTER_PLANE
 *
 * 0xE8B2E2E978035EF0

 * 
 * Set if auto-give the player a parachute when he gets into a plane or helicopter.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} giveParachute
 */
export function setAutoGiveParachuteWhenEnterPlane(player: PlayerIndex, giveParachute: boolean): void {
	const setAutoGiveParachuteWhenEnterPlane_result = Citizen.invokeNative<void>('0xE8B2E2E978035EF0', player, giveParachute);
	return setAutoGiveParachuteWhenEnterPlane_result;
}