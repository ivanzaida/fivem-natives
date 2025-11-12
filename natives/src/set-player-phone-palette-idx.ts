import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_PHONE_PALETTE_IDX
 *
 * 0x454108124161B7D7

 * 
 * This function sets the palette index of the player's phone.
 * 
 * example:
 * 
 * flags: 0-6
 * 
 * PLAYER::SET_PLAYER_RESET_FLAG_PREFER_REAR_SEATS(PLAYER::PLAYER_ID(), 6);
 * 
 * wouldnt the flag be the seatIndex?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} index
 */
export function setPlayerPhonePaletteIdx(player: PlayerIndex, index: number): void {
	const setPlayerPhonePaletteIdx_result = Citizen.invokeNative<void>('0x454108124161B7D7', player, index);
	return setPlayerPhonePaletteIdx_result;
}