import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:_SET_PED_HEAD_OVERLAY_COLOR
 *
 * 0x78935A27

 * ```Used for freemode (online) characters.Called after SET_PED_HEAD_OVERLAY().```Note:You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.This is the server-side RPC native equivalent of the client native [\_SET\_PED\_HEAD\_OVERLAY\_COLOR](?_0x497BF74A7B9CB952).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped entity
 * @param {number} overlayID An integer representing the overlay id
 * @param {number} colorType 1 for eyebrows, beards, makeup, and chest hair; 2 for blush and lipstick; and 0 otherwise, though not called in those cases.
 * @param {number} colorID An integer representing the primary color id
 * @param {number} secondColorID An integer representing the secondary color id
 */
export function setPedHeadOverlayColor(ped: PedIndex, overlayID: number, colorType: number, colorID: number, secondColorID: number): void {
	const setPedHeadOverlayColor_result = Citizen.invokeNative<void>('0x78935A27', ped, overlayID, colorType, colorID, secondColorID);
	return setPedHeadOverlayColor_result;
}