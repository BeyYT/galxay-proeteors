gdjs.cj_32prepCode = {};
gdjs.cj_32prepCode.GDNewObjectObjects1= [];
gdjs.cj_32prepCode.GDNewObjectObjects2= [];
gdjs.cj_32prepCode.GDp2pidObjects1= [];
gdjs.cj_32prepCode.GDp2pidObjects2= [];
gdjs.cj_32prepCode.GDNewObject2Objects1= [];
gdjs.cj_32prepCode.GDNewObject2Objects2= [];
gdjs.cj_32prepCode.GDNewObject3Objects1= [];
gdjs.cj_32prepCode.GDNewObject3Objects2= [];
gdjs.cj_32prepCode.GDNewObject4Objects1= [];
gdjs.cj_32prepCode.GDNewObject4Objects2= [];

gdjs.cj_32prepCode.conditionTrue_0 = {val:false};
gdjs.cj_32prepCode.condition0IsTrue_0 = {val:false};
gdjs.cj_32prepCode.condition1IsTrue_0 = {val:false};
gdjs.cj_32prepCode.condition2IsTrue_0 = {val:false};


gdjs.cj_32prepCode.mapOfGDgdjs_46cj_9532prepCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.cj_32prepCode.GDNewObject3Objects1});gdjs.cj_32prepCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.cj_32prepCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.cj_32prepCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("p2pid"), gdjs.cj_32prepCode.GDp2pidObjects1);
{for(var i = 0, len = gdjs.cj_32prepCode.GDp2pidObjects1.length ;i < len;++i) {
    gdjs.cj_32prepCode.GDp2pidObjects1[i].setString((( gdjs.cj_32prepCode.GDNewObject2Objects1.length === 0 ) ? "" :gdjs.cj_32prepCode.GDNewObject2Objects1[0].getString()));
}
}{for(var i = 0, len = gdjs.cj_32prepCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.cj_32prepCode.GDNewObject4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("p2p_error")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.cj_32prepCode.GDNewObject3Objects1);

gdjs.cj_32prepCode.condition0IsTrue_0.val = false;
gdjs.cj_32prepCode.condition1IsTrue_0.val = false;
{
gdjs.cj_32prepCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.cj_32prepCode.mapOfGDgdjs_46cj_9532prepCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.cj_32prepCode.condition0IsTrue_0.val ) {
{
gdjs.cj_32prepCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.cj_32prepCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.cj_32prepCode.GDNewObject2Objects1);
{gdjs.evtTools.p2p.connect((( gdjs.cj_32prepCode.GDNewObject2Objects1.length === 0 ) ? "" :gdjs.cj_32prepCode.GDNewObject2Objects1[0].getString()));
}{runtimeScene.getGame().getVariables().get("chatid").setString((( gdjs.cj_32prepCode.GDNewObject2Objects1.length === 0 ) ? "" :gdjs.cj_32prepCode.GDNewObject2Objects1[0].getString()));
}{gdjs.evtTools.p2p.sendDataToAll("connecting", "");
}}

}


{


gdjs.cj_32prepCode.condition0IsTrue_0.val = false;
{
gdjs.cj_32prepCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onError();
}if (gdjs.cj_32prepCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("p2p_error").setString(gdjs.evtTools.p2p.getLastError());
}}

}


{


gdjs.cj_32prepCode.condition0IsTrue_0.val = false;
{
gdjs.cj_32prepCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("allow", false);
}if (gdjs.cj_32prepCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Chatroom join", false);
}}

}


{


gdjs.cj_32prepCode.condition0IsTrue_0.val = false;
{
gdjs.cj_32prepCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.cj_32prepCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


};

gdjs.cj_32prepCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cj_32prepCode.GDNewObjectObjects1.length = 0;
gdjs.cj_32prepCode.GDNewObjectObjects2.length = 0;
gdjs.cj_32prepCode.GDp2pidObjects1.length = 0;
gdjs.cj_32prepCode.GDp2pidObjects2.length = 0;
gdjs.cj_32prepCode.GDNewObject2Objects1.length = 0;
gdjs.cj_32prepCode.GDNewObject2Objects2.length = 0;
gdjs.cj_32prepCode.GDNewObject3Objects1.length = 0;
gdjs.cj_32prepCode.GDNewObject3Objects2.length = 0;
gdjs.cj_32prepCode.GDNewObject4Objects1.length = 0;
gdjs.cj_32prepCode.GDNewObject4Objects2.length = 0;

gdjs.cj_32prepCode.eventsList0(runtimeScene);
return;

}

gdjs['cj_32prepCode'] = gdjs.cj_32prepCode;
