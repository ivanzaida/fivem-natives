import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_ROLL_CONTROL
 *
 * 0x12948DE9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check.
 * @returns {number}  Returns a value representing the roll control of the helicopter. The values range from `-1.0` (roll left) to `1.0` (roll right), with `0.0` indicating no roll input.
 */
export function getHeliRollControl(heli: VehicleIndex): number {
	const getHeliRollControl_result = Citizen.invokeNative<number>('0x12948DE9', heli);
	return getHeliRollControl_result;
}