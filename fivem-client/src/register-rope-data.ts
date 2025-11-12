/**
 * CFX:REGISTER_ROPE_DATA
 *
 * 0xF213AE8D

 * Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.Returns a rope type which can be passed into [ADD_ROPE](#_0xE832D760399EB220) to use a custom rope design.Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.
 * 
 * ------------------------------------------------------------------
 * @param {number} numSections
 * @param {number} radius
 * @param {string} diffuseTextureName
 * @param {string} normalMapName
 * @param {number} distanceMappingScale
 * @param {number} uvScaleX
 * @param {number} uvScaleY
 * @param {number} specularFresnel
 * @param {number} specularFalloff
 * @param {number} specularIntensity
 * @param {number} bumpiness
 * @param {number} color
 * @returns {number}  Returns a non-negative value on success, or -1 if the rope data could not be registered or an invalid argument is passed.
 */
export function registerRopeData(numSections: number, radius: number, diffuseTextureName: string, normalMapName: string, distanceMappingScale: number, uvScaleX: number, uvScaleY: number, specularFresnel: number, specularFalloff: number, specularIntensity: number, bumpiness: number, color: number): number {
	const registerRopeData_result = Citizen.invokeNative<number>('0xF213AE8D', numSections, radius, diffuseTextureName, normalMapName, distanceMappingScale, uvScaleX, uvScaleY, specularFresnel, specularFalloff, specularIntensity, bumpiness, color);
	return registerRopeData_result;
}