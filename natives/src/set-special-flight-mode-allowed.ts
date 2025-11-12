import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SPECIAL_FLIGHT_MODE_ALLOWED
 *
 * 0x16EB4EEDAA5416C4

 * 
 * It will override the ability to transform deluxo. For oppressor it will work just like SET_DISABLE_HOVER_MODE_FLIGHT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} specialFlightAllowed
 */
export function setSpecialFlightModeAllowed(vehicle: VehicleIndex, specialFlightAllowed: boolean): void {
	const setSpecialFlightModeAllowed_result = Citizen.invokeNative<void>('0x16EB4EEDAA5416C4', vehicle, specialFlightAllowed);
	return setSpecialFlightModeAllowed_result;
}