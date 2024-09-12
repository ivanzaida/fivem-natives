/**
 * CFX:GET_VEHICLE_DASHBOARD_OIL_TEMP
 *
 * 0x1F5996AA

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardOilTemp(): number {
	const getVehicleDashboardOilTemp_result = Citizen.invokeNative<number>('0x1F5996AA', );
	return getVehicleDashboardOilTemp_result;
}