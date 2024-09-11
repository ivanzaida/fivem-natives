import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_EXTRA_COLOURS
 *
 * 0x741D9B0685E67684

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} outExtraCarColour1 [Ref]
 * @param {IntRef} outExtraCarColour2 [Ref]
 */
export function getVehicleExtraColours(vehicle: VehicleIndex, outExtraCarColour1: IntRef /* ptr */, outExtraCarColour2: IntRef /* ptr */): void {
	const getVehicleExtraColours_result = Citizen.invokeNative<void>('0x741D9B0685E67684', vehicle, outExtraCarColour1.dataView, outExtraCarColour2.dataView);
	return getVehicleExtraColours_result;
}