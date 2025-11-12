import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:SET_CONTROL_SHAKE_SUPPRESSED_ID
 *
 * 0xE0CC4855A08C0666

 * 
 * Suppresses vibrations on a given control's pad when id set to other than -1, clear on -1
 * or call CLEAR_CONTROL_SHAKE_SUPPRESSED_ID.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {number} supressId
 */
export function setControlShakeSuppressedId(control: EControlType | number, supressId: number): void {
	const setControlShakeSuppressedId_result = Citizen.invokeNative<void>('0xE0CC4855A08C0666', control, supressId);
	return setControlShakeSuppressedId_result;
}