import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MONEY
 *
 * 0x886FA295C1257AAA

 * 
 * Maximum possible amount of money on MP is 2000. ~JX
 * 
 * -----------------------------------------------------------------------------
 * 
 * Maximum amount that a ped can theoretically have is 65535 (0xFFFF) since the amount is stored as an unsigned short (uint16_t) value.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} moneyToSet
 */
export function setPedMoney(ped: PedIndex, moneyToSet: number): void {
	const setPedMoney_result = Citizen.invokeNative<void>('0x886FA295C1257AAA', ped, moneyToSet);
	return setPedMoney_result;
}