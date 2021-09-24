gdjs.Chatroom_32HostCode = {};
gdjs.Chatroom_32HostCode.GDNewObjectObjects1= [];
gdjs.Chatroom_32HostCode.GDNewObjectObjects2= [];
gdjs.Chatroom_32HostCode.GDp2p_95idObjects1= [];
gdjs.Chatroom_32HostCode.GDp2p_95idObjects2= [];
gdjs.Chatroom_32HostCode.GDNewObject2Objects1= [];
gdjs.Chatroom_32HostCode.GDNewObject2Objects2= [];
gdjs.Chatroom_32HostCode.GDpcObjects1= [];
gdjs.Chatroom_32HostCode.GDpcObjects2= [];
gdjs.Chatroom_32HostCode.GDnewmsgObjects1= [];
gdjs.Chatroom_32HostCode.GDnewmsgObjects2= [];
gdjs.Chatroom_32HostCode.GDoldmsgObjects1= [];
gdjs.Chatroom_32HostCode.GDoldmsgObjects2= [];
gdjs.Chatroom_32HostCode.GDNewObject3Objects1= [];
gdjs.Chatroom_32HostCode.GDNewObject3Objects2= [];
gdjs.Chatroom_32HostCode.GDNewObject4Objects1= [];
gdjs.Chatroom_32HostCode.GDNewObject4Objects2= [];

gdjs.Chatroom_32HostCode.conditionTrue_0 = {val:false};
gdjs.Chatroom_32HostCode.condition0IsTrue_0 = {val:false};
gdjs.Chatroom_32HostCode.condition1IsTrue_0 = {val:false};
gdjs.Chatroom_32HostCode.condition2IsTrue_0 = {val:false};
gdjs.Chatroom_32HostCode.conditionTrue_1 = {val:false};
gdjs.Chatroom_32HostCode.condition0IsTrue_1 = {val:false};
gdjs.Chatroom_32HostCode.condition1IsTrue_1 = {val:false};
gdjs.Chatroom_32HostCode.condition2IsTrue_1 = {val:false};


gdjs.Chatroom_32HostCode.eventsList0 = function(runtimeScene) {

{


gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = false;
{
{gdjs.Chatroom_32HostCode.conditionTrue_1 = gdjs.Chatroom_32HostCode.condition0IsTrue_0;
gdjs.Chatroom_32HostCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15265852);
}
}if (gdjs.Chatroom_32HostCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("newmsg").setNumber(1);
}}

}


};gdjs.Chatroom_32HostCode.mapOfGDgdjs_46Chatroom_9532HostCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.Chatroom_32HostCode.GDNewObject3Objects1});gdjs.Chatroom_32HostCode.eventsList1 = function(runtimeScene) {

{


gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = false;
{
gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Chatroom_32HostCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("p2p_id"), gdjs.Chatroom_32HostCode.GDp2p_95idObjects1);
gdjs.copyArray(runtimeScene.getObjects("pc"), gdjs.Chatroom_32HostCode.GDpcObjects1);
{for(var i = 0, len = gdjs.Chatroom_32HostCode.GDp2p_95idObjects1.length ;i < len;++i) {
    gdjs.Chatroom_32HostCode.GDp2p_95idObjects1[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}{for(var i = 0, len = gdjs.Chatroom_32HostCode.GDpcObjects1.length ;i < len;++i) {
    gdjs.Chatroom_32HostCode.GDpcObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("people connected")));
}
}}

}


{


gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = false;
{
gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("connecting", true);
}if (gdjs.Chatroom_32HostCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("allow", "");
}{runtimeScene.getVariables().get("people connected").add(1);
}}

}


{


gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = false;
{
gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("msgsend", false);
}if (gdjs.Chatroom_32HostCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Chatroom_32HostCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = false;
{
gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("newmsg")) == 1;
}if (gdjs.Chatroom_32HostCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("newmsg"), gdjs.Chatroom_32HostCode.GDnewmsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("oldmsg"), gdjs.Chatroom_32HostCode.GDoldmsgObjects1);
{for(var i = 0, len = gdjs.Chatroom_32HostCode.GDoldmsgObjects1.length ;i < len;++i) {
    gdjs.Chatroom_32HostCode.GDoldmsgObjects1[i].setString((( gdjs.Chatroom_32HostCode.GDnewmsgObjects1.length === 0 ) ? "" :gdjs.Chatroom_32HostCode.GDnewmsgObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.Chatroom_32HostCode.GDnewmsgObjects1.length ;i < len;++i) {
    gdjs.Chatroom_32HostCode.GDnewmsgObjects1[i].setString(gdjs.evtTools.p2p.getEventData("msgsend"));
}
}{runtimeScene.getVariables().get("newmsg").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Chatroom_32HostCode.GDNewObject3Objects1);

gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = false;
gdjs.Chatroom_32HostCode.condition1IsTrue_0.val = false;
{
gdjs.Chatroom_32HostCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Chatroom_32HostCode.mapOfGDgdjs_46Chatroom_9532HostCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Chatroom_32HostCode.condition0IsTrue_0.val ) {
{
gdjs.Chatroom_32HostCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Chatroom_32HostCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p2p_id"), gdjs.Chatroom_32HostCode.GDp2p_95idObjects1);
{gdjs.evtTools.p2p.connect((( gdjs.Chatroom_32HostCode.GDp2p_95idObjects1.length === 0 ) ? "" :gdjs.Chatroom_32HostCode.GDp2p_95idObjects1[0].getString()));
}}

}


};

gdjs.Chatroom_32HostCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Chatroom_32HostCode.GDNewObjectObjects1.length = 0;
gdjs.Chatroom_32HostCode.GDNewObjectObjects2.length = 0;
gdjs.Chatroom_32HostCode.GDp2p_95idObjects1.length = 0;
gdjs.Chatroom_32HostCode.GDp2p_95idObjects2.length = 0;
gdjs.Chatroom_32HostCode.GDNewObject2Objects1.length = 0;
gdjs.Chatroom_32HostCode.GDNewObject2Objects2.length = 0;
gdjs.Chatroom_32HostCode.GDpcObjects1.length = 0;
gdjs.Chatroom_32HostCode.GDpcObjects2.length = 0;
gdjs.Chatroom_32HostCode.GDnewmsgObjects1.length = 0;
gdjs.Chatroom_32HostCode.GDnewmsgObjects2.length = 0;
gdjs.Chatroom_32HostCode.GDoldmsgObjects1.length = 0;
gdjs.Chatroom_32HostCode.GDoldmsgObjects2.length = 0;
gdjs.Chatroom_32HostCode.GDNewObject3Objects1.length = 0;
gdjs.Chatroom_32HostCode.GDNewObject3Objects2.length = 0;
gdjs.Chatroom_32HostCode.GDNewObject4Objects1.length = 0;
gdjs.Chatroom_32HostCode.GDNewObject4Objects2.length = 0;

gdjs.Chatroom_32HostCode.eventsList1(runtimeScene);
return;

}

gdjs['Chatroom_32HostCode'] = gdjs.Chatroom_32HostCode;
