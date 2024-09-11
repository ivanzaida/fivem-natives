import { PedIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_PED_HINT
 *
 * 0x388E6B6F47D9ECC1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {boolean} relativeOffset The offset is relative to the entity.
 * @param {number} dwellTime How long cam looks at the entity.
 * @param {number} interpTo How long the interp to the hint is
 * @param {number} interpFrom
 */
export function setGameplayPedHint(ped: PedIndex, offsetX: number, offsetY: number, offsetZ: number, relativeOffset: boolean = true, dwellTime: number = 2000, interpTo: number = 2000, interpFrom: number = 2000): void {
	const setGameplayPedHint_result = Citizen.invokeNative<void>('0x388E6B6F47D9ECC1', ped, offsetX, offsetY, offsetZ, relativeOffset, dwellTime, interpTo, interpFrom);
	return setGameplayPedHint_result;
}