/**
 * NETWORK:IS_NETWORK_VEHICLE_RUNNING_RESPOT_TIMER
 *
 * 0x353A36B4FAA1F9D2

 * 
 * ------------------------------------------------------------------
 * @param {number} networkID
 * @returns {boolean}  
 */
export function isNetworkVehicleRunningRespotTimer(networkID: number): boolean {
	const isNetworkVehicleRunningRespotTimer_result = Citizen.invokeNative<boolean>('0x353A36B4FAA1F9D2', networkID);
	return isNetworkVehicleRunningRespotTimer_result;
}