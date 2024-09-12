import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_PITCH_CONTROL
 *
 * 0X1944AC95

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check.
 * @returns {number}  Returns a value representing the pitch control of the helicopter. The values range from `-1.0` (nose down) to `1.0` (nose up), with `0.0` indicating no pitch input.
 */
export function getHeliPitchControl(heli: VehicleIndex): number {
	const getHeliPitchControl_result = Citizen.invokeNative<number>('0X1944AC95', heli);
	return getHeliPitchControl_result;
}