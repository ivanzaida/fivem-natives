import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE
 *
 * 0x8BCD7C11D27FB9A1

 * 
 * SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} timeSkip
 */
export function skipTimeInPlaybackRecordedVehicle(vehicle: VehicleIndex, timeSkip: number): void {
	const skipTimeInPlaybackRecordedVehicle_result = Citizen.invokeNative<void>('0x8BCD7C11D27FB9A1', vehicle, timeSkip);
	return skipTimeInPlaybackRecordedVehicle_result;
}