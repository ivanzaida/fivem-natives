import { StringRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_TEXT_LABEL_23_TO_SAVE
 *
 * 0x29926EE43ABCE454

 * 
 * Only found 3 times in decompiled scripts.
 * 
 * MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(a_0, "Movie_Name_For_This_Player");
 * MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(&a_0._fB, "Ringtone_For_This_Player");
 * MISC::REGISTER_TEXT_LABEL_23_TO_SAVE(&a_0._f1EC4._f12[v_A/6/], &v_13); // where v_13 is "MPATMLOGSCRS0" thru "MPATMLOGSCRS15"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {StringRef} textLabelToSave [Ref]
 * @param {string} label
 */
export function registerTextLabel_23ToSave(textLabelToSave: StringRef /* ptr */, label: string): void {
	const registerTextLabel_23ToSave_result = Citizen.invokeNative<void>('0x29926EE43ABCE454', textLabelToSave.dataView, label);
	return registerTextLabel_23ToSave_result;
}