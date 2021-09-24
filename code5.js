gdjs.HostCode = {};
gdjs.HostCode.GDp2p_95idObjects1= [];
gdjs.HostCode.GDp2p_95idObjects2= [];
gdjs.HostCode.GDNewObjectObjects1= [];
gdjs.HostCode.GDNewObjectObjects2= [];
gdjs.HostCode.GDNewObject2Objects1= [];
gdjs.HostCode.GDNewObject2Objects2= [];
gdjs.HostCode.GDNewObject3Objects1= [];
gdjs.HostCode.GDNewObject3Objects2= [];
gdjs.HostCode.GDNewObject4Objects1= [];
gdjs.HostCode.GDNewObject4Objects2= [];
gdjs.HostCode.GDNewObject5Objects1= [];
gdjs.HostCode.GDNewObject5Objects2= [];
gdjs.HostCode.GDNewObject6Objects1= [];
gdjs.HostCode.GDNewObject6Objects2= [];

gdjs.HostCode.conditionTrue_0 = {val:false};
gdjs.HostCode.condition0IsTrue_0 = {val:false};
gdjs.HostCode.condition1IsTrue_0 = {val:false};


gdjs.HostCode.eventsList0 = function(runtimeScene) {

{


gdjs.HostCode.condition0IsTrue_0.val = false;
{
gdjs.HostCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HostCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("p2p_id"), gdjs.HostCode.GDp2p_95idObjects1);
{for(var i = 0, len = gdjs.HostCode.GDp2p_95idObjects1.length ;i < len;++i) {
    gdjs.HostCode.GDp2p_95idObjects1[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("p2p_id"), gdjs.HostCode.GDp2p_95idObjects1);
{for(var i = 0, len = gdjs.HostCode.GDp2p_95idObjects1.length ;i < len;++i) {
    gdjs.HostCode.GDp2p_95idObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.HostCode.GDp2p_95idObjects1[i].getWidth()) / 2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.HostCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.HostCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.HostCode.GDNewObject2Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.HostCode.GDNewObject2Objects1[i].getWidth()) / 2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.HostCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.HostCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.HostCode.GDNewObject2Objects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


{


gdjs.HostCode.condition0IsTrue_0.val = false;
{
gdjs.HostCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("connected", true);
}if (gdjs.HostCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Multiplayer_Game1", false);
}}

}


{


gdjs.HostCode.condition0IsTrue_0.val = false;
{
gdjs.HostCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
}if (gdjs.HostCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{


gdjs.HostCode.condition0IsTrue_0.val = false;
{
gdjs.HostCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
}if (gdjs.HostCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useCustomBrokerServer(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)), "4000", gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)), false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.HostCode.GDNewObject2Objects1);
{runtimeScene.getVariables().getFromIndex(0).setString((( gdjs.HostCode.GDNewObject2Objects1.length === 0 ) ? "" :gdjs.HostCode.GDNewObject2Objects1[0].getString()));
}}

}


};

gdjs.HostCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HostCode.GDp2p_95idObjects1.length = 0;
gdjs.HostCode.GDp2p_95idObjects2.length = 0;
gdjs.HostCode.GDNewObjectObjects1.length = 0;
gdjs.HostCode.GDNewObjectObjects2.length = 0;
gdjs.HostCode.GDNewObject2Objects1.length = 0;
gdjs.HostCode.GDNewObject2Objects2.length = 0;
gdjs.HostCode.GDNewObject3Objects1.length = 0;
gdjs.HostCode.GDNewObject3Objects2.length = 0;
gdjs.HostCode.GDNewObject4Objects1.length = 0;
gdjs.HostCode.GDNewObject4Objects2.length = 0;
gdjs.HostCode.GDNewObject5Objects1.length = 0;
gdjs.HostCode.GDNewObject5Objects2.length = 0;
gdjs.HostCode.GDNewObject6Objects1.length = 0;
gdjs.HostCode.GDNewObject6Objects2.length = 0;

gdjs.HostCode.eventsList0(runtimeScene);
return;

}

gdjs['HostCode'] = gdjs.HostCode;
