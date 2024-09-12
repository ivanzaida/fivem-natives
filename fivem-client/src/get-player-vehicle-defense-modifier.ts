import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_VEHICLE_DEFENSE_MODIFIER
 *
 * 0x8326E7CD

 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#_0x4C60E6EFDAFF2462).
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player vehicle defense modifier.
 */
export function getPlayerVehicleDefenseModifier(playerId: PlayerIndex): number {
	const getPlayerVehicleDefenseModifier_result = Citizen.invokeNative<number>('0x8326E7CD', playerId);
	return getPlayerVehicleDefenseModifier_result;
}