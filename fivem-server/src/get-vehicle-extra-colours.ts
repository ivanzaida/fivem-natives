import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_EXTRA_COLOURS
 *
 * 0x80E4659B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} pearlescentColor [Ref]
 * @param {IntRef} wheelColor [Ref]
 */
export function getVehicleExtraColours(vehicle: VehicleIndex, pearlescentColor: IntRef /* ptr */, wheelColor: IntRef /* ptr */): void {
	const getVehicleExtraColours_result = Citizen.invokeNative<void>('0x80E4659B', vehicle, pearlescentColor.dataView, wheelColor.dataView);
	return getVehicleExtraColours_result;
}