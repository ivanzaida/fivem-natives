/**
 * CFX:GET_VEHICLE_DASHBOARD_BOOST
 *
 * 0xDFFABA2A

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardBoost(): number {
	const getVehicleDashboardBoost_result = Citizen.invokeNative<number>('0xDFFABA2A', );
	return getVehicleDashboardBoost_result;
}