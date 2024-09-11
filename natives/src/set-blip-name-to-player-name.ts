import { BlipIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_NAME_TO_PLAYER_NAME
 *
 * 0x4C8213F2F1BE87F7

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {PlayerIndex} player
 */
export function setBlipNameToPlayerName(blip: BlipIndex, player: PlayerIndex): void {
	const setBlipNameToPlayerName_result = Citizen.invokeNative<void>('0x4C8213F2F1BE87F7', blip, player);
	return setBlipNameToPlayerName_result;
}