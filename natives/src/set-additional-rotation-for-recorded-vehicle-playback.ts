import { VehicleIndex, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_ADDITIONAL_ROTATION_FOR_RECORDED_VEHICLE_PLAYBACK
 *
 * 0x3245F0B28999D460

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} rotationX
 * @param {number} rotationY
 * @param {number} rotationZ
 * @param {EEulerRotOrder} rotOrder Defines the rotation order to use when composing a rotation matrix from Euler angles, defaults to YXZ order, which will be appropriate for almost all uses.
 */
export function setAdditionalRotationForRecordedVehiclePlayback(vehicle: VehicleIndex, rotationX: number, rotationY: number, rotationZ: number, rotOrder: EEulerRotOrder | number = 2): void {
	const setAdditionalRotationForRecordedVehiclePlayback_result = Citizen.invokeNative<void>('0x3245F0B28999D460', vehicle, rotationX, rotationY, rotationZ, rotOrder);
	return setAdditionalRotationForRecordedVehiclePlayback_result;
}