import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CUSTOM_SECONDARY_COLOUR
 *
 * 0x04434FA56DED5500

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getVehicleCustomSecondaryColour(vehicle: VehicleIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getVehicleCustomSecondaryColour_result = Citizen.invokeNative<void>('0x04434FA56DED5500', vehicle, red.dataView, green.dataView, blue.dataView);
	return getVehicleCustomSecondaryColour_result;
}