import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_INCREMENT
 *
 * 0x3CAC0DB32E69B1B8

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} value
 */
export function statIncrement(keyHash: EStatsenum | number, value: number): void {
	const statIncrement_result = Citizen.invokeNative<void>('0x3CAC0DB32E69B1B8', keyHash, value);
	return statIncrement_result;
}