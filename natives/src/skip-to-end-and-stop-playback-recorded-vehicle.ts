import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SKIP_TO_END_AND_STOP_PLAYBACK_RECORDED_VEHICLE
 *
 * 0x948DDF2EBE37571B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function skipToEndAndStopPlaybackRecordedVehicle(vehicle: VehicleIndex): void {
	const skipToEndAndStopPlaybackRecordedVehicle_result = Citizen.invokeNative<void>('0x948DDF2EBE37571B', vehicle);
	return skipToEndAndStopPlaybackRecordedVehicle_result;
}