import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE
 *
 * 0x7BFF320D45B40B56

 * 
 * Force higher air drag mult on any car or bike the player uses until the mission ends or this command is called again with 1.0, fDragMult range 1.0 - 15.0  (5.0 is standard for high air resistance zones on the map)
 * 
 * This can be between 1.0f - 14.9f
 * 
 * You can change the max in IDA from 15.0. I say 15.0 as the function blrs if what you input is greater than or equal to 15.0 hence why it's 14.9 max default.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} dragMult
 */
export function setAirDragMultiplierForPlayersVehicle(player: PlayerIndex, dragMult: number): void {
	const setAirDragMultiplierForPlayersVehicle_result = Citizen.invokeNative<void>('0x7BFF320D45B40B56', player, dragMult);
	return setAirDragMultiplierForPlayersVehicle_result;
}