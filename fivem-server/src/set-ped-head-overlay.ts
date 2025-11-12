import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_HEAD_OVERLAY
 *
 * 0xD28DBA90

 * 
 * This function sets an overlay texture on a blended head. The ped index given needs to be an MP ped with a blended head, which means
 * SET_PED_HEAD_BLEND_DATA needs to have already been called on this ped before this function is called.
 * 
 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
 * 
 * overlayID       Part                  Index, to disable
 * 0               Blemishes             0 - 23, 255
 * 1               Facial Hair           0 - 28, 255
 * 2               Eyebrows              0 - 33, 255
 * 3               Ageing                0 - 14, 255
 * 4               Makeup                0 - 74, 255
 * 5               Blush                 0 - 6, 255
 * 6               Complexion            0 - 11, 255
 * 7               Sun Damage            0 - 10, 255
 * 8               Lipstick              0 - 9, 255
 * 9               Moles/Freckles        0 - 17, 255
 * 10              Chest Hair            0 - 16, 255
 * 11              Body Blemishes        0 - 11, 255
 * 12              Add Body Blemishes    0 - 1, 255
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped entity
 * @param {number} overlayID The overlay id displayed up above.
 * @param {number} index An integer representing the index (from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)1)
 * @param {number} opacity A float ranging from 0.0 to 1.0
 */
export function setPedHeadOverlay(ped: PedIndex, overlayID: number, index: number, opacity: number): void {
	const setPedHeadOverlay_result = Citizen.invokeNative<void>('0xD28DBA90', ped, overlayID, index, opacity);
	return setPedHeadOverlay_result;
}