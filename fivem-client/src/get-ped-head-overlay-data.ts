import { PedIndex, IntRef, FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_HEAD_OVERLAY_DATA
 *
 * 0xC46EE605

 * A getter for [SET_PED_HEAD_OVERLAY](#_0x48F44967FA05CC1E) and [_SET_PED_HEAD_OVERLAY_COLOR](#_0x497BF74A7B9CB952) natives.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} index Overlay index
 * @param {IntRef} overlayValue Overlay value pointer [Ref]
 * @param {IntRef} colourType Colour type pointer [Ref]
 * @param {IntRef} firstColour First colour pointer [Ref]
 * @param {IntRef} secondColour Second colour pointer [Ref]
 * @param {FloatRef} overlayOpacity Opacity pointer [Ref]
 * @returns {boolean}  Returns ped's head overlay data.
 */
export function getPedHeadOverlayData(ped: PedIndex, index: number, overlayValue: IntRef /* ptr */, colourType: IntRef /* ptr */, firstColour: IntRef /* ptr */, secondColour: IntRef /* ptr */, overlayOpacity: FloatRef /* ptr */): boolean {
	const getPedHeadOverlayData_result = Citizen.invokeNative<boolean>('0xC46EE605', ped, index, overlayValue.dataView, colourType.dataView, firstColour.dataView, secondColour.dataView, overlayOpacity.dataView);
	return getPedHeadOverlayData_result;
}