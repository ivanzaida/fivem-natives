/**
 * CFX:GET_VEHICLE_DASHBOARD_CURRENT_GEAR
 *
 * 0x435C86F4

 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 * 
 * ------------------------------------------------------------------
 * @returns {number}  The current gear.
 */
export function getVehicleDashboardCurrentGear(): number {
	const getVehicleDashboardCurrentGear_result = Citizen.invokeNative<number>('0x435C86F4', );
	return getVehicleDashboardCurrentGear_result;
}