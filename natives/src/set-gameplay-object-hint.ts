import { ObjectIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_OBJECT_HINT
 *
 * 0x95AFFEA5EB27D2B9

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} obejct
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {boolean} relativeOffset The offset is relative to the entity.
 * @param {number} dwellTime How long cam looks at the entity.
 * @param {number} interpTo How long the interp to the hint is
 * @param {number} interpFrom
 */
export function setGameplayObjectHint(obejct: ObjectIndex, offsetX: number, offsetY: number, offsetZ: number, relativeOffset: boolean = true, dwellTime: number = 2000, interpTo: number = 2000, interpFrom: number = 2000): void {
	const setGameplayObjectHint_result = Citizen.invokeNative<void>('0x95AFFEA5EB27D2B9', obejct, offsetX, offsetY, offsetZ, relativeOffset, dwellTime, interpTo, interpFrom);
	return setGameplayObjectHint_result;
}