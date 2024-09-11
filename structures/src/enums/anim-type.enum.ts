export enum EAnimType {
	AnimScript = 1, // Include scripted animations (TASK_PLAY_ANIM, TASK_ACRIPTED_ANIMATION and PLAY_ENTITY_ANIM)
	AnimSyncedScene, // Include synced scene animations (TASK_SYNCHRONIZED_SCENE and PLAY_SYNCHRONIZED_ENTITY_ANIM)
	AnimCode = 4, // Include animations being played by code (NOT CURRENTLY SUPPORTED! - see an anim programmer if you need this)
	AnimDefault = 3, // Includes scripted and synchronized scene anims by default
}