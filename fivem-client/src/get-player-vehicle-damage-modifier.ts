import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_VEHICLE_DAMAGE_MODIFIER
 *
 * 0X78F27B1F

 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#_0xA50E117CDDF82F0C).
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player vehicle damage modifier.
 */
export function getPlayerVehicleDamageModifier(playerId: PlayerIndex): number {
	const getPlayerVehicleDamageModifier_result = Citizen.invokeNative<number>('0X78F27B1F', playerId);
	return getPlayerVehicleDamageModifier_result;
}