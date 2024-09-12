/**
 * VEHICLE:_GET_VEHICLE_THROTTLE
 *
 * 0x92D96892FC06AF22

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleThrottle(): number {
	const getVehicleThrottle_result = Citizen.invokeNative<number>('0x92D96892FC06AF22', );
	return getVehicleThrottle_result;
}