import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:SET_BIT
 *
 * 0x0B0C9A0F9AAEB7F0

 * 
 * This sets bit [offset] of [address] to on.
 * 
 * The offsets used are different bits to be toggled on and off, typically there is only one address used in a script.
 * 
 * Example:
 * MISC::SET_BIT(&bitAddress, 1);
 * 
 * To check if this bit has been enabled:
 * MISC::IS_BIT_SET(bitAddress, 1); // will return 1 afterwards
 * 
 * Please note, this method may assign a value to [address] when used.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} variable [Ref]
 * @param {number} bit
 */
export function setBit(variable: IntRef /* ptr */, bit: number): void {
	const setBit_result = Citizen.invokeNative<void>('0x0B0C9A0F9AAEB7F0', variable.dataView, bit);
	return setBit_result;
}