/**
 * CFX:GET_VEHICLE_DASHBOARD_VACUUM
 *
 * 0XFABE67A9

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardVacuum(): number {
	const getVehicleDashboardVacuum_result = Citizen.invokeNative<number>('0XFABE67A9', );
	return getVehicleDashboardVacuum_result;
}