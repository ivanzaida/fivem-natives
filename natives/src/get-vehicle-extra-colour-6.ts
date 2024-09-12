import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_EXTRA_COLOUR_6
 *
 * 0x4C5611B5008205EB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} outExtraCarColour6 [Ref]
 */
export function getVehicleExtraColour_6(vehicle: VehicleIndex, outExtraCarColour6: IntRef /* ptr */): void {
	const getVehicleExtraColour_6_result = Citizen.invokeNative<void>('0x4C5611B5008205EB', vehicle, outExtraCarColour6.dataView);
	return getVehicleExtraColour_6_result;
}