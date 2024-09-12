/**
 * CFX:GET_VEHICLE_DASHBOARD_OIL_PRESSURE
 *
 * 0x3856D767

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardOilPressure(): number {
	const getVehicleDashboardOilPressure_result = Citizen.invokeNative<number>('0x3856D767', );
	return getVehicleDashboardOilPressure_result;
}