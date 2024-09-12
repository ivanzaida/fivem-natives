/**
 * CFX:GET_VEHICLE_DASHBOARD_FUEL
 *
 * 0x19B0B2CE

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardFuel(): number {
	const getVehicleDashboardFuel_result = Citizen.invokeNative<number>('0x19B0B2CE', );
	return getVehicleDashboardFuel_result;
}