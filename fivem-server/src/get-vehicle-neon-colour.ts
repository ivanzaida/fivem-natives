import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_NEON_COLOUR
 *
 * 0xD9319DCB

 * 
 * Gets the color of the neon lights of the specified vehicle.
 * 
 * See SET_VEHICLE_NEON_COLOUR (0x8E0A582209A62695) for more information
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to check.
 * @param {IntRef} red Pointer to an integer where the red component of the neon color will be stored. [Ref]
 * @param {IntRef} green Pointer to an integer where the green component of the neon color will be stored. [Ref]
 * @param {IntRef} blue Pointer to an integer where the blue component of the neon color will be stored. [Ref]
 */
export function getVehicleNeonColour(vehicle: VehicleIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getVehicleNeonColour_result = Citizen.invokeNative<void>('0xD9319DCB', vehicle, red.dataView, green.dataView, blue.dataView);
	return getVehicleNeonColour_result;
}