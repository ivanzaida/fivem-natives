import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX
 *
 * 0xA4C157F5AAD56833

 * 
 * This function sets the tint index of the reserve parachute for the player
 * 
 * Tints:
 *    None = -1,
 *     Rainbow = 0,
 *   Red = 1,
 *   SeasideStripes = 2,
 *    WidowMaker = 3,
 *    Patriot = 4,
 *   Blue = 5,
 *  Black = 6,
 *     Hornet = 7,
 *    AirFocce = 8,
 *  Desert = 9,
 *    Shadow = 10,
 *   HighAltitude = 11,
 *     Airbone = 12,
 *  Sunrise = 13,
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} tint
 */
export function setPlayerReserveParachuteTintIndex(player: PlayerIndex, tint: number): void {
	const setPlayerReserveParachuteTintIndex_result = Citizen.invokeNative<void>('0xA4C157F5AAD56833', player, tint);
	return setPlayerReserveParachuteTintIndex_result;
}