import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_ANY_PLAYER_NEAR
 *
 * 0x0955C6F927712241

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} retPlayerIds [Ref]
 * @param {IntRef} retNumber [Ref]
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {boolean} in3d Make search using Z coordinate as well.
 * @returns {boolean}  
 */
export function networkIsAnyPlayerNear(retPlayerIds: IntRef /* ptr */, retNumber: IntRef /* ptr */, posX: number, posY: number, posZ: number, radius: number, in3d: boolean = true): boolean {
	const networkIsAnyPlayerNear_result = Citizen.invokeNative<boolean>('0x0955C6F927712241', retPlayerIds.dataView, retNumber.dataView, posX, posY, posZ, radius, in3d);
	return networkIsAnyPlayerNear_result;
}