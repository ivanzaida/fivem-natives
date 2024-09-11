import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_POS
 *
 * 0x2936060DABE3BC7C

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetPos(keyHash: EStatsenum | number, x: number, y: number, z: number, coderAssert: boolean = true): boolean {
	const statSetPos_result = Citizen.invokeNative<boolean>('0x2936060DABE3BC7C', keyHash, x, y, z, coderAssert);
	return statSetPos_result;
}