/**
 * AUDIO:SET_STATIC_EMITTER_ENABLED
 *
 * 0xC897319696131088

 * 
 * Example:
 * AUDIO::SET_STATIC_EMITTER_ENABLED((Any)"LOS_SANTOS_VANILLA_UNICORN_01_STAGE", false);    AUDIO::SET_STATIC_EMITTER_ENABLED((Any)"LOS_SANTOS_VANILLA_UNICORN_02_MAIN_ROOM", false);    AUDIO::SET_STATIC_EMITTER_ENABLED((Any)"LOS_SANTOS_VANILLA_UNICORN_03_BACK_ROOM", false);
 * 
 * This turns off surrounding sounds not connected directly to peds.
 * 
 * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} emitterName
 * @param {boolean} enabled
 */
export function setStaticEmitterEnabled(emitterName: string, enabled: boolean): void {
	const setStaticEmitterEnabled_result = Citizen.invokeNative<void>('0xC897319696131088', emitterName, enabled);
	return setStaticEmitterEnabled_result;
}