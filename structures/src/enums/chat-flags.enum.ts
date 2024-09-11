export enum EChatFlags {
	CfIsInitiator = 1,
	CfDoQuickChat,
	CfGoToSpecificPos = 4,
	CfUseCustomHeading = 8,
	CfAutoChat = 16,
	CfPlayGreetingGestures = 32, // Will say a generic greeting to the ped they are talking to initially, this will force the other ped into a response
	CfPlayGoodbyeGestures = 64, // Similar to the above but on leaving (Note, you should only set this and the above flag on one of the peds as response is automatically handled)
}