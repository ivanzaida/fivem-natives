import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DASHBOARD_SPEED
 *
 * 0X9AAD420E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleDashboardSpeed(vehicle: VehicleIndex): number {
	const getVehicleDashboardSpeed_result = Citizen.invokeNative<number>('0X9AAD420E', vehicle);
	return getVehicleDashboardSpeed_result;
}