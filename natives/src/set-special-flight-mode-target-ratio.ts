import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SPECIAL_FLIGHT_MODE_TARGET_RATIO
 *
 * 0x7F3C8FDDAE1D6311

 * 
 * Used in conjunction with SET_SPECIAL_FLIGHT_MODE_RATIO, in Rockstar's scripts. The vehicle will transform into the given targetRatio, starting from the vehicle's current hover mode transform ratio (which can also be manually set by SET_SPECIAL_FLIGHT_MODE_RATIO,) i.e. setting targetRatio to 0.0 while the vehicle is in hover mode will transform the vehicle into car mode, likewise setting targetRatio to 1.0 while the vehicle is in car mode will transform the vehicle into hover mode, and if the current transform ratio is set to 0.7 while targetRatio is 1.0 the vehicle will transform into hover mode starting from being already partially transformed.
 * 
 * targetRatio is recommended to always be 0.0 or 1.0, otherwise the vehicle will transform into a glitched state.
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
export function setSpecialFlightModeTargetRatio(vehicle: VehicleIndex, ratio: number): void {
	const setSpecialFlightModeTargetRatio_result = Citizen.invokeNative<void>('0x7F3C8FDDAE1D6311', vehicle, ratio);
	return setSpecialFlightModeTargetRatio_result;
}