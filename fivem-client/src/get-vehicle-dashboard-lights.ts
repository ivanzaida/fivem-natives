/**
 * CFX:GET_VEHICLE_DASHBOARD_LIGHTS
 *
 * 0X500FFE9D

 * Gets the state of the player vehicle's dashboard lights as a bit setindicator_left = 1indicator_right = 2handbrakeLight = 4engineLight = 8ABSLight = 16gasLight = 32oilLight = 64headlights = 128highBeam = 256batteryLight = 512
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDashboardLights(): number {
	const getVehicleDashboardLights_result = Citizen.invokeNative<number>('0X500FFE9D', );
	return getVehicleDashboardLights_result;
}