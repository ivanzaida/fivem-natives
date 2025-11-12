/**
 * PAD:IS_MOUSE_LOOK_INVERTED
 *
 * 0xDD087A873D2E08F0

 * 
 * Will return false for platforms that do not support the mouse. This does not mean the player is playing with a
 * mouse, they could be playing on a gamepad.
 * 
 * Used with IS_LOOK_INVERTED() and negates its affect.
 * 
 * --
 * 
 * Not sure how the person above got that description, but here's an actual example:
 * 
 * if (PAD::IS_USING_KEYBOARD_AND_MOUSE(2)) {
 *     if (a_5) {
 *         if (PAD::IS_LOOK_INVERTED()) {
 *             a_3 = -1;
 *         }
 *         if (PAD::IS_MOUSE_LOOK_INVERTED()) {
 *             a_3 = -1;
 *         }
 *     }
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMouseLookInverted(): boolean {
	const isMouseLookInverted_result = Citizen.invokeNative<boolean>('0xDD087A873D2E08F0', );
	return isMouseLookInverted_result;
}