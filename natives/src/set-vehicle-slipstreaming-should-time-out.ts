/**
 * VEHICLE:SET_VEHICLE_SLIPSTREAMING_SHOULD_TIME_OUT
 *
 * 0xF5DE2508EEBD1684

 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldTimeout
 */
export function setVehicleSlipstreamingShouldTimeOut(shouldTimeout: boolean): void {
	const setVehicleSlipstreamingShouldTimeOut_result = Citizen.invokeNative<void>('0xF5DE2508EEBD1684', shouldTimeout);
	return setVehicleSlipstreamingShouldTimeOut_result;
}