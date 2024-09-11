import { PedIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_TV_PLAYER_WATCHING_THIS_FRAME
 *
 * 0xAFD4869CC7EDDF08

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} player
 */
export function setTvPlayerWatchingThisFrame(player: PedIndex): void {
	const setTvPlayerWatchingThisFrame_result = Citizen.invokeNative<void>('0xAFD4869CC7EDDF08', player);
	return setTvPlayerWatchingThisFrame_result;
}