import { EStatsenum, FloatRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_POS
 *
 * 0xB738B2E1369125F6

 * 
 * p3 is probably characterSlot or BOOL save, always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {FloatRef} x [Ref]
 * @param {FloatRef} y [Ref]
 * @param {FloatRef} z [Ref]
 * @param {number} player
 * @returns {boolean}  
 */
export function statGetPos(keyHash: EStatsenum | number, x: FloatRef /* ptr */, y: FloatRef /* ptr */, z: FloatRef /* ptr */, player: number = 1): boolean {
	const statGetPos_result = Citizen.invokeNative<boolean>('0xB738B2E1369125F6', keyHash, x.dataView, y.dataView, z.dataView, player);
	return statGetPos_result;
}