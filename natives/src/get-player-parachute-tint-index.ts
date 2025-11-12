import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_PARACHUTE_TINT_INDEX
 *
 * 0x6A3837CF4CF46A9D

 * 
 * This function gets the tint index of the parachute for the player
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
export function getPlayerParachuteTintIndex(player: PlayerIndex, tint: IntRef /* ptr */): void {
	const getPlayerParachuteTintIndex_result = Citizen.invokeNative<void>('0x6A3837CF4CF46A9D', player, tint.dataView);
	return getPlayerParachuteTintIndex_result;
}