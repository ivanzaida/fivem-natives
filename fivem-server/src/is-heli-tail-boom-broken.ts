import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_HELI_TAIL_BOOM_BROKEN
 *
 * 0X2C59F987

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {boolean}  Returns `true` if the helicopter's tail boom is broken, `false` if it is intact.
 */
export function isHeliTailBoomBroken(heli: VehicleIndex): boolean {
	const isHeliTailBoomBroken_result = Citizen.invokeNative<boolean>('0X2C59F987', heli);
	return isHeliTailBoomBroken_result;
}