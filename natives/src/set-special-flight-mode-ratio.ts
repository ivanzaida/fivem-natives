import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SPECIAL_FLIGHT_MODE_RATIO
 *
 * 0xE70F79BDFCB8B4BC

 * 
 * Used in conjunction with SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO, in Rockstar's scripts. Using this will instantly transform the vehicle into hover mode starting from the given ratio (ranging from 0.0 to 1.0, values greater than 1.0 will put the vehicle into a glitched state.) If this is not used alongside SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO, the vehicle will automatically transform back into car mode.
 * 
 * Usable only with the deluxo and other vehicles with deluxo-like hover mode toggle, modded or otherwise. Does nothing when used on oppressor2.
 * 
 * Example:
 * Ped playerPed = PLAYER::PLAYER_PED_ID();
 * Vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);
 * VEHICLE::SET_SPECIAL_FLIGHT_MODE_RATIO(veh, 0.7f);
 * VEHICLE::SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO(veh, 1.0f);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} ratio
 */
export function setSpecialFlightModeRatio(vehicle: VehicleIndex, ratio: number): void {
	const setSpecialFlightModeRatio_result = Citizen.invokeNative<void>('0xE70F79BDFCB8B4BC', vehicle, ratio);
	return setSpecialFlightModeRatio_result;
}