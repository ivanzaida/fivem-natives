/**
 * GRAPHICS:BEGIN_TEXT_COMMAND_SCALEFORM_STRING
 *
 * 0x882AEFD55B8D51FB

 * 
 * passes a STRING to the method call.  Must be wrapped in a BEGIN & END call but can include other ADD_PARAM calls
 * 
 * Called prior to adding a text component to the UI. After doing so, GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING is called.
 * 
 * Examples:
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("NUMBER");
 * HUD::ADD_TEXT_COMPONENT_INTEGER(MISC::ABSI(a_1));
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * 
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRING");
 * HUD::ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(a_2);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * 
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM2");
 * HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY(v_3);
 * HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY(v_4);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * 
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM1");
 * HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY(v_3);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandScaleformString(mainTextLabel: string): void {
	const beginTextCommandScaleformString_result = Citizen.invokeNative<void>('0x882AEFD55B8D51FB', mainTextLabel);
	return beginTextCommandScaleformString_result;
}