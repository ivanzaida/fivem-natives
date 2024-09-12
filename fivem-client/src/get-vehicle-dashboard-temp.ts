/**
 * CFX:GET_VEHICLE_DASHBOARD_TEMP
 *
 * 0x6B6ADAFA

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardTemp(): number {
	const getVehicleDashboardTemp_result = Citizen.invokeNative<number>('0x6B6ADAFA', );
	return getVehicleDashboardTemp_result;
}