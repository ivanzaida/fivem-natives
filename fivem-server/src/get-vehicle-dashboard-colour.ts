import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DASHBOARD_COLOUR
 *
 * 0xA0DBD08D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} color [Ref]
 */
export function getVehicleDashboardColour(vehicle: VehicleIndex, color: IntRef /* ptr */): void {
	const getVehicleDashboardColour_result = Citizen.invokeNative<void>('0xA0DBD08D', vehicle, color.dataView);
	return getVehicleDashboardColour_result;
}