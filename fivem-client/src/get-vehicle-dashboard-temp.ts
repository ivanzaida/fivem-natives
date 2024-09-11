/**
 * CFX:GET_VEHICLE_DASHBOARD_TEMP
 *
 * 0X6B6ADAFA

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardTemp(): number {
	const getVehicleDashboardTemp_result = Citizen.invokeNative<number>('0X6B6ADAFA', );
	return getVehicleDashboardTemp_result;
}