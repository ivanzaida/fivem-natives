import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_CLOTH_PIN_FRAMES
 *
 * 0xE00868707690F6A7

 * 
 * Set pin frames on peds character cloth
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} pinFrames
 */
export function setPlayerClothPinFrames(player: PlayerIndex, pinFrames: number): void {
	const setPlayerClothPinFrames_result = Citizen.invokeNative<void>('0xE00868707690F6A7', player, pinFrames);
	return setPlayerClothPinFrames_result;
}