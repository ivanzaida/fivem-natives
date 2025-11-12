import { CameraIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_INHERIT_ROLL_VEHICLE
 *
 * 0xE2B6CB928D598CBD

 * 
 * The native seems to only be called once.
 * 
 * The native is used as so,
 * CAM::SET_CAM_INHERIT_ROLL_VEHICLE(l_544, getElem(2, &l_525, 4));
 * In the exile1 script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {VehicleIndex} vehicle
 */
export function setCamInheritRollVehicle(camera: CameraIndex, vehicle: VehicleIndex): void {
	const setCamInheritRollVehicle_result = Citizen.invokeNative<void>('0xE2B6CB928D598CBD', camera, vehicle);
	return setCamInheritRollVehicle_result;
}