/**
 * GRAPHICS:SET_PARTICLE_FX_BULLET_TRACE_NO_ANGLE_REJECT
 *
 * 0x2B05C87E14049BBF

 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function setParticleFxBulletTraceNoAngleReject(val: boolean): void {
	const setParticleFxBulletTraceNoAngleReject_result = Citizen.invokeNative<void>('0x2B05C87E14049BBF', val);
	return setParticleFxBulletTraceNoAngleReject_result;
}