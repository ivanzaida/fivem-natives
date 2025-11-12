import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:CLEAR_BIT
 *
 * 0x8744D2E3FC95740E

 * 
 * This sets bit [offset] of [address] to off.
 * 
 * Example:
 * MISC::CLEAR_BIT(&bitAddress, 1);
 * 
 * To check if this bit has been enabled:
 * MISC::IS_BIT_SET(bitAddress, 1); // will return 0 afterwards
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} variable [Ref]
 * @param {number} bit
 */
export function clearBit(variable: IntRef /* ptr */, bit: number): void {
	const clearBit_result = Citizen.invokeNative<void>('0x8744D2E3FC95740E', variable.dataView, bit);
	return clearBit_result;
}