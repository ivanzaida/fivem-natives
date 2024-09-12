/**
 * CFX:GET_VEHICLE_DASHBOARD_RPM
 *
 * 0XF9716A11

 * 
 * ------------------------------------------------------------------
 * @returns {number}  float 0 to ~1.1 representing the angle of the rpm gauge on the player's vehicle dashboard
 */
export function getVehicleDashboardRpm(): number {
	const getVehicleDashboardRpm_result = Citizen.invokeNative<number>('0XF9716A11', );
	return getVehicleDashboardRpm_result;
}