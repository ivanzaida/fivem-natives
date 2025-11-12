import { VehicleIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYERS_LAST_VEHICLE
 *
 * 0xDC8D5832207C2EAD

 * 
 * if  the player is currently in a vehicle that vehicle will be returned.
 * If the player has not been in a vehicle yet or it somehow got destroyed/removed the value returned will be NULL.
 * 
 * Alternative: GET_VEHICLE_PED_IS_IN(PLAYER_PED_ID(), 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {VehicleIndex}  
 */
export function getPlayersLastVehicle(): VehicleIndex {
	const getPlayersLastVehicle_result = Citizen.invokeNative<VehicleIndex>('0xDC8D5832207C2EAD', );
	return getPlayersLastVehicle_result;
}