/**
 * GRAPHICS:START_PARTICLE_FX_NON_LOOPED_AT_COORD
 *
 * 0xE56FEB6B12B5A32C

 * 
 * Triggers a named particle effect at a world position.
 * This should only be used with non-looped particle effects.
 * The particle effect will then play and tidy itself up when finished.
 * There is no access to the particle effect once it has been triggered.
 * 
 * GRAPHICS::START_PARTICLE_FX_NON_LOOPED_AT_COORD("scr_paleto_roof_impact", -140.8576f, 6420.789f, 41.1391f, 0f, 0f, 267.3957f, 0x3F800000, 0, 0, 0);
 * 
 * Axis - Invert Axis Flags
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * -------------------------------------------------------------------
 * C#
 * 
 * Function.Call<int>(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, = you are calling this function.
 * 
 * char effectname = This is an in-game effect name, for e.g. "scr_fbi4_trucks_crash" is used to give the effects when truck crashes etc
 * 
 * float x, y, z pos = this one is Simple, you just have to declare, where do you want this effect to take place at, so declare the ordinates
 * 
 * float xrot, yrot, zrot = Again simple? just mention the value in case if you want the effect to rotate.
 * 
 * float scale = is declare the scale of the effect, this may vary as per the effects for e.g 1.0f
 * 
 * bool xaxis, yaxis, zaxis = To bool the axis values.
 * 
 * example:
 * Function.Call<int>(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, "scr_fbi4_trucks_crash", GTA.Game.Player.Character.Position.X, GTA.Game.Player.Character.Position.Y, GTA.Game.Player.Character.Position.Z + 4f, 0, 0, 0, 5.5f, 0, 0, 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} fxName
 * @param {number} vecPositionX
 * @param {number} vecPositionY
 * @param {number} vecPositionZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {number} scale Size scale of the effect (default size = 1.0) BOOL  whether or not the particle effect has been created ok
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {boolean}  
 */
export function startParticleFxNonLoopedAtCoord(fxName: string, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): boolean {
	const startParticleFxNonLoopedAtCoord_result = Citizen.invokeNative<boolean>('0xE56FEB6B12B5A32C', fxName, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startParticleFxNonLoopedAtCoord_result;
}