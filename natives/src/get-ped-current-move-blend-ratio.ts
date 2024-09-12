import { PedIndex, FloatRef } from '@ivanzaida/structures'

/**
 * PED:GET_PED_CURRENT_MOVE_BLEND_RATIO
 *
 * 0x5437DF794F3A1FAA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {FloatRef} mbrXOut [Ref]
 * @param {FloatRef} mbrYOut [Ref]
 * @returns {boolean}  
 */
export function getPedCurrentMoveBlendRatio(ped: PedIndex, mbrXOut: FloatRef /* ptr */, mbrYOut: FloatRef /* ptr */): boolean {
	const getPedCurrentMoveBlendRatio_result = Citizen.invokeNative<boolean>('0x5437DF794F3A1FAA', ped, mbrXOut.dataView, mbrYOut.dataView);
	return getPedCurrentMoveBlendRatio_result;
}