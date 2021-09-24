gdjs.Chatroom_32joinCode = {};
gdjs.Chatroom_32joinCode.GDNewObjectObjects1= [];
gdjs.Chatroom_32joinCode.GDNewObjectObjects2= [];
gdjs.Chatroom_32joinCode.GDNewObject2Objects1= [];
gdjs.Chatroom_32joinCode.GDNewObject2Objects2= [];
gdjs.Chatroom_32joinCode.GDNewObject3Objects1= [];
gdjs.Chatroom_32joinCode.GDNewObject3Objects2= [];

gdjs.Chatroom_32joinCode.conditionTrue_0 = {val:false};
gdjs.Chatroom_32joinCode.condition0IsTrue_0 = {val:false};
gdjs.Chatroom_32joinCode.condition1IsTrue_0 = {val:false};
gdjs.Chatroom_32joinCode.condition2IsTrue_0 = {val:false};
gdjs.Chatroom_32joinCode.conditionTrue_1 = {val:false};
gdjs.Chatroom_32joinCode.condition0IsTrue_1 = {val:false};
gdjs.Chatroom_32joinCode.condition1IsTrue_1 = {val:false};
gdjs.Chatroom_32joinCode.condition2IsTrue_1 = {val:false};


gdjs.Chatroom_32joinCode.eventsList0 = function(runtimeScene) {

{


gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = false;
{
{gdjs.Chatroom_32joinCode.conditionTrue_1 = gdjs.Chatroom_32joinCode.condition0IsTrue_0;
gdjs.Chatroom_32joinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15256532);
}
}if (gdjs.Chatroom_32joinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}}

}


};gdjs.Chatroom_32joinCode.eventsList1 = function(runtimeScene) {

{


gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = false;
{
{gdjs.Chatroom_32joinCode.conditionTrue_1 = gdjs.Chatroom_32joinCode.condition0IsTrue_0;
gdjs.Chatroom_32joinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15258444);
}
}if (gdjs.Chatroom_32joinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}}

}


};gdjs.Chatroom_32joinCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Chatroom_32joinCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Chatroom_32joinCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.Chatroom_32joinCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.Chatroom_32joinCode.GDNewObject2Objects1[i].setString((( gdjs.Chatroom_32joinCode.GDNewObjectObjects1.length === 0 ) ? "" :gdjs.Chatroom_32joinCode.GDNewObjectObjects1[0].getString()));
}
}{runtimeScene.getVariables().get("msgdata").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "> " + (( gdjs.Chatroom_32joinCode.GDNewObjectObjects1.length === 0 ) ? "" :gdjs.Chatroom_32joinCode.GDNewObjectObjects1[0].getString()));
}}

}


{


gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = false;
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = false;
{
gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.Chatroom_32joinCode.condition0IsTrue_0.val ) {
{
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "cooldown");
}}
if (gdjs.Chatroom_32joinCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Chatroom_32joinCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Chatroom_32joinCode.GDNewObject3Objects1);
{gdjs.evtTools.p2p.sendVariableToAll("msgsend", runtimeScene.getVariables().get("msgdata"));
}{for(var i = 0, len = gdjs.Chatroom_32joinCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Chatroom_32joinCode.GDNewObjectObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Chatroom_32joinCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Chatroom_32joinCode.GDNewObject3Objects1[i].setString("");
}
}
{ //Subevents
gdjs.Chatroom_32joinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = false;
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = false;
{
gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.Chatroom_32joinCode.condition0IsTrue_0.val ) {
{
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "cooldown");
}}
if (gdjs.Chatroom_32joinCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Chatroom_32joinCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Chatroom_32joinCode.GDNewObject3Objects1);
{gdjs.evtTools.p2p.sendVariableToAll("msgsend", runtimeScene.getVariables().get("msgdata"));
}{for(var i = 0, len = gdjs.Chatroom_32joinCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Chatroom_32joinCode.GDNewObjectObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Chatroom_32joinCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Chatroom_32joinCode.GDNewObject3Objects1[i].setString("");
}
}
{ //Subevents
gdjs.Chatroom_32joinCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = false;
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = false;
{
gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.Chatroom_32joinCode.condition0IsTrue_0.val ) {
{
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "cooldown"));
}}
if (gdjs.Chatroom_32joinCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Chatroom_32joinCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.Chatroom_32joinCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Chatroom_32joinCode.GDNewObject3Objects1[i].setString("youre on cooldown");
}
}}

}


{


gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = false;
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = false;
{
gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.Chatroom_32joinCode.condition0IsTrue_0.val ) {
{
gdjs.Chatroom_32joinCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "cooldown"));
}}
if (gdjs.Chatroom_32joinCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Chatroom_32joinCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.Chatroom_32joinCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Chatroom_32joinCode.GDNewObject3Objects1[i].setString("youre on cooldown");
}
}}

}


{


gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = false;
{
gdjs.Chatroom_32joinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Chatroom_32joinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}}

}


};

gdjs.Chatroom_32joinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chatroom_32joinCode.GDNewObjectObjects1.length = 0;
gdjs.Chatroom_32joinCode.GDNewObjectObjects2.length = 0;
gdjs.Chatroom_32joinCode.GDNewObject2Objects1.length = 0;
gdjs.Chatroom_32joinCode.GDNewObject2Objects2.length = 0;
gdjs.Chatroom_32joinCode.GDNewObject3Objects1.length = 0;
gdjs.Chatroom_32joinCode.GDNewObject3Objects2.length = 0;

gdjs.Chatroom_32joinCode.eventsList2(runtimeScene);
return;

}

gdjs['Chatroom_32joinCode'] = gdjs.Chatroom_32joinCode;
