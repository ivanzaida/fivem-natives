/**
 * CFX:GET_RUNTIME_TEXTURE_PITCH
 *
 * 0XCA0A085F

 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 * 
 * ------------------------------------------------------------------
 * @param {number} tex A handle to the runtime texture.
 * @returns {number}  The row pitch in bytes.
 */
export function getRuntimeTexturePitch(tex: number): number {
	const getRuntimeTexturePitch_result = Citizen.invokeNative<number>('0XCA0A085F', tex);
	return getRuntimeTexturePitch_result;
}