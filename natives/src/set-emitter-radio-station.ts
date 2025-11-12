/**
 * AUDIO:SET_EMITTER_RADIO_STATION
 *
 * 0x74378390011ACDA4

 * 
 * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} emitterName
 * @param {string} radioStationName
 */
export function setEmitterRadioStation(emitterName: string, radioStationName: string): void {
	const setEmitterRadioStation_result = Citizen.invokeNative<void>('0x74378390011ACDA4', emitterName, radioStationName);
	return setEmitterRadioStation_result;
}