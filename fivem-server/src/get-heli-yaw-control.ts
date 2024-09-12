import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_YAW_CONTROL
 *
 * 0x8FDC0768

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check.
 * @returns {number}  Returns a value the yaw control of the helicopter. The value ranges from `-1.0` (yaw left) to `1.0` (yaw right), with `0.0` meaning no yaw input.
 */
export function getHeliYawControl(heli: VehicleIndex): number {
	const getHeliYawControl_result = Citizen.invokeNative<number>('0x8FDC0768', heli);
	return getHeliYawControl_result;
}