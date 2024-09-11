import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_GLOBAL_POSITION_OFFSET_FOR_RECORDED_VEHICLE_PLAYBACK
 *
 * 0x55498986DC9E53BB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 */
export function setGlobalPositionOffsetForRecordedVehiclePlayback(vehicle: VehicleIndex, offsetX: number, offsetY: number, offsetZ: number): void {
	const setGlobalPositionOffsetForRecordedVehiclePlayback_result = Citizen.invokeNative<void>('0x55498986DC9E53BB', vehicle, offsetX, offsetY, offsetZ);
	return setGlobalPositionOffsetForRecordedVehiclePlayback_result;
}