import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BIKE_EASY_TO_LAND
 *
 * 0x77950FC099D3FB4D

 * 
 * When enabled, the player won't fall off the bike when landing from large heights.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} easyToLand
 */
export function setBikeEasyToLand(vehicle: VehicleIndex, easyToLand: boolean): void {
	const setBikeEasyToLand_result = Citizen.invokeNative<void>('0x77950FC099D3FB4D', vehicle, easyToLand);
	return setBikeEasyToLand_result;
}