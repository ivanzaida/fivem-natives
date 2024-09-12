import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:SET_BITS_IN_RANGE
 *
 * 0xA11116C8E2E46ED4

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} variableToChange [Ref]
 * @param {number} startBit
 * @param {number} endBit
 * @param {number} newValue
 */
export function setBitsInRange(variableToChange: IntRef /* ptr */, startBit: number, endBit: number, newValue: number): void {
	const setBitsInRange_result = Citizen.invokeNative<void>('0xA11116C8E2E46ED4', variableToChange.dataView, startBit, endBit, newValue);
	return setBitsInRange_result;
}