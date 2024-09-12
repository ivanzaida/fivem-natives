import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_INT_TO_SAVE
 *
 * 0xA40FAFA53DFF4362

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} intToSave [Ref]
 * @param {string} label
 */
export function registerIntToSave(intToSave: IntRef /* ptr */, label: string): void {
	const registerIntToSave_result = Citizen.invokeNative<void>('0xA40FAFA53DFF4362', intToSave.dataView, label);
	return registerIntToSave_result;
}