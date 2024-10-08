import { ECamDeathFailEffectState } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DEATH_FAIL_EFFECT_STATE
 *
 * 0x735D248F6CA672AE

 * if p0 is 0, effect is cancelled
 * if p0 is 1, effect zooms in, gradually tilts cam clockwise apx 30 degrees, wobbles slowly. Motion blur is active until cancelled.
 * if p0 is 2, effect immediately tilts cam clockwise apx 30 degrees, begins to wobble slowly, then gradually tilts cam back to normal. The wobbling will continue until the effect is cancelled.
 * 
 * ------------------------------------------------------------------
 * @param {ECamDeathFailEffectState} state
 */
export function setCamDeathFailEffectState(state: ECamDeathFailEffectState | number): void {
	const setCamDeathFailEffectState_result = Citizen.invokeNative<void>('0x735D248F6CA672AE', state);
	return setCamDeathFailEffectState_result;
}