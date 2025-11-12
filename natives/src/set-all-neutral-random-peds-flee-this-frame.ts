import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_ALL_NEUTRAL_RANDOM_PEDS_FLEE_THIS_FRAME
 *
 * 0xCD0F6D8C76DD22A7

 * 
 * Neutral randoms will all flee instead on this frame
 * 
 * - This is called after SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function setAllNeutralRandomPedsFleeThisFrame(player: PlayerIndex): void {
	const setAllNeutralRandomPedsFleeThisFrame_result = Citizen.invokeNative<void>('0xCD0F6D8C76DD22A7', player);
	return setAllNeutralRandomPedsFleeThisFrame_result;
}