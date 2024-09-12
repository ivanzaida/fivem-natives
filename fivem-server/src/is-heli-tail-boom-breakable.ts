import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_HELI_TAIL_BOOM_BREAKABLE
 *
 * 0X23E46BD7

 * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#_0x3EC8BF18AA453FE9)
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {boolean}  Returns `true` if the helicopter's tail boom can break, `false` if it cannot.
 */
export function isHeliTailBoomBreakable(heli: VehicleIndex): boolean {
	const isHeliTailBoomBreakable_result = Citizen.invokeNative<boolean>('0X23E46BD7', heli);
	return isHeliTailBoomBreakable_result;
}