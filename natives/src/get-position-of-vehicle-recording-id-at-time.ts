import { RecordingId, Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_POSITION_OF_VEHICLE_RECORDING_ID_AT_TIME
 *
 * 0x763EEC52E292B5A0

 * 
 * Allows access to the translation of the vehicle in a recording at a given point in time
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RecordingId} index
 * @param {number} time
 * @returns {Vector3}  
 */
export function getPositionOfVehicleRecordingIdAtTime(index: RecordingId, time: number): Vector3 {
	const getPositionOfVehicleRecordingIdAtTime_result = Citizen.invokeNative<Vector3>('0x763EEC52E292B5A0', index, time);
	return getPositionOfVehicleRecordingIdAtTime_result;
}