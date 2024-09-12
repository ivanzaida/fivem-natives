import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_EXTRA_COLOUR_5
 *
 * 0xE10BD9712D7B0CBF

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} outExtraCarColour5 [Ref]
 */
export function getVehicleExtraColour_5(vehicle: VehicleIndex, outExtraCarColour5: IntRef /* ptr */): void {
	const getVehicleExtraColour_5_result = Citizen.invokeNative<void>('0xE10BD9712D7B0CBF', vehicle, outExtraCarColour5.dataView);
	return getVehicleExtraColour_5_result;
}