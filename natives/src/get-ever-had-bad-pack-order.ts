/**
 * DLC:GET_EVER_HAD_BAD_PACK_ORDER
 *
 * 0x0859E74838FA7854

 * 
 * Gets whether the order of DLC has ever been bad since the session started
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getEverHadBadPackOrder(): boolean {
	const getEverHadBadPackOrder_result = Citizen.invokeNative<boolean>('0x0859E74838FA7854', );
	return getEverHadBadPackOrder_result;
}