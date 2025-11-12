import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:ALLOW_ALTERNATIVE_SCRIPT_CONTROLS_LAYOUT
 *
 * 0xE0EEB603997F273F

 * 
 * This must be called every frame or else the controls revert back to defaults. The INPUT_SCRIPT_controls mimic a PS3/Xbox
 * gamepad, however, the user may change the control layout in the settings. Some mission/script might need to know this.
 * For example, if the INPUT_SCRIPT_controls are being used to control movement and the camera, then the script need to know
 * if the player has selected Southpaw (sticks are swapped) mode. Calling ALLOW_ALTERNATIVE_SCRIPT_CONTROLS_LAYOUT() every frame
 * will calculate this for you so you can carry on using the INPUT_SCRIPT_controls as if they were the standard layout when infact
 * they are actually altered to reflect the user preferences.
 * Some scripts/mission will NOTwant this, for example, Yoga asks the user to move specific sticks. In this case, not calling
 * ALLOW_ALTERNATIVE_SCRIPT_CONTROLS_LAYOUT() will default to use the standard gamepad layout no matter what the user has set their
 * settings to.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 */
export function allowAlternativeScriptControlsLayout(control: EControlType | number): void {
	const allowAlternativeScriptControlsLayout_result = Citizen.invokeNative<void>('0xE0EEB603997F273F', control);
	return allowAlternativeScriptControlsLayout_result;
}