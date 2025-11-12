import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_NEON_COLOUR
 *
 * 0x64FEACF0AD019F1F

 * 
 * Gets the color of the neon lights of the specified vehicle.
 * 
 * See SET_VEHICLE_NEON_COLOUR (0x8E0A582209A62695) for more information
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getVehicleNeonColour(vehicle: VehicleIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getVehicleNeonColour_result = Citizen.invokeNative<void>('0x64FEACF0AD019F1F', vehicle, red.dataView, green.dataView, blue.dataView);
	return getVehicleNeonColour_result;
}