/**
 * PED:SET_SCRIPTED_CONVERSION_COORD_THIS_FRAME
 *
 * 0x2A5514EA88DA4DC4

 * 
 * ------------------------------------------------------------------
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} centreZ
 */
export function setScriptedConversionCoordThisFrame(centreX: number, centreY: number, centreZ: number): void {
	const setScriptedConversionCoordThisFrame_result = Citizen.invokeNative<void>('0x2A5514EA88DA4DC4', centreX, centreY, centreZ);
	return setScriptedConversionCoordThisFrame_result;
}