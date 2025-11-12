/**
 * CFX:SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE
 *
 * 0x68DFF2DD

 * Sets the render technique for drawing an entity's outline. This function allows you to specify a technique group name to control how the entity's outline is rendered in the game.List of known technique group's:```alt0alt1alt2alt3alt4alt5alt6alt7alt8blitcubedefaultgeometryimposterimposterdeferredlightweight0lightweight0CutOutlightweight0CutOutTintlightweight0WaterRefractionAlphalightweight4lightweight4CutOutlightweight4CutOutTintlightweight4WaterRefractionAlphalightweight8lightweight8CutOutlightweight8CutOutTintlightweight8WaterRefractionAlphalightweightHighQuality0lightweightHighQuality0CutOutlightweightHighQuality0WaterRefractionAlphalightweightHighQuality4lightweightHighQuality4CutOutlightweightHighQuality4WaterRefractionAlphalightweightHighQuality8lightweightHighQuality8CutOutlightweightHighQuality8WaterRefractionAlphalightweightNoCapsule4lightweightNoCapsule8multilighttessellateuiunlitwaterreflectionwaterreflectionalphaclipwaterreflectionalphacliptintwdcascade```
 * 
 * ------------------------------------------------------------------
 * @param {string} techniqueGroup Technique group name.
 */
export function setEntityDrawOutlineRenderTechnique(techniqueGroup: string): void {
	const setEntityDrawOutlineRenderTechnique_result = Citizen.invokeNative<void>('0x68DFF2DD', techniqueGroup);
	return setEntityDrawOutlineRenderTechnique_result;
}