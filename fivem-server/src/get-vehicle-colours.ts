import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_COLOURS
 *
 * 0x40D82D88

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} colorPrimary [Ref]
 * @param {IntRef} colorSecondary [Ref]
 */
export function getVehicleColours(vehicle: VehicleIndex, colorPrimary: IntRef /* ptr */, colorSecondary: IntRef /* ptr */): void {
	const getVehicleColours_result = Citizen.invokeNative<void>('0x40D82D88', vehicle, colorPrimary.dataView, colorSecondary.dataView);
	return getVehicleColours_result;
}