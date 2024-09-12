import { BoolRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_BOOL_TO_SAVE
 *
 * 0x929D7CE0F2CAD21C

 * 
 * ------------------------------------------------------------------
 * @param {BoolRef} boolToSave [Ref]
 * @param {string} label
 */
export function registerBoolToSave(boolToSave: BoolRef /* ptr */, label: string): void {
	const registerBoolToSave_result = Citizen.invokeNative<void>('0x929D7CE0F2CAD21C', boolToSave.dataView, label);
	return registerBoolToSave_result;
}