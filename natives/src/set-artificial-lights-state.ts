/**
 * GRAPHICS:SET_ARTIFICIAL_LIGHTS_STATE
 *
 * 0x771FE86D2A331DD7

 * 
 * Does not affect weapons, particles, fire/explosions, flashlights or the sun.
 * When set to true, all emissive textures (including ped components that have light effects), street lights, building lights, vehicle lights, etc will all be turned off.
 * 
 * Used in Humane Labs Heist for EMP.
 * 
 * state: True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state
 */
export function setArtificialLightsState(state: boolean): void {
	const setArtificialLightsState_result = Citizen.invokeNative<void>('0x771FE86D2A331DD7', state);
	return setArtificialLightsState_result;
}