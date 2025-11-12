import { StringRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_TEXT_LABEL_31_TO_SAVE
 *
 * 0x2CEFD365B46A1DBE

 * 
 * Only found 2 times in decompiled scripts.
 * 
 * MISC::REGISTER_TEXT_LABEL_31_TO_SAVE(&a_0._f1F5A._f6[0/8/], "TEMPSTAT_LABEL"); // gets saved in a struct called "g_SaveData_STRING_ScriptSaves"
 * MISC::REGISTER_TEXT_LABEL_31_TO_SAVE(&a_0._f4B4[v_1A/8/], &v_5); // where v_5 is "Name0" thru "Name9", gets saved in a struct called "OUTFIT_Name"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {StringRef} textLabelToSave [Ref]
 * @param {string} label
 */
export function registerTextLabel_31ToSave(textLabelToSave: StringRef /* ptr */, label: string): void {
	const registerTextLabel_31ToSave_result = Citizen.invokeNative<void>('0x2CEFD365B46A1DBE', textLabelToSave.dataView, label);
	return registerTextLabel_31ToSave_result;
}