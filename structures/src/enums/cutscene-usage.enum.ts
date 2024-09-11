export enum ECutsceneUsage {
	CuAnimateExistingScriptEntity, // Get the cut scene to animate a script controlled entity
	CuAnimateAndDeleteExistingScriptEntity, // Get the cutscene to animate a script controled entity and then delete it. e.g. if the entity dies in the scene
	CuCreateAndAnimateNewScriptEntity, // Get the cut scene to create and script that will be handed to script control at the end of the scene. e.g. player meets a buddy in the scene
	CuDontAnimateEntity, // Tell the the cutscene that this ped is dead and should not appera in the scene.
}