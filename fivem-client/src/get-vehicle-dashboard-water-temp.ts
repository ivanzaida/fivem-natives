/**
 * CFX:GET_VEHICLE_DASHBOARD_WATER_TEMP
 *
 * 0x8E3B3E42

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardWaterTemp(): number {
	const getVehicleDashboardWaterTemp_result = Citizen.invokeNative<number>('0x8E3B3E42', );
	return getVehicleDashboardWaterTemp_result;
}