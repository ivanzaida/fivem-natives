import { StringRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_TEXT_LABEL_63_TO_SAVE
 *
 * 0xC05BEBBC3D252F8C

 * 
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(a_0, "Thumb_label");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f10, "Photo_label");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(a_0, "GXTlabel");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f21, "StringComp");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f43, "SecondStringComp");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f53, "ThirdStringComp");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f32, "SenderStringComp");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f726[v_1A/16/], &v_20); // where v_20 is "LastJobTL_0_1" thru "LastJobTL_2_1", gets saved in a struct called "LAST_JobGamer_TL"
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f4B, "PAID_PLAYER");
 * MISC::REGISTER_TEXT_LABEL_63_TO_SAVE(&a_0._f5B, "RADIO_STATION");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {StringRef} textLabelToSave [Ref]
 * @param {string} label
 */
export function registerTextLabel_63ToSave(textLabelToSave: StringRef /* ptr */, label: string): void {
	const registerTextLabel_63ToSave_result = Citizen.invokeNative<void>('0xC05BEBBC3D252F8C', textLabelToSave.dataView, label);
	return registerTextLabel_63ToSave_result;
}