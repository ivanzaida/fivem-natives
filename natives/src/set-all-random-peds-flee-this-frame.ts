import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
 *
 * 0x9C931A1395CC1AE9

 * 
 * Gang peds and randoms will all flee instead on this frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function setAllRandomPedsFleeThisFrame(player: PlayerIndex): void {
	const setAllRandomPedsFleeThisFrame_result = Citizen.invokeNative<void>('0x9C931A1395CC1AE9', player);
	return setAllRandomPedsFleeThisFrame_result;
}