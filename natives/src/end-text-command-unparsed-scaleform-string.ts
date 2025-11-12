/**
 * GRAPHICS:END_TEXT_COMMAND_UNPARSED_SCALEFORM_STRING
 *
 * 0xF84BAB6A609E97D4

 * 
 * Same as END_TEXT_COMMAND_SCALEFORM_STRING but does not perform HTML conversion for text tokens.
 * 
 * END_TEXT_COMMAND_VIA_SPECIAL_MODIFIABLE_STRING?
 * 
 * 
 * ------------------------------------------------------------------
 */
export function endTextCommandUnparsedScaleformString(): void {
	const endTextCommandUnparsedScaleformString_result = Citizen.invokeNative<void>('0xF84BAB6A609E97D4', );
	return endTextCommandUnparsedScaleformString_result;
}