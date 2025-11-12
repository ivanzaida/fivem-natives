import { EntityIndex, EHintType } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_ENTITY_HINT
 *
 * 0x190BA0A3BB48F7FD

 * 
 * p8 could be some sort of flag. Scripts use:
 * -244429742
 * 0
 * 1726668277
 * 1844968929
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} enttity
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {boolean} relativeOffset The offset is relative to the entity.
 * @param {number} dwellTime How long cam looks at the entity.
 * @param {number} interpTo How long the interp to the hint is
 * @param {number} interpFrom
 * @param {EHintType} type
 */
export function setGameplayEntityHint(enttity: EntityIndex, offsetX: number, offsetY: number, offsetZ: number, relativeOffset: boolean = true, dwellTime: number = 2000, interpTo: number = 2000, interpFrom: number = 2000, type: EHintType | number = 0): void {
	const setGameplayEntityHint_result = Citizen.invokeNative<void>('0x190BA0A3BB48F7FD', enttity, offsetX, offsetY, offsetZ, relativeOffset, dwellTime, interpTo, interpFrom, type);
	return setGameplayEntityHint_result;
}