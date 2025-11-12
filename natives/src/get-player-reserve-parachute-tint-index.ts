import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX
 *
 * 0x9A6FA1C41236F7D3

 * 
 * This function gets the tint index of the reserve parachute for the player
 * 
 * Tints:
 *   None = -1,
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
 * @param {IntRef} tint [Ref]
 */
export function getPlayerReserveParachuteTintIndex(player: PlayerIndex, tint: IntRef /* ptr */): void {
	const getPlayerReserveParachuteTintIndex_result = Citizen.invokeNative<void>('0x9A6FA1C41236F7D3', player, tint.dataView);
	return getPlayerReserveParachuteTintIndex_result;
}